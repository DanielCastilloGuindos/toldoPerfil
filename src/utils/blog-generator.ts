import { GoogleGenerativeAI } from '@google/generative-ai';
import { db } from '../db/client';
import { Blogs, AiSettings } from '../db/schema';

const DEFAULT_CITIES = [
    'Velilla de San Antonio', 'Loeches', 'Mejorada del Campo', 
    'Arganda del Rey', 'Rivas-Vaciamadrid', 'Alcalá de Henares',
    'Torrejón de Ardoz', 'San Fernando de Henares', 'Campo Real'
];

const DEFAULT_TOPICS = [
    'Toldos cofres con tira LED integrada y motorización inteligente con Alexa/Google Home',
    'Tejidos acrílicos reciclados y ecosostenibles con certificado de ahorro energético',
    'Pérgolas bioclimáticas con lamas orientables automáticas y sensores de lluvia y nieve',
    'Toldos de brazo extensible ultra-resistentes con sistemas de tensión por cable de acero',
    'Sistemas cortavientos tipo Zip Screen con guiado por cremallera para terrazas de invierno',
    'Instalación rápida sin taladrar para comunidades con fachadas protegidas en Madrid'
];

const DEFAULT_SYSTEM_PROMPT = `Eres un redactor experto en SEO y redacción técnica para "Toldo Perfil", una prestigiosa empresa de fabricación, montaje e instalación de toldos y pérgolas a medida en la Comunidad de Madrid (Velilla de San Antonio, Loeches, etc.).

Escribe un artículo de blog altamente atractivo, educativo y técnicamente correcto sobre la novedad de toldos especificada.

El artículo debe enfocarse al conocimiento y educación del cliente final que desea comprar un toldo o pérgola (enseñándole cómo elegir el mejor material, cómo funcionan las motorizaciones o domótica, y los beneficios para su hogar o comercio), guiándolo de forma de embudo y de manera natural a que la mejor opción para comprar e instalar dicho toldo en Madrid somos nosotros (Toldo Perfil).

Incluye consejos prácticos, ventajas técnicas de los materiales y una llamada a la acción clara e integrada invitando a los lectores a solicitar presupuesto gratuito y sin compromiso a Toldo Perfil.

REQUISITO DE FORMATO CRÍTICO:
Debes devolver estrictamente el texto con un bloque Frontmatter en formato YAML al inicio, delimitado por "---", y el contenido del post en formato Markdown estándar justo después. No añadas bloques envolventes de código tipo \`\`\`markdown al principio o final.

Esquema de la salida:
---
title: "Título con gancho local y comercial (mencionar {city} o similar)"
description: "Meta descripción corta de menos de 150 caracteres para el buscador."
---
Breve párrafo de introducción (no incluyas un título H1 en el cuerpo del Markdown, la plantilla de la web ya lo genera de forma automática usando el campo "title" superior).

## Subtítulo 1 (H2)
Detalles educativos sobre la novedad...

## Subtítulo 2 (H2)
Beneficios específicos para tu hogar y por qué elegir a Toldo Perfil en {city} para su instalación...

## Conclusión y Presupuesto
Llamada a la acción clara para pedir presupuesto en Toldo Perfil.`;

/**
 * Ensures AI settings exist in the DB, inserting defaults if not.
 */
export async function getOrInitializeSettings() {
    const settings = await db.select().from(AiSettings).limit(1);
    if (settings.length > 0) {
        return settings[0];
    }

    const defaultValues = {
        id: 1,
        modelName: 'gemini-2.5-flash',
        temperature: '0.7',
        cities: DEFAULT_CITIES.join('\n'),
        topics: DEFAULT_TOPICS.join('\n'),
        systemPrompt: DEFAULT_SYSTEM_PROMPT
    };

    await db.insert(AiSettings).values(defaultValues);
    return defaultValues;
}

/**
 * Generates a blog post using the AI Settings configured in the database
 */
export async function generateBlogPost(publishDate?: Date) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error('GEMINI_API_KEY is not defined in environment variables.');
    }

    const settings = await getOrInitializeSettings();
    const citiesList = settings.cities.split('\n').map(c => c.trim()).filter(Boolean);
    const topicsList = settings.topics.split('\n').map(t => t.trim()).filter(Boolean);

    if (citiesList.length === 0 || topicsList.length === 0) {
        throw new Error('Cities or Topics lists are empty in AI settings.');
    }

    const city = citiesList[Math.floor(Math.random() * citiesList.length)];
    const novelty = topicsList[Math.floor(Math.random() * topicsList.length)];

    console.log(`Generando artículo utilizando ${settings.modelName} (temp: ${settings.temperature})...`);
    console.log(`Tema: "${novelty}" enfocado en la zona de "${city}"`);

    // Prepare system instructions and query
    let userPrompt = settings.systemPrompt
        .replace(/{city}/g, city)
        .replace(/{novelty}/g, novelty);

    userPrompt += `\n\nNovedad/Tema a tratar en este post: "${novelty}"\nCiudad/Enfoque Geográfico: "${city}"`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
        model: settings.modelName,
        generationConfig: {
            temperature: parseFloat(settings.temperature) || 0.7
        }
    });

    const result = await model.generateContent(userPrompt);
    const text = result.response.text().trim();

    // Clean backticks
    let cleanText = text;
    if (cleanText.startsWith('```markdown')) {
        cleanText = cleanText.substring(11, cleanText.length - 3).trim();
    } else if (cleanText.startsWith('```')) {
        cleanText = cleanText.substring(3, cleanText.length - 3).trim();
    }

    // Parse YAML Frontmatter
    let title = '';
    let description = '';
    let contentBody = cleanText;

    const frontmatterMatch = cleanText.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (frontmatterMatch) {
        const yaml = frontmatterMatch[1];
        contentBody = frontmatterMatch[2].trim();

        const yamlLines = yaml.split('\n');
        for (const line of yamlLines) {
            const parts = line.split(':');
            if (parts.length >= 2) {
                const key = parts[0].trim().toLowerCase();
                let val = parts.slice(1).join(':').trim();
                if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                    val = val.substring(1, val.length - 1);
                }
                if (key === 'title') {
                    title = val;
                } else if (key === 'description') {
                    description = val;
                }
            }
        }
    }

    if (!title) {
        const titleMatch = cleanText.match(/title:\s*"(.*)"/i);
        title = titleMatch ? titleMatch[1] : `novedad-${Date.now()}`;
    }
    if (!description) {
        description = title;
    }

    const slug = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[^a-z0-9]+/g, '-')     // replace spaces with hyphens
        .replace(/(^-|-$)+/g, '');       // remove trailing/leading hyphens

    const finalPublishDate = publishDate || new Date();

    const insertResult = await db.insert(Blogs).values({
        slug,
        title,
        description,
        content: contentBody,
        isVisible: true,
        publishedAt: finalPublishDate
    });

    return {
        slug,
        title,
        publishedAt: finalPublishDate
    };
}
