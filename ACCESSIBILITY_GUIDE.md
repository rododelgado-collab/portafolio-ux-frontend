# Guía de Accesibilidad del Portafolio

Este documento describe todas las prácticas de accesibilidad implementadas en este portafolio profesional.

## 🎯 Estándar de Cumplimiento

**WCAG 2.1 Level AA** - Accesibilidad de nivel profesional

### Qué significa AA?
- Requisito mínimo para sitios web accesibles
- Contraste de texto ≥4.5:1 para texto normal
- Disponible para navegación por teclado
- Compatible con tecnologías de asistencia

## 🌈 Sistema de Colores Accesible

### Ratios de Contraste

Todos nuestros colores cumplen con ratios WCAG verificados:

```
Texto Principal     → 17.5:1 (AAA) ✓
Texto Secundario    → 12:1   (AAA) ✓
Acentos Primarios   → 7.5:1  (AA)  ✓
Acentos Secundarios → 5.6:1  (AA)  ✓
Botones de Error    → 4.5:1  (AA)  ✓
```

**Verificación**: Todos los ratios se verificaron usando [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## ⌨️ Navegación por Teclado

### Funcionalidades Soportadas

1. **Skip Link** - Presiona TAB al cargar la página
   - Salta directamente al contenido principal
   - Visible cuando tiene foco
   - Mejora significativamente la experiencia

2. **Navegación Tab**
   - `TAB` - Avanza al siguiente elemento interactivo
   - `Shift + TAB` - Retrocede al elemento anterior
   - `Enter` - Activa botones y links
   - `Space` - Toggle de checkboxes

3. **Focus Visible**
   - Todos los elementos tienen un outline de 3px azul
   - El outline tiene offset para mejor visibilidad
   - Los estilos de focus son consistentes

4. **Menu Accesible**
   - Se puede abrir/cerrar con teclado
   - La navegación es lógica y predecible
   - Los ítems del menú están claramente etiquetados

## 🏷️ ARIA - Atributos de Accesibilidad

### Implementados en el Proyecto

```html
<!-- Labels claros para inputs -->
<label for="name">Nombre *</label>
<input id="name" aria-required="true">

<!-- Descripciones de errores -->
<input aria-describedby="email-error">
<p id="email-error" role="alert">Email inválido</p>

<!-- Botones descriptivos -->
<button aria-label="Enviar formulario de contacto">
  Enviar
</button>

<!-- Regiones -->
<nav aria-label="Navegación principal">
<section role="region" aria-label="Proyectos destacados">

<!-- Iconos -->
<svg aria-hidden="true"><!-- Icono decorativo --></svg>
```

### Atributos Clave

| Atributo | Uso | Ejemplo |
|----------|-----|---------|
| `aria-label` | Descripción de botones sin texto | `aria-label="Abrir menú"` |
| `aria-describedby` | Link a elemento descriptivo | `aria-describedby="error"` |
| `aria-required` | Campo requerido | `aria-required="true"` |
| `aria-invalid` | Validación fallida | `aria-invalid="true"` |
| `aria-hidden` | Ocultar de screen readers | `aria-hidden="true"` |
| `aria-live` | Anuncios dinámicos | `aria-live="polite"` |
| `role` | Rol semántico | `role="alert"` |

## 📱 Diseño Responsive

### Puntos de Quiebre

- **Móvil**: 0px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

### Características

✓ Touch targets mínimo 48x48px
✓ Texto redimensionable hasta 200%
✓ Sin desplazamiento horizontal en zoom
✓ Layouts adaptables

## 🎬 Animaciones Respetuosas

### prefers-reduced-motion

Los usuarios que prefieren menos movimiento tendrán:
- Sin animaciones
- Transiciones instantáneas
- Movimiento reducido en hover/focus

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

## 📝 Formularios Accesibles

### Componente Contact

- ✓ Labels explícitos (no placeholders como labels)
- ✓ Validación clara con mensajes de error
- ✓ Campos requeridos marcados con *
- ✓ Indicadores visuales de estado
- ✓ Mensajes de éxito/error anunciados

### Ejemplo de Formulario

```tsx
<label htmlFor="email">
  Email <span aria-label="requerido">*</span>
</label>
<input
  id="email"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && (
  <p id="email-error" role="alert">
    Email inválido
  </p>
)}
```

## 🖼️ Imágenes y Multimedia

### Alt Text

Todas las imágenes tienen descripciones:

```html
<!-- ✓ Bien -->
<img 
  src="project.jpg" 
  alt="Interfaz de e-commerce mostrando productos con navegación accesible"
/>

<!-- ✗ Evitar -->
<img src="project.jpg" alt="imagen">
<img src="project.jpg" alt="proyecto 1">
```

### Iconos Decorativos

```html
<!-- Icono decorativo que no añade información -->
<svg aria-hidden="true">
  <use href="#star-icon" />
</svg>

<!-- Icono que sí tiene información -->
<button aria-label="Agregar a favoritos">
  <svg><!--icono estrella--></svg>
</button>
```

## 🧪 Testing Manual

### Prueba de Teclado

1. Abre el navegador
2. Presiona TAB repetidamente
3. Verifica que:
   - Todos los enlaces sean accesibles
   - Los focus indicators sean visibles
   - El orden sea lógico

### Prueba de Contraste

1. Abre [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
2. Toma el eyedropper de colores foreground y background
3. Verifica que el ratio sea ≥4.5:1

### Prueba con Screen Reader

**Windows**: NVDA (gratis)
**Mac**: VoiceOver (incluido)
**Web**: axe DevTools

Navega con:
- Leer página completa
- Navegar por headings
- Leer formularios

### Prueba de Zoom

1. `Ctrl + +` (Cmd + + en Mac) hasta 200%
2. Verifica:
   - Sin desplazamiento horizontal
   - Texto sigue siendo legible
   - Botones siguen siendo presionables

## ✅ Checklist de Validación

Antes de hacer deploy, verifica:

- [ ] Todos los botones tienen labels claros
- [ ] Todos los inputs tienen labels explícitos
- [ ] Los errores se anuncian con aria-live
- [ ] El contraste cumple AA (≥4.5:1)
- [ ] Se puede navegar con solo teclado
- [ ] Los focus indicators son visibles
- [ ] Las imágenes tienen alt text
- [ ] Se respeta prefers-reduced-motion
- [ ] El zoom 200% funciona sin overflow
- [ ] Los headings son jerárquicos (h1>h2>h3)

## 🔗 Recursos

### Herramientas Online
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Documentación
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [React Accessibility](https://react.dev/learn/accessibility)

### Educación
- [a11y-101](https://www.a11y-101.com/)
- [Inclusive Components](https://inclusive-components.design/)
- [Web Accessibility Course](https://www.udacity.com/course/web-accessibility--ud891)

## 🚀 Mejoras Futuras

- [ ] Agregar más variantes de temas (light mode)
- [ ] Implementar modo de alto contraste
- [ ] Agregar soporte para múltiples idiomas
- [ ] Testing con screen readers reales
- [ ] Pruebas axe-core automatizadas
- [ ] Integración con CI/CD

## 📞 Soporte

¿Encontraste un problema de accesibilidad?

1. Descríbelo claramente
2. Indica el navegador y SO
3. Menciona si usas screen reader
4. Incluye pasos para reproducir

---

**Compromiso**: Este sitio está diseñado para ser accesible para todos.
Si encuentras barreras de accesibilidad, por favor notificanos.

*Última actualización: 2026-04-29*
