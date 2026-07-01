import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error('Error: GEMINI_API_KEY is not defined in environment variables.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

const CITIES = [
    'Velilla de San Antonio', 'Loeches', 'Mejorada del Campo', 
    'Arganda del Rey', 'Rivas-Vaciamadrid', 'Alcalá de Henares',
    'Torrejón de Ardoz', 'San Fernando de Henares', 'Campo Real'
];

const AWNING_NOVELTIES = [
    'Toldos cofres con tira LED integrada y motorización inteligente con Alexa/Google Home',
    'Tejidos acrílicos reciclados y ecosostenibles con certificado de ahorro energético',
    'Pérgolas bioclimáticas con lamas orientables automáticas y sensores de lluvia y nieve',
    'Toldos de brazo extensible ultra-resistentes con sistemas de tensión por cable de acero',
    'Sistemas cortavientos tipo Zip Screen con guiado por cremallera para terrazas de invierno',
    'Instalación rápida sin taladrar para comunidades con fachadas protegidas en Madrid'
];

async function generate() {
    const city = CITIES[Math.floor(Math.random() * CITIES.length)];
    const novelty = AWNING_NOVELTIES[Math.floor(Math.random() * AWNING_NOVELTIES.length)];

    console.log(`Generando artículo utilizando Gemini 1.5 Flash...`);
    console.log(`Tema: "${novelty}" enfocado en la zona de "${city}"`);

    const prompt = `
    Eres un redactor experto en SEO y redacción técnica para "Toldo Perfil", una prestigiosa empresa de fabricación, montaje e instalación de toldos y pérgolas a medida en la Comunidad de Madrid (Velilla de San Antonio, Loeches, etc.).
    
    Escribe un artículo de blog altamente atractivo y técnicamente correcto sobre la siguiente novedad de toldos:
    Novedad/Tendencia: "${novelty}"
    Enfoque geográfico local: "${city}" (menciona esta localidad y municipios limítrofes de Madrid varias veces de forma natural para potenciar el posicionamiento SEO local).
    
    El artículo debe incluir consejos prácticos, ventajas técnicas de los materiales y una llamada a la acción invitando a los lectores a pedir presupuesto a Toldo Perfil.
    
    REQUISITO DE FORMATO CRÍTICO:
    Debes devolver estrictamente el texto con un bloque Frontmatter en formato YAML al inicio, delimitado por "---", y el contenido del post en formato Markdown estándar justo después. No añadas bloques envolventes de código tipo \`\`\`markdown al principio o final.
    
    Esquema de la salida:
    ---
    title: "Título de clickbait SEO con gancho local (mencionar ${city} o similar)"
    description: "Meta descripción corta de menos de 150 caracteres para el buscador."
    date: "${new Date().toISOString().split('T')[0]}"
    ---
    Breve párrafo de introducción (no incluyas un título H1 en el cuerpo del Markdown, la plantilla de la web ya lo genera de forma automática usando el campo "title" superior).
    
    ## Subtítulo 1 (H2)
    Detalles sobre la novedad...
    
    ## Subtítulo 2 (H2)
    Beneficios para los vecinos de ${city}...
    
    ## Conclusión y Presupuesto
    Llamada a la acción.
    `;

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        const text = result.response.text().trim();

        // Strip markdown backticks if returned
        let cleanText = text;
        if (cleanText.startsWith('```markdown')) {
            cleanText = cleanText.substring(11, cleanText.length - 3).trim();
        } else if (cleanText.startsWith('```')) {
            cleanText = cleanText.substring(3, cleanText.length - 3).trim();
        }

        // Get title from frontmatter to build a clean slug
        const titleMatch = cleanText.match(/title:\s*"(.*)"/);
        const title = titleMatch ? titleMatch[1] : `novedad-${Date.now()}`;
        const slug = title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // remove accents
            .replace(/[^a-z0-9]+/g, '-')     // replace spaces with hyphens
            .replace(/(^-|-$)+/g, '');       // remove trailing/leading hyphens

        const postsDir = path.join(process.cwd(), 'src/blog-posts');
        if (!fs.existsSync(postsDir)) {
            fs.mkdirSync(postsDir, { recursive: true });
        }

        const filePath = path.join(postsDir, `${slug}.md`);
        fs.writeFileSync(filePath, cleanText, 'utf-8');
        console.log(`Artículo autogenerado y guardado en: ${filePath}`);

    } catch (error) {
        console.error('Error durante la generación de contenido:', error);
        process.exit(1);
    }
}

generate();
