import { defineDb, defineTable, column, NOW } from 'astro:db';

const Customers = defineTable({
  columns: {
    customer_id	: column.number({ primaryKey: true }),
    title				: column.text(),
    description	: column.text({ optional: true }),
    category		: column.text(),
    images			: column.json(),
    isVisible		: column.boolean({ default: true }),
    published		: column.date({ default: NOW }),
  },
});


export default defineDb({
  tables: { Customers },
})