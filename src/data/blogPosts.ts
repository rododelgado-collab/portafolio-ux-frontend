import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: 'openai-presence-ux-del-handoff',
    title: 'Un agente resuelve el 75% de las llamadas solo; la UX está en el otro 25%',
    date: '2026-07-23',
    dateLabel: '23 de julio, 2026',
    tags: ['IA', 'UX', 'Atención al cliente'],
    excerpt:
      'OpenAI presentó Presence, un producto para desplegar agentes de voz y chat con políticas, guardrails y reglas de escalación. Su soporte telefónico ya resuelve el 75% de los casos sin humanos. Pero la experiencia se juega en el otro 25%: el momento en que el agente te pasa con una persona.',
    content: [
      'Un agente de IA que resuelve el 75% de las llamadas de atención al cliente sin ninguna intervención humana. Para quienes diseñamos productos, lo verdaderamente interesante no es ese número, sino el otro 25%.',
      'El 22 de julio, OpenAI presentó Presence, un producto para desplegar agentes de voz y chat en flujos de atención al cliente e internos. La propuesta va más allá del modelo: cada despliegue arranca con un trabajo concreto (resolver un problema de facturación, atender un reclamo de seguro, gestionar una solicitud de soporte de TI) y el agente recibe solo el conocimiento y el acceso a sistemas que ese trabajo necesita. La empresa define las políticas: qué puede hacer el agente, cuándo necesita aprobación y cuándo una persona debe tomar el control. El propio soporte telefónico en inglés de OpenAI, que funciona sobre Presence, ya resuelve el 75% de los casos entrantes sin asistencia humana.',
      'Vengo del mundo de las aplicaciones de banca y fintech, y por eso lo que más me importa de un anuncio así no es la cifra de automatización, sino cómo se diseña el momento en que el agente te pasa con una persona. Ese handoff es un instante frágil. Si el agente escala demasiado tarde, sin traspasar el contexto de la conversación o sin explicarle al usuario por qué lo deriva, la confianza se rompe justo cuando el usuario más la necesita: cuando ya está frustrado y su problema no se resolvió solo.',
      'Presence incluye piezas que apuntan en esa dirección: guardrails que intervienen cuando la interacción se sale de los límites de la empresa, simulaciones y evaluadores que comprueban si el agente llegó al resultado correcto y escaló cuando correspondía, y un proceso de mejora continua que detecta dónde falla y propone ajustes que el equipo prueba y aprueba. No es casualidad que BBVA figure como socio de diseño explorando soporte de voz para banca en México, o que SoftBank e IAG estén probando conversaciones en japonés y soporte en momentos de alta demanda.',
      'La lección de experiencia que saco es esta: la buena UX con IA no consiste en que el agente nunca falle, sino en que sepa reconocer su límite y ceder el control con elegancia. El traspaso a un humano no es el fracaso del sistema, es una parte del diseño que merece el mismo cuidado que ponemos en el resto de la interfaz. Diseñar ese 25% (cuándo escalar, con qué contexto, con qué tono) es, para mí, donde se juega la confianza real en los productos conversacionales.',
    ],
    image: '/blog/openai-presence-ux-del-handoff.png',
    imageAlt:
      'Tarjeta del artículo: El 75% lo resuelve la IA, la UX está en el otro 25%, con una barra que separa el trabajo del agente del handoff humano',
    sourceUrl: 'https://openai.com/index/introducing-openai-presence/',
    sourceLabel: 'OpenAI — Blog oficial',
  },
  {
    id: 'vercel-agent-ia-con-permisos',
    title: 'Una IA que investiga tu producción y pide permiso antes de actuar',
    date: '2026-07-22',
    dateLabel: '22 de julio, 2026',
    tags: ['IA', 'Desarrollo', 'DevOps'],
    excerpt:
      'Vercel presentó la nueva versión de su Agent: una IA que investiga incidentes en producción, propone el arreglo y solo actúa cuando la apruebas. Lo interesante no es el código que escribe, sino su modelo de permisos.',
    content: [
      'La noticia no es que una IA escriba tu código. Es que ahora te pide permiso antes de tocar producción.',
      'Vercel presentó la nueva versión de su Vercel Agent: un agente de IA que vive en tu dashboard, investiga incidentes en producción (lee logs, métricas y deploys), encuentra la causa raíz y propone el arreglo. Pero no actúa solo: es de solo lectura por defecto y ejecuta cambios únicamente cuando tú apruebas. En el ejemplo que muestra Vercel, un mal deploy rompe el checkout, y el agente ya había rastreado el error y recomendado un rollback antes de que el ingeniero de turno abriera su laptop.',
      'Lo que más me interesa es su modelo de seguridad. Hoy la mayoría de los agentes heredan TODOS tus permisos, así que un prompt confuso tiene el mismo alcance de daño que tú. Vercel invierte eso: el agente corre bajo su propia identidad, con permisos acotados y un entorno controlado donde ejecutarse. La pregunta deja de ser "qué tan inteligente es" y pasa a ser "quién es, qué puede hacer y dónde".',
      'Vengo del mundo de las apps financieras, donde el acceso a producción nunca es "todo o nada": se aprueba por pasos, con roles y trazabilidad. Ver ese mismo principio aplicado a los agentes de IA me parece la dirección correcta. La productividad no debería costarnos el control, y el humano que aprueba sigue siendo parte del diseño, no un estorbo.',
      'Para quienes diseñamos y desarrollamos productos, aquí hay una lección de experiencia de usuario: la confianza en la IA no se gana escondiendo lo que hace, sino haciendo visible y reversible cada acción. Un buen punto de aprobación, con contexto claro de qué se va a cambiar y por qué, es tan importante como la capacidad técnica del agente.',
    ],
    image: '/blog/vercel-agent-ia-con-permisos.png',
    imageAlt:
      'Tarjeta del artículo: Una IA que investiga tu producción y pide permiso antes de actuar, con etiqueta Human-in-the-loop',
    sourceUrl: 'https://vercel.com/blog/vercel-agent',
    sourceLabel: 'Vercel — Blog oficial',
  },
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
