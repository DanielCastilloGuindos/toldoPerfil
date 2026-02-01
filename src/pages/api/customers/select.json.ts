import { db } from "@/db/client";
import { Customers } from "@/db/schema";
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
	const customers = await db.select().from(Customers);
	return new Response(JSON.stringify(customers));
};