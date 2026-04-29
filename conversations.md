# Resumen de Diagnóstico y Mejoras - Proyecto MURO (Astro)

Este documento es un respaldo de la conversación y de las recomendaciones de código dadas para el proyecto de **MURO — Club de Vinilos**, hecho en Astro.

## 1. Diagnóstico: Funcionalidades de Astro Faltantes

A pesar de tener una excelente estructura de componentes y diseño (con Tailwind v4), se identificaron varias características nativas de Astro que no se estaban aprovechando:

1. **Tipado Global de TypeScript (`src/env.d.ts`)**
   - **Problema:** Falta el archivo que provee los tipos globales de Astro (`Astro.props`, `astro:assets`, etc.).
   - **Solución:** Crear `src/env.d.ts` con el contenido: `/// <reference types="astro/client" />`

2. **Componente de Imágenes (`<Image />`)**
   - **Problema:** Se usaban etiquetas HTML normales (`<img src="..." />`).
   - **Solución:** Astro incluye un componente de imágenes ultrarrápido que convierte automáticamente a WebP/AVIF y optimiza el peso. Se debe importar con: `import { Image } from 'astro:assets';`

3. **View Transitions (Navegación tipo SPA)**
   - **Problema:** La página recarga completamente al navegar.
   - **Solución:** Importar `<ClientRouter />` (anteriormente `<ViewTransitions />`) de `astro:transitions` y colocarlo dentro del `<head>` en `BaseLayout.astro` para animaciones suaves.

4. **Content Collections (`src/content`)**
   - **Sugerencia:** Actualmente los datos (productos) están _hardcodeados_ en `src/data/products.ts`. Astro tiene **Content Collections** (`src/content/config.ts`) que permite usar JSON/YAML/Markdown con validación estricta de tipos usando Zod.

5. **Página de Error (404.astro)**
   - **Sugerencia:** Crear un archivo `src/pages/404.astro` para tener una página de "No Encontrado" personalizada y mantener el branding del sitio.

6. **SEO y Sitemap**
   - **Sugerencia:** Instalar e integrar `@astrojs/sitemap` en `astro.config.mjs` para mejorar el SEO del e-commerce.

---

## 2. Despliegue Local

Para levantar el proyecto en tu entorno local (ej. en el nuevo sistema operativo):

1. **Instalar dependencias:**

   ```bash
   # Si usas npm
   npm install

   # Si prefieres pnpm (ya que el proyecto tiene un pnpm-lock.yaml)
   pnpm install
   ```

2. **Iniciar Servidor de Desarrollo:**

   ```bash
   npm run dev
   # o
   pnpm run dev
   ```

   _El sitio estará disponible en `http://localhost:3000` o `http://localhost:4321`._

3. **Probar versión de Producción:**
   ```bash
   npm run build && npm run preview
   ```

---

## 3. Correcciones de Auditoría Implementadas

Durante la sesión se resolvieron dos advertencias arrojadas por la extensión/auditoría de Astro en el componente `src/components/ProductCard.astro`:

1. **Invalid `href` attribute (Accessibility)**
   - **Antes:** `<a href="#">{product.title}</a>`
   - **Después:** `<a href={\`/productos/\${product.slug}\`}>{product.title}</a>`
   - **Razón:** Los enlaces vacíos o que solo llevan a `#` son penalizados en accesibilidad.

2. **Use the Image component (Performance)**
   - **Antes:**
     ```astro
     <img src={product.image} alt={...} width="600" height="600" loading="lazy" class="..." />
     ```
   - **Después:**
     ```astro
     ---
     import { Image } from "astro:assets"
     ---
     <Image src={product.image} alt={...} width="600" height="600" loading="lazy" class="..." />
     ```
   - **Razón:** Reemplazar `img` por `<Image>` permite a Astro procesar y servir las imágenes de manera optimizada, mejorando radicalmente la puntuación en herramientas como Lighthouse.

> **Nota para la migración:** Como vas a cambiar de Sistema Operativo, asegúrate de hacer commit a tus cambios recientes (`git add .`, `git commit -m "Fix accesibilidad y optimización de imágenes"`) y subirlos a tu repositorio en GitHub/GitLab antes de formatear o cambiar de computadora.
