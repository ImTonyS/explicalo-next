import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function Descubre() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/posts");
      const postsData = await res.json();
      setPosts(postsData);
      setLoading(false);
    };

    fetchData().catch(console.error); // Manejar cualquier error que ocurra en la solicitud
  }, []); // El array vacío asegura que esto solo se ejecute una vez después del montaje

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <header className="z-50 max-w-6xl h-full mx-auto text-exp-light-blue">
        <nav
          className="absolute top-5 mx-auto z-10 max-w-6xl w-full flex justify-between  basis-full items-center px-6 md:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="md:col-span-3">
            {/* Logo */}
            <Link
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="/indexSU"
              aria-label="Preline"
            >
              <h1 className="font-bold">Explicalo.</h1>
            </Link>
            {/* End Logo */}
          </div>
          {/* Button Group */}
          <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <Link
              type="button"
              href="/indexSU"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 hover:text-[#1c1c1c] hover:bg-exp-light-blue  text-zinc-50 bg-transparent disabled:opacity-50 disabled:pointer-events-none"
            >
              Inicio
            </Link>
          </div>
          {/* End Button Group */}
        </nav>
      </header>
      <div className="bg-gradient-to-tl from-exp-blue to-black blur-6xl w-screen h-screen rounded-fulls min-h-screen flex justify-center items-center">
        <div className="card-container bg-gray-50 w-3/4 sm:w-3/4 md:1/2 h-3/4 rounded rounded-xl pt-2">
          <div className="flex items-center justify-between py-4 px-6">
            <h1 className="text-lg font-semibold text-black">Descubre...</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 sm:gap-x-5 px-4">
            {posts.map((post) => (
              <Card
                key={post.id}
                nombre={post.name}
                titulo={post.titulo}
                categoria={post.categoria}
                contenido={post.contenido}
                image={post.file}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
