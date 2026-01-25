import { db, Customers } from 'astro:db';

export async function GET() {
    const products = await db.select().from(Customers);
    return new Response(
        JSON.stringify(products),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}
