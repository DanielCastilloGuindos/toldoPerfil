import { GoogleGenerativeAI } from '@google/generative-ai';
import { db } from '../db/client';
import { Blogs, AiSettings } from '../db/schema';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

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

// Curated stock photo URLs from Unsplash representing architectural outdoor terrace, pergolas, and awnings
const STOCK_IMAGES = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200'
];

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

    // Pick a random real stock photo from our curated Unsplash collection
    const randomStockUrl = STOCK_IMAGES[Math.floor(Math.random() * STOCK_IMAGES.length)];

    let finalImageUrl = '';
    const imgDir = path.join(process.cwd(), 'public/img/blog');
    if (!fs.existsSync(imgDir)) {
        fs.mkdirSync(imgDir, { recursive: true });
    }

    const localImagePath = path.join(imgDir, `${slug}.webp`);
    const dbImagePath = `/img/blog/${slug}.webp`;

    try {
        console.log(`Descargando imagen real de stock desde Unsplash: ${randomStockUrl}...`);
        const imgRes = await fetch(randomStockUrl);
        if (!imgRes.ok) {
            throw new Error(`Fallo al descargar imagen de stock: ${imgRes.statusText}`);
        }
        const arrayBuffer = await imgRes.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        console.log(`Procesando y convirtiendo a WebP optimizado con Sharp...`);
        await sharp(buffer)
            .resize(1024, 768, {
                fit: 'cover',
                position: 'center'
            })
            .webp({ quality: 80 })
            .toFile(localImagePath);

        finalImageUrl = dbImagePath;
        console.log(`Imagen de stock WebP optimizada guardada con éxito en: ${localImagePath}`);
    } catch (err) {
        console.error('Error al descargar u optimizar la imagen real de stock con Sharp:', err);
    }

    const finalPublishDate = publishDate || new Date();

    const insertResult = await db.insert(Blogs).values({
        slug,
        title,
        description,
        image: finalImageUrl || null,
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

/**
 * Generates a blog post based on a news article about JCDesign or ToldoPerfil
 */
export async function generateNewsBlogPost(newsData: { title: string, link: string, pubDate: Date }) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error('GEMINI_API_KEY is not defined in environment variables.');
    }

    const settings = await getOrInitializeSettings();

    console.log(`Generando artículo de noticias utilizando ${settings.modelName} (temp: ${settings.temperature})...`);
    console.log(`Noticia base: "${newsData.title}" (${newsData.pubDate.toLocaleDateString('es-ES')})`);

    const userPrompt = `Eres un redactor experto en SEO, comunicación y relaciones públicas para "Toldo Perfil", una marca comercial líder en toldos, pérgolas y cerramientos a medida en Madrid, perteneciente a la empresa "JCDesign Rótulos S.L." (ubicada en Velilla de San Antonio).
    
Escribe un artículo de blog corporativo y periodístico detallado basado en la siguiente noticia:
Noticia: "${newsData.title}"
Fecha de publicación original: ${newsData.pubDate.toLocaleDateString('es-ES')}
Enlace de referencia de la noticia: ${newsData.link}

El artículo debe cumplir las siguientes pautas:
1. Comentar la noticia de forma profesional y con gancho comercial, explicando cómo se relaciona con la trayectoria, productos o el ecosistema de JCDesign Rótulos y Toldo Perfil.
2. Destacar nuestro compromiso con la calidad, la innovación en la protección solar, y la gran capacidad técnica heredada de JCDesign en la Comunidad de Madrid.
3. Mencionar que somos una marca de toldos consolidada en Velilla de San Antonio.
4. Al final del artículo, incluir de forma natural e integrada un párrafo donde se enlace a la noticia original de referencia. Por ejemplo: "Puedes leer la información oficial en la noticia publicada el ${newsData.pubDate.toLocaleDateString('es-ES')} aquí: [Referencia original](${newsData.link})".
5. Cerrar con una llamada a la acción atractiva para solicitar presupuesto gratuito para toldos o cerramientos.

REQUISITO DE FORMATO CRÍTICO:
Debes devolver estrictamente el texto con un bloque Frontmatter en formato YAML al inicio, delimitado por "---", y el contenido del post en formato Markdown estándar justo después. No añadas bloques envolventes de código tipo \`\`\`markdown al principio o final.

Esquema de la salida:
---
title: "Título atractivo relacionado con la noticia (incluyendo algún elemento local o comercial de Madrid)"
description: "Meta descripción corta de menos de 150 caracteres para SEO."
---
[Breve introducción conectando la noticia con el lector...]

## [Subtítulo 1 (H2)]
[Explicación de la noticia y su contexto con nuestra marca...]

## [Subtítulo 2 (H2)]
[Por qué elegir a Toldo Perfil / JCDesign y los beneficios de nuestros productos...]

## Referencia y Presupuesto (H2)
[Mención al enlace original de la noticia: [Noticia original](${newsData.link})]
[Llamada a la acción clara para pedir presupuesto gratuito...]`;

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
        title = titleMatch ? titleMatch[1] : `noticia-${Date.now()}`;
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

    // Pick a random stock photo
    const randomStockUrl = STOCK_IMAGES[Math.floor(Math.random() * STOCK_IMAGES.length)];

    let finalImageUrl = '';
    const imgDir = path.join(process.cwd(), 'public/img/blog');
    if (!fs.existsSync(imgDir)) {
        fs.mkdirSync(imgDir, { recursive: true });
    }

    const localImagePath = path.join(imgDir, `${slug}.webp`);
    const dbImagePath = `/img/blog/${slug}.webp`;

    try {
        console.log(`Descargando imagen real de stock: ${randomStockUrl}...`);
        const imgRes = await fetch(randomStockUrl);
        if (!imgRes.ok) {
            throw new Error(`Fallo al descargar imagen: ${imgRes.statusText}`);
        }
        const arrayBuffer = await imgRes.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        console.log(`Procesando a WebP optimizado con Sharp...`);
        await sharp(buffer)
            .resize(1024, 768, {
                fit: 'cover',
                position: 'center'
            })
            .webp({ quality: 80 })
            .toFile(localImagePath);

        finalImageUrl = dbImagePath;
        console.log(`Imagen WebP guardada en: ${localImagePath}`);
    } catch (err) {
        console.error('Error al descargar u optimizar la imagen:', err);
    }

    const publishDate = newsData.pubDate;

    await db.insert(Blogs).values({
        slug,
        title,
        description,
        image: finalImageUrl || null,
        content: contentBody,
        isVisible: true,
        publishedAt: publishDate
    });

    return {
        slug,
        title,
        publishedAt: publishDate
    };
}

