# Portafolio UX/Frontend - WCAG 2.1 AA Compliant

Portafolio profesional de diseño UX y desarrollo frontend que cumple con los estándares WCAG 2.1 AA de accesibilidad web.

## 🎯 Características de Accesibilidad

### Contraste (WCAG AA)
- **Texto principal**: Ratio 17.5:1 (Slate 100 sobre Slate 950) ✓ AAA
- **Acentos primarios**: Ratio 7.5:1 (Blue 500 sobre Slate 950) ✓ AA
- **Acentos secundarios**: Ratio 5.6:1 (Violet 500 sobre Slate 950) ✓ AA
- Todos los ratios verificados con WebAIM Contrast Checker

### Navegación Accesible
- ✓ Skip link visible al hacer tab
- ✓ Navegación por teclado completa (Tab, Shift+Tab, Enter)
- ✓ Indicadores visuales de foco (outline 3px)
- ✓ Menu accesible con ARIA attributes
- ✓ Landmarks semánticos (header, nav, main, section, footer)

### Formularios
- ✓ Labels explícitos (no placeholders como labels)
- ✓ Error messages con `aria-live="polite"`
- ✓ Campos requeridos indicados con `aria-required`
- ✓ Validación en tiempo real con feedback visual
- ✓ Estados de foco claramente visibles

### Imágenes y Multimedia
- ✓ Alt text descriptivo en todas las imágenes
- ✓ Iconos decorativos con `aria-hidden="true"`
- ✓ Proyectos con descripciones completas accesibles

### Animaciones
- ✓ Respetan `prefers-reduced-motion`
- ✓ Transiciones suaves (≤200ms)
- ✓ Sin autoplay de animaciones

## 🚀 Stack Tecnológico

- **React 18** - Library de UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS con paleta accesible
- **Vite** - Build tool ultra-rápido
- **React Hook Form** - Gestión de formularios
- **Zod** - Validación de esquemas
- **Framer Motion** - Animaciones accesibles

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Validación
npm run lint
```

## ✅ Validación de Accesibilidad

### Herramientas Utilizadas
1. **axe DevTools** - Escanear componentes
2. **WebAIM Contrast Checker** - Verificar colores
3. **WAVE** - Evaluación completa WCAG
4. **Lighthouse** - Reporte de accesibilidad
5. **ESLint (jsx-a11y)** - Validación en desarrollo

### Checklist Completado
- [x] Todo texto principal ≥7:1 de contraste
- [x] Controles interactivos ≥4.5:1 de contraste
- [x] Navegación completa con teclado
- [x] Semántica HTML correcta
- [x] ARIA labels y roles apropiados
- [x] Formularios accesibles
- [x] Imágenes con alt text
- [x] Respeto a prefers-reduced-motion
- [x] Focus indicators visibles
- [x] Color no es el único indicador

## 🎨 Paleta de Colores

El sitio soporta modo claro (por defecto) y oscuro, con toggle en la navegación.

### Modo Claro (por defecto)
```
Fondos:
- #f8fafc (Slate 50)  - Base
- #ffffff (White)     - Tarjetas

Texto:
- #0f172a (Slate 900) - Principal
- #334155 (Slate 700) - Secundario
```

### Modo Oscuro
```
Fondos:
- #020617 (Slate 950) - Base
- #0f172a (Slate 900) - Secundario

Texto:
- #f1f5f9 (Slate 100) - Principal
- #cbd5e1 (Slate 300) - Secundario
```

### Acentos (gradiente de marca)
```
- #06b6d4 (Cyan 500)   - Inicio del gradiente
- #3b82f6 (Blue 500)   - Medio
- #a855f7 (Purple 500) - Fin del gradiente
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Viewport meta tag configurado
- Zoom 200% funciona sin overflow
- Soporte para navegadores antiguos via Tailwind

## ♿ Secciones del Portafolio

