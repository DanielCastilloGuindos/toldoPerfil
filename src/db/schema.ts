
import { sqliteTable, text, integer, blob } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const Customers = sqliteTable('Customers', {
    customer_id: integer('customer_id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    category: text('category').notNull(),
    images: text('images', { mode: 'json' }).notNull(),
    isVisible: integer('isVisible', { mode: 'boolean' }).default(true),
    published: integer('published', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export const Analytics = sqliteTable('Analytics', {
    id: integer('id').primaryKey(),
    type: text('type').notNull(), // 'page_view', 'contact_click', 'whatsapp_click'
    data: text('data', { mode: 'json' }), // Extra info
    created_at: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});
