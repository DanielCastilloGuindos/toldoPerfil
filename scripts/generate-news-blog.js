import { generateNewsBlogPost } from '../src/utils/blog-generator.ts';
import { db } from '../src/db/client.ts';
import { Blogs } from '../src/db/schema.ts';

const FALLBACK_NEWS = [
    {
        title: "JCDesign Rótulos expande sus operaciones y consolida la marca ToldoPerfil en Madrid",
        link: "https://toldoperfil.es/nosotros",
        pubDate: new Date("2014-06-15T12:00:00Z")
    },
    {
        title: "ToldoPerfil anuncia una nueva gama de pérgolas bioclimáticas avanzadas en Velilla de San Antonio",
        link: "https://toldoperfil.es/productos",
        pubDate: new Date("2023-04-10T09:30:00Z")
    },
    {
        title: "La dirección de JCDesign Rótulos, liderada por Javier Castillo Delgado, impulsa la sostenibilidad con tejidos acrílicos ecológicos",
        link: "https://toldoperfil.es/faq",
        pubDate: new Date("2024-02-20T10:00:00Z")
    },
    {
        title: "ToldoPerfil abre un nuevo taller de fabricación de capotas y cerramientos de aluminio directos de fábrica",
        link: "https://toldoperfil.es/",
        pubDate: new Date("2021-11-05T08:00:00Z")
    }
];

function decodeHtmlEntities(str) {
    return str
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'");
}

async function run() {
    try {
        console.log("Iniciando búsqueda de noticias sobre JCDesign, Javier Castillo Delgado y ToldoPerfil...");
        
        let foundNews = [];
        
        try {
            const query = encodeURIComponent('jcdesign OR "javier castillo delgado" OR "francisco javier castillo delgado" OR ToldoPerfil');
            const rssUrl = `https://news.google.com/rss/search?q=${query}&hl=es&gl=ES&ceid=ES:es`;
            console.log(`Buscando en Google News RSS: ${rssUrl}`);
            
            const response = await fetch(rssUrl);
            if (response.ok) {
                const xmlText = await response.text();
                const itemRegex = /<item>([\s\S]*?)<\/item>/g;
                let match;
                while ((match = itemRegex.exec(xmlText)) !== null) {
                    const itemContent = match[1];
                    const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/);
                    const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
                    const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
                    
                    if (titleMatch && linkMatch) {
                        foundNews.push({
                            title: decodeHtmlEntities(titleMatch[1].trim()),
                            link: linkMatch[1].trim(),
                            pubDate: pubDateMatch ? new Date(pubDateMatch[1].trim()) : new Date()
                        });
                    }
                }
            }
        } catch (rssError) {
            console.warn("Fallo al consultar el RSS de Google News (usando fallback):", rssError.message);
        }

        console.log(`Noticias encontradas en Google News: ${foundNews.length}`);

        // Merge found news and fallback news
        const allNews = [...foundNews, ...FALLBACK_NEWS];

        // Let's filter out news that we already generated blogs for
        const existingBlogs = await db.select({ slug: Blogs.slug }).from(Blogs);
        const existingSlugs = new Set(existingBlogs.map(b => b.slug));

        let selectedNews = null;
        for (const news of allNews) {
            // Helper to generate a potential slug
            const tempSlug = news.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');

            if (!existingSlugs.has(tempSlug)) {
                selectedNews = news;
                break;
            }
        }

        // If all news are already processed, pick a random one
        if (!selectedNews) {
            console.log("Todas las noticias encontradas ya tienen un artículo de blog. Seleccionando una al azar...");
            selectedNews = allNews[Math.floor(Math.random() * allNews.length)];
        }

        console.log(`Noticia seleccionada para generar blog: "${selectedNews.title}"`);
        console.log(`Fecha original: ${selectedNews.pubDate.toISOString()} | Enlace: ${selectedNews.link}`);

        const result = await generateNewsBlogPost(selectedNews);
        console.log(`Blog de noticias generado exitosamente!`);
        console.log(`Título: "${result.title}"`);
        console.log(`Slug: "${result.slug}"`);
        console.log(`Fecha publicación asignada (fecha de la noticia): ${result.publishedAt.toLocaleDateString('es-ES')}`);

    } catch (e) {
        console.error('Error durante la generación de blog de noticias:', e);
        process.exit(1);
    }
}

run();
