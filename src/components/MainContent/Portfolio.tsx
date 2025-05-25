'use client'; // Indica que este componente se renderiza del lado del cliente (Next.js)
import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

// Definición del tipo para los proyectos
interface Project {
  title: string;
  image: string;
  link: string;
  shortDescription: string;
  detailedDescription: string;
}

// Lista de proyectos del portafolio
const portfolioItems: Project[] = [
  {
    title: 'Sistema de Monitoreo de Recursos',
    image: '/images/monitor-de-recursos.png',
    link: 'https://github.com/ClaraVilladiego/Monitor-Recursos',
    shortDescription: 'Aplicación para monitorear el uso de CPU, RAM y disco en tiempo real.',
    detailedDescription:
      'Este proyecto propone el desarrollo de un monitor de sistema personalizado que no solo mostrará información en tiempo real sobre el uso de recursos del sistema, sino que también implementará un sistema de notificaciones automáticas para alertar a los administradores cuando los procesos excedan umbrales predefinidos de uso de recursos.',
  },
  {
    title: 'Predict-Future-Sales',
    image: '/images/future-sales-prediction.png',
    link: 'https://github.com/ClaraVilladiego/Predict-Future-Sales',
    shortDescription: 'Modelo de predicción de ventas futuras basado en datos históricos.',
    detailedDescription:
      'Este proyecto de ciencia de datos busca predecir las ventas totales de cada producto y tienda durante el mes próximo. Se trabaja con un conjunto de datos de series temporales complejo, compuesto por datos de ventas diarias.',
  },
  {
    title: 'AppUestasConnect',
    image: '/images/appuestas-connect.png',
    link: 'https://github.com/ClaraVilladiego/AppUestasConnect',
    shortDescription: 'Plataforma web para apuestas deportivas entre amigos.',
    detailedDescription:
      'Una aplicación web desarrollada en Angular que permite crear y organizar partidos entre amigos, registrar resultados, armar equipos, realizar apuestas y visualizar estadísticas en tiempo real.',
  },
  {
    title: 'Clon de Mercadolibre',
    image: '/images/clon-mercadolibre.png',
    link: 'https://github.com/ClaraVilladiego/MercadoLibre',
    shortDescription: 'Replica funcional de la interfaz de usuario de Mercadolibre.',
    detailedDescription:
      'Este es un proyecto de front-end, realizado solamente en HTML y CSS que reproduce el diseño de la página de Mercadolibre para un proyecto académico.',
  },
];

// Componente principal que representa la sección de portafolio
export default function PortfolioSection() {
  const [isOpen, setIsOpen] = useState(false); // Controla si el modal está abierto
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // Guarda el proyecto seleccionado

  // Abre el modal y define el proyecto que se va a mostrar
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  // Cierra el modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-[#f1f2f7] flex flex-wrap flex-col px-6 py-12 sm:px-12" id="portfolio">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Portafolio</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Aquí se pueden ver algunos de los proyectos académicos que he realizado.
        </p>
      </div>
      
      {/* Grid de tarjetas de proyecto */}
      <div className="flex flex-wrap justify-center flex-row gap-6 pb-4">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] h-[350px] border border-gray-200 rounded-md shadow hover:shadow-md transition-shadow bg-white flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={150}
              className="w-full h-[150px] object-cover rounded-t-md"
            />

            {/* Contenido inferior: título, descripción, botón */}
            <div className="flex flex-col justify-between flex-1 p-4">
              <div className="flex-grow">
                <a
                  href={item.link}
                  className="text-lg font-semibold text-purple-600 hover:underline block mb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
                <p className="text-sm text-gray-600">{item.shortDescription}</p>
              </div>

              {/* Botón al fondo */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => openModal(item)}
                  className="bg-purple-500 text-white text-sm px-4 py-2 rounded hover:bg-purple-600"
                >
                  Saber más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal que muestra los detalles del proyecto */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-2">
              {selectedProject?.title}
            </Dialog.Title>
            <p className="text-sm text-gray-700 mb-4">
              {selectedProject?.detailedDescription}
            </p>
            <button
              onClick={closeModal}
              className="mt-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
            >
              Cerrar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
