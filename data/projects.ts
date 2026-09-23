export const projects = [
  {
    number: '01',
    title: 'Expense Tracker con IA',
    description:
      'Aplicación para registrar y gestionar gastos utilizando IA para interpretar texto y automatizar la categorización.',
    technologies: ['React', 'FastAPI', 'Python', 'MongoDB', 'IA'],
  },
  {
    number: '02',
    title: 'SRTI — Sistema de Respuesta Temprana a Incendios',
    description:
      'Sistema que combina inteligencia artificial, datos meteorológicos y simulación de drones para detectar y responder ante incendios.',
    technologies: ['Python', 'IA', 'Open-Meteo', 'NASA FIRMS'],
  },
  {
    number: '03',
    title: 'Telegram Bot con IA',
    description:
      'Bot desarrollado en Python capaz de interpretar documentos, imágenes y consultas utilizando modelos de inteligencia artificial.',
    technologies: ['Python', 'Telegram API', 'IA', 'OCR'],
  },
] as const

export const technologies = ['Python', 'FastAPI', 'React', 'JavaScript', 'MongoDB', 'Git', 'Docker', 'IA / LLMs']

export type Project = (typeof projects)[number]

export default projects
