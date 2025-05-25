// Importamos los íconos de redes sociales desde react-icons
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

// Componente de la barra lateral derecha con enlaces sociales
const SidebarRight = () => {
  // Lista de íconos con su respectivo enlace y etiqueta para accesibilidad
  const icons = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/clara.villadiego/", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://x.com/ClaraVilladiego", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/cvilladiego_27/", label: "Instagram" },
    { icon: <FaGithub />, href: "https://github.com/ClaraVilladiego", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/clara-villadiego-510bb2225/", label: "LinkedIn" },
  ];

  return (
    // Contenedor vertical para la barra lateral
    <aside className="w-[50px] bg-white shadow-md p-6 flex flex-col items-center">
      <h2 className="text-mx font-bold text-gray-700 mb-6">Links</h2>
      <div className="flex flex-col items-center space-y-5">
        {icons.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700 transition text-2xl"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default SidebarRight;
