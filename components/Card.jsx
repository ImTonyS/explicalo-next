import Image from "next/image";

export default function Card({ nombre, titulo, contenido, categoria, image }) {
  return (
    <div className="card-container max-h-[150px] flex flex-col bg-white border shadow-xl rounded-xl p-4 md:p-6 ">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold text-gray-800">{titulo}</h3>
        <h3 className="font-medium text-sm">{categoria}</h3>
      </div>
      <p className="mt-1 text-xs font-medium uppercase text-gray-500">
        {nombre}
      </p>
      <p className="mt-2 text-gray-500">{contenido}</p>
    </div>
  );
}
