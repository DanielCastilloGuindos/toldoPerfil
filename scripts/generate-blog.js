import { generateBlogPost } from '../src/utils/blog-generator.ts';

async function run() {
    try {
        const result = await generateBlogPost();
        console.log(`Cron exitoso: artículo generado y guardado en la base de datos con slug: ${result.slug}`);
    } catch (e) {
        console.error('Error durante la generación de contenido en el cron:', e);
        process.exit(1);
    }
}

run();
