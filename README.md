# Mayma Construcciones - Landing Page

Landing page profesional para Mayma Construcciones, especializada en remodelaciones a gran escala.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
mayma-webpage/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes y metadatos
│   ├── page.tsx            # Página principal que ensambla todos los componentes
│   └── globals.css         # Estilos globales y Tailwind
├── components/
│   ├── Navbar.tsx          # Barra de navegación con menú móvil
│   ├── Hero.tsx            # Sección hero con imagen de fondo
│   ├── About.tsx           # Sección "Sobre nosotros"
│   ├── Services.tsx        # Grid de servicios
│   ├── Projects.tsx        # Galería de proyectos antes/después
│   ├── Process.tsx         # Proceso de trabajo en 4 pasos
│   ├── Testimonials.tsx    # Testimonios de clientes
│   ├── Contact.tsx         # Formulario de contacto + WhatsApp
│   └── Footer.tsx          # Pie de página
├── public/
│   ├── images/             # Carpeta para imágenes del proyecto
│   └── fonts/              # Carpeta para fuentes personalizadas
└── tailwind.config.ts      # Configuración de Tailwind con tokens YLLW
```

## 🖼️ Agregar Imágenes

Coloca tus imágenes en la carpeta `public/images/` con los siguientes nombres:

### Imágenes requeridas:
- `hero-bg.jpg` - Imagen de fondo del hero (horizontal, recomendado: 1920x1080px)
- `about-img.jpg` - Imagen para la sección "Sobre nosotros" (vertical, recomendado: 800x1000px)

**Proyecto 1 (2-3 fotos de diferentes ángulos):**
- `project1-photo1-before.jpg` y `project1-photo1-after.jpg`
- `project1-photo2-before.jpg` y `project1-photo2-after.jpg`
- `project1-photo3-before.jpg` y `project1-photo3-after.jpg` (opcional)

**Proyecto 2 (2-3 fotos de diferentes ángulos):**
- `project2-photo1-before.jpg` y `project2-photo1-after.jpg`
- `project2-photo2-before.jpg` y `project2-photo2-after.jpg`
- `project2-photo3-before.jpg` y `project2-photo3-after.jpg` (opcional)

**Nota:** Tus fotos verticales de 3024x4032px son perfectas. Usa diferentes ángulos para mostrar mejor cada proyecto.

## ⚙️ Configuración

### Contacto y WhatsApp

Edita los números de teléfono y datos de contacto en:
- `components/Contact.tsx` - Líneas con el número de WhatsApp (`34600000000`)
- `components/Footer.tsx` - Información de contacto en el pie de página

Reemplaza `34600000000` con tu número real de WhatsApp (sin espacios ni caracteres especiales).

### Contenido

Puedes personalizar todo el contenido editando directamente los componentes en la carpeta `components/`:
- Servicios: `Services.tsx`
- Testimonios: `Testimonials.tsx`
- Proceso: `Process.tsx`
- Estadísticas: `About.tsx`

## 🎨 Sistema de Diseño YLLW

El proyecto utiliza el sistema de diseño YLLW definido en `design.md`:

### Colores principales:
- Primary: `#000000` (Negro)
- Tertiary: `#cac7b4` (Beige - para botones principales)
- Overlay: `#f5f5f5` (Gris claro - fondos secundarios)

### Tipografía:
Utiliza Space Grotesk de Google Fonts como alternativa a Gd Grio Vf.

### Espaciado:
- xs: 8px
- sm: 20px
- md: 40px
- lg: 64px
- xl: 160px

## 📱 Responsive Design

El sitio está completamente optimizado para dispositivos móviles, tablets y desktop. Los breakpoints de Tailwind CSS son:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## 🌐 Despliegue

### Vercel (Recomendado)

1. Sube el proyecto a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará el deploy

### Otros proveedores

El proyecto es compatible con cualquier proveedor que soporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📝 Licencia

© 2026 Mayma Construcciones. Todos los derechos reservados.
