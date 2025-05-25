'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

// Componente principal del encabezado
export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el diálogo/modal

  return (
    <header className="bg-[#f1f2f7] py-8 px-6 sm:px-10">

      {/* Contenedor principal con fondo blanco, sombra y padding */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 rounded-xl shadow-md p-6 bg-white min-h-[300px]">
        
        {/* Sección de texto y botón */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-3xl text-center font-bold text-gray-800">
            ¡Hola! <br />
            Soy <span className="text-purple-600">Clara Villadiego</span>, estudiante de ingeniería de sistemas
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-4">
            Amo crear soluciones creativas y funcionales. Me encanta aprender y mejorar mis habilidades y siempre estoy lista para nuevos desafíos y oportunidades de crecimiento.
          </p>

          {/* Botón que activa el modal de presentación */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700"
          >
            Conóceme más
          </button>
        </div>

        <div className="flex items-center h-full">
          <Image
            src="/images/Foto 2.png"
            alt="Foto"
            width={0}
            height={0}
            sizes="80vw"
            className="h-full w-auto object-cover"
          />
        </div>
      </div>

      {/* Diálogo animado */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl"
          >
            <Dialog.Title className="text-xl font-bold text-purple-700 mb-2 text-center">
              ¡Mucho gusto!
            </Dialog.Title>

            <div className="flex justify-center mb-4">
              <Image
                src="/images/hello-animate.svg"
                alt="Ilustración"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            <p className="text-sm text-gray-700 mb-4 text-center">
              Soy una apasionada por la tecnología, enfocada en crear soluciones eficientes y humanas. Me encanta trabajar en equipo, aprender cada día y aplicar mis conocimientos en proyectos que marquen la diferencia.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      </Dialog>
    </header>
  );
}
