import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: 'react2shell-flight-protocol',
    title: 'Una petición HTTP bastaba: la lección de React2Shell para el front-end',
    date: '2026-07-21',
    dateLabel: '21 de julio, 2026',
    tags: ['React', 'Seguridad', 'Front-End'],
    excerpt:
      'Una sola petición HTTP y acceso total al servidor, sin credenciales. La vulnerabilidad React2Shell expuso lo que viaja bajo el capó de React Server Components y por qué el front-end también es superficie de ataque.',
    content: [
      'Una sola petición HTTP y acceso total al servidor. Sin credenciales.',
      'Smashing Magazine publicó un análisis profundo de "React2Shell" (CVE-2025-55182), la vulnerabilidad crítica CVSS 10.0 que golpeó a React Server Components: el protocolo Flight, que transmite las interfaces desde el servidor al navegador, permitía ejecución remota de código con una sola petición manipulada. CISA la incluyó en su catálogo de vulnerabilidades explotadas activamente, con ataques reales de actores estatales.',
      'Lo que más me hace pensar no es el bug, sino la reflexión de fondo del artículo: la mayoría de los equipos nunca ha mirado qué viaja realmente por la red cuando el framework "se encarga de todo". Flight no envía HTML ni JSON: es un protocolo de streaming propio que reconstruye referencias ejecutables, componentes lazy y estado asíncrono desde texto plano. Eso es, en la práctica, un sistema de deserialización, y toda deserialización es superficie de ataque.',
      'Trabajando en productos financieros aprendí que la confianza del usuario se juega en capas que nunca ve. De nada sirve una interfaz impecable si la capa que la transporta queda expuesta. Por eso creo que quienes diseñamos y desarrollamos front-end debemos entender lo que pasa bajo el capó: validar entradas con esquemas en cada Server Action, cuestionar los valores por defecto del framework y no delegarle toda la seguridad.',
      'El artículo propone defensas concretas y priorizadas: validación estricta de esquemas, el paquete server-only para evitar fugas de código de servidor, endurecimiento CSRF más allá de los defaults, y una mirada honesta a lo que aportan (y no aportan) el Taint API y los WAF. Lectura obligada para cualquier equipo que use React Server Components en producción.',
    ],
    image: '/blog/react2shell-flight-protocol.png',
    imageAlt:
      'Tarjeta del artículo: Una petición HTTP bastaba, la lección de React2Shell para el front-end, con etiqueta de severidad CVSS 10.0',
    sourceUrl:
      'https://smashingmagazine.com/2026/07/weaponizing-defending-react-flight-protocol/',
    sourceLabel: 'Smashing Magazine — Durgesh Pawar',
  },
]
