import React from 'react';
import Image from 'next/image';
import { FaRegObjectUngroup } from "react-icons/fa";

// Componente de barra lateral izquierda con información personal
export default function SidebarLeft() {
  return (
    <aside className="w-[240px] bg-white shadow-md p-5 flex flex-col items-center">
      {/* Sección de la foto de perfil y nombre */}
      <div className="text-center mb-2">
        <Image
          src="/images/Foto.png"
          alt="Foto de perfil"
          width={70}
          height={70}
          className="rounded-full mx-auto"
        />
        <h2 className="text-mx font-bold mt-4">Clara Villadiego M</h2>
        <p className="text-sm text-gray-500">Estudiante ingeniería de sistemas</p>
      </div>

      <div className="border-t border-gray-300 w-full my-4" />

      {/* Información personal */}
      <div className="text-sm mt-2 w-full text-justify">
        <div className="mb-2">
          <h3 className="font-bold mb-1">Edad</h3>
          <p>28 años</p>
        </div>
        <div className="mb-2">
          <h3 className="font-bold mb-1">Residencia</h3>
          <p>Monteria, Córdoba</p>
        </div>
        <div className="mb-2">
          <h3 className="font-bold mb-1">Teléfono</h3>
          <p>3216084017</p>
        </div>
        <div className="mb-2">
          <h3 className="font-bold mb-1">E-mail</h3>
          <p>clara.villadiego@udea.edu.co</p>
        </div>
      </div>

      <div className="border-t border-gray-300 w-full my-4" />

      {/* Idiomas con barra de porcentaje */}
      <div className="w-full mt-2 text-justify">
        <h2 className="text-base font-bold mb-4">Idiomas</h2>
        {[{ name: "Español", percent: 95 }, { name: "Inglés", percent: 45 }].map((lang, idx) => (
          <div key={idx} className="mb-5">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-800">{lang.name}</p>
              <span className="text-xs text-purple-700 font-semibold">{lang.percent}%</span>
            </div>
            {/* Barra de progreso */}
            <div className="w-full h-3 bg-white border border-purple-500 rounded-full overflow-hidden">
              <div
                className="bg-purple-500 h-full rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${lang.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 w-full my-4" />
      
      {/* Lenguajes de programación con barra de progreso */}
      <div className="w-full mt-2">
        <h3 className="text-base font-bold mb-4">Lenguajes de programación</h3>
        {["Java", "Python", "HTML/CSS", "JavaScript"].map((name, idx) => {
          const percentages = [55, 50, 50, 30];
          return (
            <div key={idx} className="mb-5">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-gray-800">{name}</p>
                <span className="text-xs text-purple-700 font-semibold">{percentages[idx]}%</span>
              </div>
              <div className="w-full h-3 bg-white border border-purple-500 rounded-full overflow-hidden">
                <div
                  className="bg-purple-500 h-full rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${percentages[idx]}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-300 w-full my-4" />
      
      {/* Habilidades */}
      <div className="w-full mt-2 text-justify">
        <h3 className="text-base font-bold mb-4">Habilidades</h3>
        <ul className="space-y-2">
          {["Responsabilidad", "Buena comunicación", "Trabajo en equipo", "Rápido aprendizaje"].map((skill, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <FaRegObjectUngroup className="text-purple-500 mt-1 text-base" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
