import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://i.imgur.com/AP8iicB.jpeg"
          alt="Interior elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6">
          Transforme seu Lar
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Detalhes que transformam o seu espaço, com escolhas
          exclusivas para criar ambientes únicos e acolhedores
        </p>
      </div>
    </section>
  );
}