// Este archivo contiene el código de la página de inicio para los usuarios que ya han iniciado sesión.
import{ Hero} from "@/components/Hero";

export default function indexSU() {
  return (
    <>
    <header className="z-50 max-w-6xl h-full mx-auto text-exp-light-blue">
    <nav
      className="absolute top-5 mx-auto z-10 max-w-6xl w-full flex justify-between  basis-full items-center px-6 md:px-6 md:px-8"
      aria-label="Global"
    >
      <div className="md:col-span-3">
        {/* Logo */}
        <a
          className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          href="/"
          aria-label="Preline"
        >
          <h1 className="font-bold">Explicalo.</h1>
        </a>
        {/* End Logo */}
      </div>
      {/* Button Group */}
      <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
        <a
          type="button"
          href="/indexSU"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 hover:text-[#1c1c1c] hover:bg-exp-light-blue  text-zinc-50 bg-transparent disabled:opacity-50 disabled:pointer-events-none"
        >
          Inicio
        </a>
      </div>
      {/* End Button Group */}
    </nav>
  </header>
  <Hero />
    </>
  );
}