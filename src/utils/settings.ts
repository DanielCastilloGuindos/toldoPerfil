import { db } from "@/db/client";
import { Settings } from "@/db/schema";
import { eq } from "drizzle-orm";

/**
 * Returns the current site settings (row id=1).
 * If the row doesn't exist yet it is created with defaults (blogEnabled = false).
 */
export async function getSiteSettings() {
    let rows = await db.select().from(Settings).where(eq(Settings.id, 1)).limit(1);

    if (rows.length === 0) {
        await db.insert(Settings).values({ id: 1, blogEnabled: false });
        rows = await db.select().from(Settings).where(eq(Settings.id, 1)).limit(1);
    }

    return rows[0];
}

/**
 * Quick helper – returns true when the blog feature is enabled.
 */
export async function isBlogEnabled(): Promise<boolean> {
    try {
        const settings = await getSiteSettings();
        return settings.blogEnabled ?? false;
    } catch {
        return false;
    }
}