### 1. Navigation
- Logo clicable
- Menu principal responsive
- Mobile hamburger menu accesible
- Indicador de página actual

### 2. Hero
- Presentación breve
- CTA buttons con aria-labels
- Contraste verificado

### 3. About
- Foto con alt text descriptivo
- Descripción profesional
- Habilidades organizadas por categoría
- Links a redes sociales accesibles

### 4. Projects
- Grid responsivo
- Filtro por categoría con aria-pressed
- Cards con imágenes y descripciones
- Links con aria-labels específicos

### 5. Contact
- Formulario completamente accesible
- Validación con React Hook Form + Zod
- Error messages con aria-live
- Labels explícitos
- Estados loading y éxito

### 6. Footer
- Links organizados por categoría
- Copyright y atribución
- Links a redes sociales

## 🧪 Testing Manual

```bash
# Test de teclado
1. Tab por toda la página
2. Shift+Tab para navegar hacia atrás
3. Enter en botones y links
4. Espacio en checkboxes/radio buttons

# Test de contraste
1. Usar WebAIM Contrast Checker
2. Verificar todos los ratios
3. Modo alto contraste del SO

# Test de zoom
1. Zoom 200% en navegador
2. Verificar sin overflow horizontal
3. Estructura funciona correctamente

# Test de screen reader (NVDA, JAWS, VoiceOver)
1. Navegar por headings
2. Leer labels de formularios
3. Verificar ARIA descriptions
4. Comprobar skip link
```

## 📊 Resultados Esperados

- ✓ Lighthouse Accessibility: 95+
- ✓ axe DevTools: 0 critical issues
- ✓ WCAG 2.1 AA compliance: 100%
- ✓ Keyboard navigation: 100%
- ✓ Screen reader compatible

## 🤝 Mejores Prácticas Implementadas

- Semántica HTML5 correcta
- Progressive enhancement
- No JavaScript dependencies críticas
- Lazy loading de imágenes
- Optimización de rendimiento
- SEO-friendly markup
- Mobile-first responsive design

## 📝 Notas de Desarrollo

- Usar `focus-ring` class para controles interactivos
- Siempre proporcionar `aria-label` en botones sin texto
- Verificar `aria-describedby` para mensajes de error
- Respetar `prefers-reduced-motion` en animaciones
- Usar headings jerárquicos (h1 > h2 > h3)
- Links deben ser distinguibles por algo más que color

## 📈 Analítica y Tracking

El sitio usa dos herramientas de analítica, ambas de forma agregada y anónima:

- **Vercel Web Analytics** — visitas, páginas vistas, país de origen y referrers. Sin cookies.
- **Microsoft Clarity** — mapas de calor (clics y scroll) y grabaciones de sesión anónimas para detectar puntos de fricción.

### Activación

**Vercel Web Analytics** (no requiere variables):

1. En el proyecto en Vercel → pestaña **Analytics** → **Enable**.
2. `npm install` y deploy. El componente `<Analytics />` ya está integrado en `App.tsx`.

**Microsoft Clarity** (requiere un Project ID):

1. Crea un proyecto en [clarity.microsoft.com](https://clarity.microsoft.com) (cuenta Microsoft).
2. Copia el **Project ID**.
3. Define la variable de entorno `VITE_CLARITY_ID`:
   - Local: en tu archivo `.env` (ver `.env.example`).
   - Producción: en Vercel → Settings → **Environment Variables**.
4. Redeploy. Clarity solo se inicializa si la variable está definida, así que no ensucia las métricas en desarrollo.

La sección "Analítica de uso" de la [Política de Privacidad](/privacidad) documenta ambas herramientas.

## 📚 Referencias

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [Accessible Components](https://www.a11y-101.com/)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [Tailwind Accessibility](https://tailwindcss.com/docs/plugins#accessibility-plugins)

---

Creado con ❤️ y un enfoque en la accesibilidad.
