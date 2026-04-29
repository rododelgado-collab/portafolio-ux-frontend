import Card from './common/Card'
import type { Skill } from '../types'

const About = () => {
  const skills: Skill[] = [
    {
      category: 'Diseño UX',
      items: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems'],
    },
    {
      category: 'Desarrollo Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Web Accessibility'],
    },
    {
      category: 'Herramientas',
      items: ['Figma', 'VS Code', 'Git', 'Vite', 'axe DevTools'],
    },
  ]

  return (
    <section
      id="about"
      className="section container-tight"
      aria-label="Sección sobre mí"
    >
      <h2 className="text-slate-100 mb-12">Sobre mí</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <div className="lg:col-span-2">
          <p className="text-slate-300 mb-4 text-lg">
            Soy un diseñador y desarrollador con 5+ años de experiencia creando productos digitales
            que son tanto hermosos como accesibles. Mi pasión es la intersección entre diseño y
            desarrollo, asegurando que cada pixel sirve un propósito.
          </p>
          <p className="text-slate-300 text-lg mb-6">
            Especializado en WCAG 2.1 AA compliance y diseño centrado en el usuario, creo experiencias
            que funcionan para todos, sin importar sus capacidades o el dispositivo que utilicen.
          </p>
        </div>

        <div className="flex items-start justify-center lg:justify-end">
          <div
            className="w-64 h-64 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center"
            role="img"
            aria-label="Avatar - Imagen de perfil del diseñador"
          >
            <span className="text-6xl">👨‍💻</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-slate-100 mb-8">Habilidades</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} ariaLabel={`Habilidades en ${skillGroup.category}`}>
              <h4 className="text-slate-100 font-semibold mb-4">{skillGroup.category}</h4>
              <ul className="space-y-2 list-none m-0 p-0">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-slate-300 flex items-start">
                    <span className="text-blue-500 mr-2" aria-hidden="true">
                      ✓
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
