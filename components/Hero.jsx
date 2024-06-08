import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <>

      <div className="min-h-screen overflow-hidden">
        {/* Gradients */}
        <div aria-hidden="true" className="flex absolute -z-10 top-0">
          <div className="bg-gradient-to-tl from-exp-blue to-black blur-6xl w-screen h-screen rounded-fulls " />
        </div>
        {/* End Gradients */}
        <div className="flex h-screen items-center justify-center z-30">
          <div className="max-w-screen mx-8 px-2 sm:px-8 lg:px-8 lg:py-16">
            <div className="max-w-6xl lg:max-w-8xl text-center">
              <div className="mt-5">
                <p className="text-lg max-w-sm sm:max-w-4xl mx-auto text-exp-light-blue drop-shadow-xl font-semibold py-10">
                  ¿Alguna vez deseaste que te hubieran explicado de otra manera?
                </p>
              </div>
              {/* Title */}
              <div className="max-w-5xl">
                <h1 className="font-bold text-exp-light-blue text-7xl md:text-7xl lg:text-8xl 2xl:text-9xl dark:text-neutral-200">
                  Explicalo.
                </h1>
              </div>

              <p className="inline-block mt-8 text-sm sm:text-lg font-medium bg-clip-text bg-gradient-to-l from-exp-blue to-white via-white text-transparent">
                Seguro alguien está pasando por lo mismo.
              </p>
              {/* End Title */}

              {/* Buttons */}
              <div className="mt-12 gap-3 flex justify-center">
                <a
                  className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-exp-blue text-white hover:bg-exp-light-blue hover:text-black disabled:opacity-50 disabled:pointer-events-none"
                  href="/post"
                >
                  Publica
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-exp-light-blue hover:bg-gray-100 hover:text-exp-blue disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  Descubre
                </a>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
