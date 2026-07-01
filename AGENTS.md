# AGENTS.md - Toldo Perfil Agent Instructions

Welcome to Toldo Perfil, a web project built with Astro.

## Project Structure & Architecture

Here are the key directories and folders:
- `src/pages/` - Contains the routes and page components.
- `src/components/` - Shared UI components.
- `src/sections/` - Major page sections like Hero, Info, Products, etc.
- `src/layouts/` - Astro page layouts.
- `src/db/` - Database schemas and drizzle configurations.
- `public/` - Static assets including `llms.txt` and `robots.txt`.

## Documentation & API Links

- Homepage: [index.astro](file:///C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/index.astro)
- Astro configuration: [astro.config.mjs](file:///C:/Users/Daniel/Desktop/ToldoPerfil/astro.config.mjs)
- Global layout: [Layout.astro](file:///C:/Users/Daniel/Desktop/ToldoPerfil/src/layouts/Layout.astro)
- LLMs discovery: [llms.txt](file:///C:/Users/Daniel/Desktop/ToldoPerfil/public/llms.txt)

## Coding Conventions & Patterns

We follow these guidelines and standards:
- **Framework**: Use Astro's component structure and script tags.
- **Prerendering**: Static pages should use `export const prerender = true` for high performance.
- **Styling**: Tailwind CSS is preferred. Use semantic utility classes.
- **SEO/AEO**:
  - Always provide meaningful `title` and `description` to layout.
  - Make sure headings use correct hierarchy (H1 -> H2 -> H3) with no skipped levels.
  - Wrap content inside `<main>` and other semantic HTML elements.
