import React, { useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    categoria: "",
    intro: "",
    contenido: "",
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-exp-blue to-black blur-6xl">
      <div className="w-full sm:max-w-4xl  px-4 py-20 sm:px-6 lg:px-8 lg:py-40 ">
        {/* Card */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-7">
          <form>
            {/* Section */}
            <div className="flex flex-col flex-wrap space-x-6 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
              <div className="mx-auto ">
                <h2 className="text-lg font-semibold text-gray-800">
                  Publicalo.
                </h2>
              </div>
              {/* End Col */}
              <div>
                <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                  Nombre
                </label>
              </div>
              {/* End Col */}
              <div className="sm:flex">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="text-black py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>

              {/* End Col */}
              <div className="sm:col-span-3">
                <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                  Categoría
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <select
                  id="categoria"
                  name="categoria"
                  className="text-black py-2 px-2 pe-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <option value="1">Escoge una opcion</option>
                  <option value="2">Finanzas</option>
                  <option value="3">Estilo de vida</option>
                  <option value="4">Programación</option>
                </select>
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <div className="">
                  <label
                    id="intro"
                    name="intro"
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                  >
                    Introducción
                  </label>
                </div>
              </div>
              {/* End Col */}
              <div>
                <input
                  id="intro"
                  name="intro"
                  type="text"
                  className="text-black py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              {/* End Col */}

              {/* End Col */}
            </div>
            {/* End Section */}
            {/* Section */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
              <div className="sm:col-span-12">
                <h2 className="text-lg font-semibold text-gray-800">
                  Contenido
                </h2>
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  id="imagen"
                  name="imagen"
                  className=" text-black inline-block text-sm font-medium text-gray-500 mt-2.5"
                >
                  Imagen (opcional)
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <label
                  htmlFor="af-submit-application-resume-cv"
                  className="sr-only text-gray-500"
                >
                  Choose file
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="text-black block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
      file:bg-gray-50 file:border-0
      file:bg-gray-100 file:me-4
      file:py-2 file:px-4
     "
                />
              </div>
              {/* End Col */}
              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    id="contenido"
                    name="contenido"
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                  >
                    Contenido
                  </label>
                </div>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <textarea
                  id="contenido"
                  name="contenido"
                  className="py-2 px-3 block text-black w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows={6}
                  placeholder="Agrega tu explicacion."
                  defaultValue={""}
                />
              </div>
              {/* End Col */}
            </div>

            <button
              type="submit"
              className="border font-semibold text-exp-blue px-6 py-2 border-exp-blue border-2 rounded rounded-full hover:bg-exp-blue hover:text-white hover:border-transparent transition duration-300 ease-in-out mt-2 w-full sm:w-auto mx-auto sm:mx-0"
            >
              Publicar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
