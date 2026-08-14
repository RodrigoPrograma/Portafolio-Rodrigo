import Container from "./container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="border-b border-gray-200 bg-white/70 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between">

            <span className="text-sm font-medium tracking-wide">
              Portfolio
            </span>

            <nav 
              aria-label="Main navigation"
              className="flex gap-6 text-sm text-gray-600"
            >
              <a 
                href="#about"
                className="transition hover:text-black"
              >
                Sobre mí
              </a>
              <a 
                href="#experience"
                className="transition hover:text-black"
              >
                Experiencia
              </a>
              <a 
                href="#projects"
                className="transition hover:text-black"
              >
                Proyectos
              </a>
              <a 
                href="mailto:ralonzo1337@gmail.com"
                className="transition hover:text-black"
              >
                Contacto
              </a>
            </nav>

          </div>
        </Container>
      </div>
    </header>
  );
}