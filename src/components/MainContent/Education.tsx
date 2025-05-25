import React from 'react';

// Datos de formación académica y cursos
const educationData = [
  {
    institution: 'Universidad de Antioquia',
    certificate: 'Ingeniería de Sistemas',
    role: 'Estudiante',
    date: '2017 - 2025',
    description:
      'Esta es una carrera enfocada en el diseño, desarrollo, implementación y gestión de sistemas informáticos y tecnológicos.',
  },
  {
    institution: 'Oracle Academy',
    certificate: 'Fundamentos de Java',
    role: 'Estudiante',
    date: '2018',
    description:
      'Este curso ofrece una base sólida en el lenguaje de programación Java y habilidades de programación prácticas.',
  },
  {
    institution: 'Coursera',
    certificate: 'AI for Everyone',
    role: 'Estudiante',
    date: '2020',
    description:
      'Este curso ofrece una introducción a la inteligencia artificial y su impacto en la sociedad.',
  },
  {
    institution: 'Red Hat Academy',
    certificate: 'Getting Started with Linux Fundamentals',
    role: 'Estudiante',
    date: '2024',
    description:
      'Este curso ofrece una introducción a los fundamentos de Linux y su uso en el desarrollo de software.',
  },
];

// Componente principal que muestra los bloques de educación
const Education = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-10 bg-[#f1f2f7]" id="education">
      <div className="max-w-6xl mx-auto">

        {/* Título y descripción de la sección */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Educación</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          He tenido una formación académica en ingeniería de sistemas complementada con cursos especializados en tecnología.
        </p>

        {/* Contenedor de los bloques de educación */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
          {educationData.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row justify-between gap-6 border-b border-gray-200 p-6 sm:p-8 last:border-0">
              
              {/* Columna izquierda: institución y fecha */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.institution}</h3>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-gray-500">{item.role}</span>
                  <div className="bg-purple-400 text-white text-xs font-semibold px-3 py-1 rounded">
                    {item.date}
                  </div>
                </div>
              </div>

              {/* Columna derecha: título del curso y descripción */}
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{item.certificate}</h4>
                <p className="text-sm text-justify text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
