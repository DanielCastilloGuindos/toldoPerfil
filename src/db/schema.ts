
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
    order: integer('order').default(0),
    specs: text('specs'),
    slug: text('slug'),
});

export const Analytics = sqliteTable('Analytics', {
    id: integer('id').primaryKey(),
    type: text('type').notNull(), // 'page_view', 'contact_click', 'whatsapp_click'
    data: text('data', { mode: 'json' }), // Extra info
    created_at: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export const Blogs = sqliteTable('Blogs', {
    id: integer('id').primaryKey(),
    slug: text('slug').unique().notNull(),
    title: text('title').notNull(),
    description: text('description'),
    image: text('image'), // Path to local WebP image: /img/blog/[slug].webp
    content: text('content').notNull(),
    isVisible: integer('isVisible', { mode: 'boolean' }).default(true),
    publishedAt: integer('publishedAt', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
    created_at: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export const Settings = sqliteTable('Settings', {
    id: integer('id').primaryKey(),
    blogEnabled: integer('blogEnabled', { mode: 'boolean' }).default(false).notNull(),
    updated_at: integer('updated_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export const AiSettings = sqliteTable('AiSettings', {
    id: integer('id').primaryKey(),
    modelName: text('modelName').notNull().default('gemini-2.5-flash'),
    temperature: text('temperature').notNull().default('0.7'),
    cities: text('cities').notNull(), // Line-separated list of cities
    topics: text('topics').notNull(), // Line-separated list of topics
    systemPrompt: text('systemPrompt').notNull(), // AI writer persona/instructions
    created_at: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export const PageSections = sqliteTable('PageSections', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    type: text('type').notNull(),
    order: integer('order').default(0).notNull(),
    isEnabled: integer('isEnabled', { mode: 'boolean' }).default(true).notNull(),
    data: text('data', { mode: 'json' }).notNull(),
    updated_at: integer('updated_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

