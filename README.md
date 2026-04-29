# Proyecto Anuro

## Sobre el Proyecto

Anuro (blog-disquera) es un proyecto web moderno estructurado para separar la experiencia del usuario (Frontend) y la gestión de contenido (Backend/CMS). Está diseñado para ser rápido, escalable y brindar una excelente experiencia tanto a los desarrolladores como a los creadores de contenido.

## Tecnologías Principales

El proyecto se divide en dos grandes partes, cada una con su propio stack tecnológico:

### Frontend (Raíz del proyecto)

La interfaz principal que consumen los usuarios está construida con tecnologías de última generación:

- **[Astro (v5)](https://astro.build/):** Framework web diseñado para la velocidad. Permite generar sitios estáticos (SSG) de alto rendimiento o renderizar del lado del servidor (SSR).
- **[Tailwind CSS (v4)](https://tailwindcss.com/):** Framework de utilidades CSS para un estilizado rápido, moderno y responsivo, integrado de manera eficiente a través de `@tailwindcss/vite`.
- **[TypeScript](https://www.typescriptlang.org/):** Tipado estático sobre JavaScript para asegurar un código mucho más robusto, predecible y con autocompletado avanzado.
- **[Vite](https://vitejs.dev/):** Herramienta de construcción (bundler) extremadamente rápida que impulsa el entorno de Astro internamente.

### Backend / CMS (Carpeta `/studio`)

La gestión y modelado de datos se realiza a través de un CMS "Headless":

- **[Sanity Studio (v5)](https://www.sanity.io/):** Un entorno de edición de contenido en tiempo real, de código abierto y altamente personalizable.
- **GROQ & Vision Tool:** GROQ es el lenguaje de consultas propio de Sanity para obtener datos estructurados de forma exacta y predecible. La herramienta Vision está habilitada para testear estas consultas directamente desde el panel.
- **React 19:** Utilizado internamente por el Studio de Sanity para construir y extender la interfaz gráfica.

Ambas áreas del proyecto utilizan **[pnpm](https://pnpm.io/)** como gestor de paquetes principal. Esto garantiza instalaciones ultrarrápidas y un uso eficiente del espacio en disco.

---

## Cómo Funciona la Arquitectura

1. **Gestión de Contenido:** Los administradores ingresan a Sanity Studio, donde pueden crear, editar y estructurar contenidos. La estructura de estos contenidos está definida en código dentro de la carpeta `studio/schemaTypes`. Los datos ingresados se guardan de forma segura en la nube de Sanity (Proyecto ID: `05wa67le`, Dataset: `production`).
2. **Consumo de Datos:** El frontend desarrollado en Astro se conecta a la API de Sanity (generalmente utilizando el lenguaje de consultas GROQ) para solicitar exactamente la información necesaria.
3. **Renderizado Optimizado:** Durante el tiempo de construcción (o en cada petición si se usa SSR), Astro recibe los datos del CMS, compila las páginas y las envía al navegador entregando HTML puro, CSS y únicamente el JavaScript estrictamente necesario (gracias a la arquitectura en "Islas" de Astro).

---

## Pasos para Desarrollo Local

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18+ recomendada) y [pnpm](https://pnpm.io/installation) globalmente.

### 1. Clonar el repositorio

```bash
git clone <https://github.com/Jirevelaz/Anuro>
cd Anuro
```

### 2. Levantar el Frontend (Astro)

Abre tu terminal en la raíz del proyecto para iniciar la web:

```bash
# Instalar todas las dependencias
pnpm install

# Iniciar el servidor local
pnpm run dev
```

El sitio estará disponible por defecto en **`http://localhost:3000`** (o en la red local indicada en la terminal).

### 3. Levantar el CMS (Sanity Studio)

Para gestionar el contenido en local, abre una **nueva ventana/pestaña en la terminal**:

```bash
# Entrar a la carpeta del CMS
cd studio

# Instalar las dependencias de Sanity
pnpm install

# Iniciar el servidor local del Studio
pnpm run dev
```

Sanity Studio estará disponible por defecto en **`http://localhost:3333`**.

---

## Pasos para Desplegar (Deploy)

Como la arquitectura está completamente desacoplada (Headless), el Frontend y el CMS se despliegan en servicios separados.

### Desplegar el CMS (Sanity Studio)

Sanity ofrece hosting gratuito e integrado para alojar el panel de administración.

1. Abre la terminal en el directorio `studio`.
2. Ejecuta el comando de despliegue:
   ```bash
   pnpm run deploy
   ```
3. _Nota: Si es la primera vez, se te pedirá autenticarte en tu cuenta de Sanity desde el navegador. Luego, CLI subirá el código y te proporcionará una URL pública terminada en `.sanity.studio`._

### Desplegar el Frontend (Astro)

El frontend de Astro se puede alojar fácilmente en plataformas modernas como **Vercel**, **Netlify** o **Cloudflare Pages**.

**Pasos para el despliegue en Netlify:**

1. Sube tu código (la carpeta raíz completa) a un repositorio en GitHub, GitLab o Bitbucket.
2. Ingresa a tu cuenta de [Netlify](https://www.netlify.com/) y haz clic en **"Add new site" > "Import an existing project"**.
3. Conecta tu proveedor de Git e importa el repositorio de `Anuro`.
4. Netlify debería detectar automáticamente que estás usando **Astro** y configurará los ajustes base:
   - **Base directory:** `(dejar en blanco)`
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist`
5. (Importante) Haz clic en **"Add environment variables"** si necesitas añadir tokens o variables de entorno de Sanity requeridas por Astro para consultar los datos en producción.
6. Haz clic en **"Deploy site"**.

¡En un par de minutos, Netlify construirá tu sitio conectándose a Sanity y te proporcionará una URL pública y optimizada en la red global (CDN)!
