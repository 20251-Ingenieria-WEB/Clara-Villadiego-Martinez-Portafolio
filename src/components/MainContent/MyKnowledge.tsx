// Arreglo de objetos con íconos, títulos y descripciones para cada área de conocimiento
const MyknowledgeItems = [
  {
    icon: "/icons/web-development.png",
    title: "Desarrollo Web",
    description: "HTML, CSS, JavaScript, React",
  },
  {
    icon: "/icons/ux-ui.png",
    title: "Diseño UI/UX ",
    description: "Figma",
  },
  {
    icon: "/icons/agile-methodologies.png",
    title: "Metodología Ágil",
    description: "Scrum, Kanban",
  },
  {
    icon: "/icons/database.png",
    title: "Bases de Datos",
    description: "MySQL, MongoDB",
  },
  {
    icon: "/icons/version-control.png",
    title: "Control de Versiones",
    description: "Git, GitHub",
  },
  {
    icon: "/icons/data-analysis.png",
    title: "Análisis de Datos",
    description: "R, Power BI, Excel",
  },
];

// Componente principal de la sección "Conocimientos"
export default function MyKnowledge() {
  return (
    <section className="bg-[#f1f2f7] py-16 px-4 sm:px-10" id="knowledge">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-2">Conocimientos</h2>
        <p className="text-gray-600 mb-10">
          Cuento con conocimientos básicos en las siguientes áreas, adquiridos 
          a través de formación académica, y continúo ampliándolos cada día.
        </p>

        {/* Grid de tarjetas de conocimiento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MyknowledgeItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
