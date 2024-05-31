import { db, Customers, isDbError } from 'astro:db';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
		const customers = await db.select().from(Customers);
		return new Response( JSON.stringify(customers) );
};