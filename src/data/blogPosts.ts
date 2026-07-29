import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: 'menos-permisos-menos-excusas-ia-diseno',
    title: 'Menos permisos y menos excusas: la IA cambia la posición del diseño',
    date: '2026-07-29',
    dateLabel: '29 de julio, 2026',
    tags: ['IA', 'Diseño', 'Carrera'],
    excerpt:
      'Andy Budd plantea en Smashing Magazine los dos futuros posibles del diseño digital con IA: uno en el que el diseñador deja de pedir permiso para hacer las cosas, y otro en el que las empresas se conforman con lo que él llama diseño plausible. Los dos pueden ser ciertos al mismo tiempo.',
    content: [
      'Los equipos de diseño llevan años repitiendo una idea: haríamos mejor trabajo si la organización se corriera un poco. Faltó tiempo de ingeniería, producto ya había decidido la solución, el roadmap estaba lleno, la investigación se recortó, la deuda de diseño se conocía pero nadie quiso gastar un sprint en arreglarla. La IA está a punto de tomarle la palabra a ese argumento.',
      'El 29 de julio, Andy Budd publicó en Smashing Magazine una columna que evita la pregunta de siempre, esa de si la IA reemplazará a los diseñadores, y propone una mejor. Según él, el cambio interesante no es que ahora se puedan producir más pantallas, porque nadie necesita más pantallas. El cambio es que el diseño puede necesitar menos permiso.',
      'Ese es su caso alcista. Un buen diseñador ya puede pasar de "deberíamos arreglar esto" a "lo arreglé y está publicado": prototipar el onboarding alternativo, escribir y probar un texto más claro, construir una versión rudimentaria de la interacción, limpiar deuda de diseño sin esperar tres meses a que aparezca un espacio en el roadmap. Budd apunta a algo que a mí me hizo sentido de inmediato: el diseño dependió tanto de la persuasión porque no tenía medios de producción propios. Cuando esa distancia se acorta, cambia la política del trabajo. La propuesta deja de defenderse en una reunión y empieza a defenderse funcionando.',
      'El caso bajista es más incómodo y, creo, más útil. La autonomía también quita cobertura. Durante años fue cómodo decir que había una idea mejor pero nunca hubo tiempo de ingeniería para probarla; a veces era cierto y a veces esa idea nunca pasó de ser una crítica que sonaba fuerte porque vivía a salvo, en oposición a lo que sí se publicó. Muchos somos buenos notando qué está mal. Menos somos buenos decidiendo qué debería pasar en su lugar, y todavía menos haciéndolo lo bastante concreto como para que otros puedan juzgarlo. Más poder significa menos excusas.',
      'Hay un segundo riesgo que me parece el más relevante para cualquiera que trabaje en producto. Si producto e ingeniería pueden generar un flujo razonable, un texto razonable y un prototipo razonable, puede que dejen de sentir la necesidad de involucrar al diseño temprano. El problema no es que esas personas se conviertan de golpe en grandes diseñadores. El problema, dice Budd, es que muchas empresas no distinguen entre buen diseño y diseño plausible. Lo plausible se ve coherente en una revisión: usa los componentes correctos, el espaciado está bien, el texto no es vergonzoso, el flujo más o menos funciona y nadie en la sala siente lo suficiente como para objetar. Entonces se publica.',
      'Vengo de trabajar en aplicaciones de banca y fintech, y ahí lo plausible es justamente lo que sale caro. Una pantalla puede verse impecable hasta que el pago falla, hasta que la persona entra con un lector de pantalla, hasta que el dato llega vacío o el servicio responde lento. Esos estados no aparecen en la maqueta bonita: aparecen porque alguien se sentó a pensarlos, los escribió y los probó. Es exactamente el tipo de trabajo que no se ve en una demo y que sostiene la confianza cuando el producto está en manos de gente real.',
      'La columna cita además dos evaluaciones del Nielsen Norman Group sobre herramientas de prototipado con IA, que concluyen algo consistente con esto: las herramientas siguen bien una instrucción hacia un objetivo general, pero todavía no sopesan compensaciones de diseño ni llegan a un resultado cuidado sin bastante guía humana. Producir opciones ya es barato. Elegir cuál vale la pena sigue costando.',
      'Mi lectura es que ambos escenarios van a convivir. Habrá diseñadores que usen la IA para ganar terreno y empresas que la usen para conformarse antes. La diferencia no la va a marcar quién genera más alternativas, sino quién sabe cuál perseguir, cómo probarla, qué cortar y en qué punto un "está bien así" empieza a costarle plata al negocio. Trabajo con un lema que resume mi forma de ver esto, Design & Logic Synergy, y nunca me pareció tan literal: entender cómo se construye lo que diseñas dejó de ser un plus y se volvió la parte que te permite decidir.',
    ],
    image: '/blog/menos-permisos-menos-excusas-ia-diseno.png',
    imageAlt:
      'Tarjeta del artículo: Menos permisos, menos excusas, con dos paneles que contrastan el caso alcista y el caso bajista del diseño con IA',
    sourceUrl:
      'https://www.smashingmagazine.com/2026/07/bull-and-bear-case-digital-design-age-ai/',
    sourceLabel: 'Smashing Magazine — Andy Budd',
  },
  {
    id: 'node-docs-mismo-contenido-otra-experiencia',
    title: 'Mismo contenido, otra experiencia: Node.js rediseñó su documentación',
    date: '2026-07-28',
    dateLabel: '28 de julio, 2026',
    tags: ['Front-End', 'Documentación', 'UX'],
    excerpt:
      'Node.js publicó la beta de sus nuevas docs de API. Cada página se genera desde los mismos archivos Markdown de siempre: lo que se rehízo fue la navegación, el layout y la legibilidad. Y por primera vez, la documentación tiene buscador propio.',
    content: [
      'Node.js rediseñó por completo la documentación de su API y el contenido no cambió ni una sola línea. Esa combinación es justamente lo que vuelve interesante el anuncio para cualquiera que trabaje en producto.',
      'El 24 de julio, el equipo web de Node.js publicó una versión preliminar de las nuevas docs en beta.docs.nodejs.org, con la intención de que la gente la use en trabajo real antes de convertirla en la versión por defecto. Cada página se genera desde los mismos archivos Markdown del repositorio nodejs/node que alimentan la documentación actual. Lo que ya existía sobrevivió al cambio: temas claro y oscuro, el cambio entre ESM y CJS, los botones para copiar fragmentos de código, las etiquetas de estabilidad, el historial de versiones y la versión en Markdown de cada página. Lo que se rehízo fue la navegación, el layout y la legibilidad.',
      'La novedad que más me llamó la atención es el buscador. Por primera vez la documentación de la API tiene búsqueda incorporada, con una caja presente en todas las páginas y un atajo de teclado para abrirla. Hasta ahora, encontrar algo puntual en las docs de Node significaba dar un rodeo por un buscador externo. Eso nunca fue un problema de contenido: la información estaba ahí. Era un problema de arquitectura de información, y se resolvió con una decisión de diseño, no escribiendo más documentación.',
      'La segunda decisión que me parece bien pensada es la consistencia. Las docs ahora comparten el sistema de diseño del sitio nodejs.org, con una barra lateral persistente que lista todos los módulos, una tabla de contenidos por página siempre visible y un layout que funciona en pantallas pequeñas. Es el argumento clásico a favor de los design systems, pero aplicado donde suele postergarse: la documentación técnica casi siempre queda fuera del sistema, como si fuera un anexo y no parte del producto.',
      'Hay un detalle que en el anuncio ocupa apenas una línea y que para mí vale bastante más: cada página sigue siendo utilizable con JavaScript desactivado y sin conexión. En un stack moderno es fácil olvidar que la mejora progresiva no es nostalgia, es accesibilidad. Alguien con una conexión inestable, un dispositivo modesto o restricciones de red sigue pudiendo leer la documentación. Esa clase de decisión rara vez aparece en una demo, pero define a quién dejas fuera.',
      'También se menciona llms.txt, que entrega a las herramientas de IA un punto de entrada estructurado a la referencia de la API. Vale la pena notar el cambio implícito: la documentación pasó a tener dos públicos, personas y agentes, y el equipo diseñó para ambos de forma explícita. Todo esto se construyó con doc-kit, una herramienta propia del proyecto que reemplaza al generador anterior, y el equipo pide retroalimentación a través de su repositorio antes de dar el paso final.',
      'Vengo de trabajar en aplicaciones de banca y fintech, y ahí aprendí algo que este rediseño ilustra bien: cuando una persona no encuentra lo que busca, casi nunca es porque el dato no exista. Es porque el camino hacia el dato está mal diseñado. Agregar más contenido a un sistema donde no se encuentra nada solo empeora el problema.',
      'La conclusión que me llevo es simple y bastante incómoda: solemos tratar la documentación como un depósito de texto que hay que mantener al día, cuando en realidad es una interfaz que la gente usa bajo presión, casi siempre con algo roto y con poco tiempo. Merece el mismo cuidado de diseño que le damos a cualquier pantalla del producto.',
    ],
    image: '/blog/node-docs-mismo-contenido-otra-experiencia.png',
    imageAlt:
      'Tarjeta del artículo: Mismo contenido, otra experiencia, con una maqueta de documentación que muestra una barra lateral y un buscador con atajo de teclado',
    sourceUrl: 'https://nodejs.org/en/blog/announcements/new-api-docs-beta',
    sourceLabel: 'Node.js — Blog oficial',
  },
  {
    id: 'dependabot-cooldown-friccion-de-diseno',
    title: 'Tres días de espera: la fricción también es una decisión de diseño',
    date: '2026-07-24',
    dateLabel: '24 de julio, 2026',
    tags: ['Front-End', 'Seguridad', 'Dependencias'],
    excerpt:
      'GitHub cambió el comportamiento por defecto de Dependabot: las actualizaciones de versión ahora esperan tres días antes de proponerse. No es un ajuste técnico menor, es una decisión de diseño sobre dónde poner la fricción y a quién proteger con ella.',
    content: [
      'Durante años, la promesa de las herramientas automáticas de dependencias fue la velocidad: una versión nueva se publica y, minutos después, ya tienes el pull request esperándote. Esa velocidad acaba de dejar de ser el valor por defecto, y el motivo es interesante para cualquiera que diseñe productos.',
      'El 23 de julio, GitHub anunció que Dependabot espera ahora al menos tres días desde que se publica una versión antes de abrir un pull request de actualización. La medida aplica solo a las actualizaciones de versión, esas que mantienen tus dependencias al día sin que exista un problema conocido. Las actualizaciones de seguridad, en cambio, siguen abriéndose de inmediato: retrasar el parche de una vulnerabilidad ya pública sería justamente el error contrario. El plazo es configurable desde el archivo dependabot.yml, así que cada equipo puede ajustarlo a su realidad.',
      'La razón está en cómo se comportan los ataques a la cadena de suministro. En septiembre de 2025, un atacante obtuvo por phishing las credenciales de un mantenedor de npm y publicó versiones con código malicioso de chalk, debug y alrededor de una docena de paquetes más, que juntos superan los 2.000 millones de descargas semanales. El código alteraba direcciones de billeteras de criptomonedas en cualquier aplicación de navegador que lo cargara. Esas versiones estuvieron disponibles cerca de dos horas antes de que la comunidad las detectara y npm las retirara. Dos horas es una respuesta rápida, y aun así es tiempo de sobra para que una herramienta automática tome la versión envenenada y la deje frente a tu equipo. GitHub apunta además a una cifra que da dimensión al problema: en el año terminado en mayo de 2026, su Advisory Database publicó más de 6.500 avisos de malware en npm, cerca de 18 paquetes maliciosos nuevos cada día.',
      'Lo que más me llama la atención de este cambio es que no es una decisión técnica, sino de diseño. Alguien miró un flujo completamente automatizado y decidió introducir una espera a propósito, sabiendo que iba a incomodar a quienes valoran estar siempre en la última versión. Eligió una fricción concreta (tres días) por una razón concreta: la mayoría de las versiones maliciosas de paquetes populares se detectan y se retiran en horas, así que esperar deja pasar la ventana en la que el ataque vive.',
      'Vengo de trabajar en aplicaciones de banca y fintech, y ahí aprendí que la fricción bien puesta no es un error de usabilidad. Es lo que impide que una acción irreversible ocurra por inercia. Un paso de confirmación antes de transferir a un destinatario nuevo incomoda un segundo y evita un problema que puede ser enorme. La clave nunca fue eliminar la fricción, sino ubicarla donde el costo de equivocarse es alto y quitarla de todo el resto del recorrido. En este caso el usuario es el equipo de desarrollo, pero el principio es exactamente el mismo.',
      'GitHub es honesto sobre los límites de la medida: un período de enfriamiento sirve contra el ataque que se publica, se propaga y se descubre rápido, pero no contra una puerta trasera que queda latente durante meses ni contra un sistema de compilación comprometido. Por eso lo plantea como una capa más, junto con fijar versiones con lockfiles, desactivar los scripts de instalación en integración continua, acotar los permisos de los tokens y revisar las actualizaciones antes de fusionarlas.',
      'Me quedo con la pregunta de fondo, que sirve tanto para una interfaz como para un flujo de trabajo: nos acostumbramos a tratar la fricción como la enemiga de la buena experiencia, cuando en realidad la pregunta correcta no es cuánta fricción hay, sino dónde está puesta y a quién protege.',
    ],
    image: '/blog/dependabot-cooldown-friccion-de-diseno.png',
    imageAlt:
      'Tarjeta del artículo: Tres días de espera, la fricción también es una decisión de diseño, con una línea de tiempo de 72 horas de enfriamiento',
    sourceUrl:
      'https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/',
    sourceLabel: 'GitHub Blog — Carlin Cherry',
  },
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
