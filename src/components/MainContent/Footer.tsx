export default function Footer() {
  return (

    // Contenedor principal del pie de página
    <footer className="bg-white border-t mt-12 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Nombre y descripción */}
        <div>
          <h3 className="text-xl font-bold text-black-600">Clara Villadiego M</h3>
          <p className="mt-2 text-gray-500">
            Estudiante de ingeniería de sistemas. Apasionada por el desarrollo web y la tecnología.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-700">Navegación</h4>
          <ul className="space-y-1">
            <li><a href="#knowledge" className="hover:text-purple-600">Conocimientos</a></li>
            <li><a href="#education" className="hover:text-purple-600">Educación</a></li>
            <li><a href="#portfolio" className="hover:text-purple-600">Portafolio</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-700">Redes Sociales</h4>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ClaraVilladiego"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/clara-villadiego-510bb2225/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Sección inferior: derechos de autor */}
      <div className="text-center text-gray-400 border-t py-4 text-xs">
        © {new Date().getFullYear()} Clara Villadiego M. • Todos los derechos reservados.
      </div>
    </footer>
  );
}
