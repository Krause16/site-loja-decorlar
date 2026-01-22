import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  const consultores = [
    {
      nome: "Patricia Spoti",
      foto: "https://i.imgur.com/qP3iqBl.jpeg",
      whatsapp: "5541992137368",
    },
    {
      nome: "Jessica Soares",
      foto: "https://i.imgur.com/q44y0cF.jpeg",
      whatsapp: "5541996599302",
    },
    {
      nome: "Gisele Fattori",
      foto: "https://i.imgur.com/05wP9ue.jpeg",
      whatsapp: "5541998001271",
    },
    {
      nome: "Edina Ferreira",
      foto: "https://i.imgur.com/FY95pIH.jpeg",
      whatsapp: "5541996236268",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-white scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-light tracking-wide text-black uppercase">
            Atendimento Exclusivo
          </h2>
          {/* Linha decorativa sutil */}
          <div className="mt-4 mx-auto h-[1px] w-16 bg-red-600/30" />
        </div>

        {/* GRID DE CONSULTORES 
            Mudança Principal: grid-cols-2 (Mobile) -> grid-cols-4 (PC)
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
          {consultores.map((consultor, index) => (
            <div key={index} className="group cursor-pointer flex flex-col items-center">
              
              {/* CONTAINER DA FOTO */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 border-b-[3px] border-transparent transition-colors duration-500 group-hover:border-red-600">
                <ImageWithFallback
                  src={consultor.foto}
                  alt={consultor.nome}
                  className="
                    w-full h-full object-cover
                    brightness-[0.98] contrast-[1.02]
                    transition-transform duration-700 ease-out
                    group-hover:scale-105
                  "
                />
                
                {/* Overlay ultra sutil pra dar profundidade */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* INFORMAÇÕES */}
              <div className="pt-4 w-full text-center">
                <h3 className="text-sm md:text-lg font-medium tracking-wide text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                  {consultor.nome}
                </h3>

                {/* BOTÃO 'CONSULTORIA' - Ajustado para caber no mobile */}
                <a
                  href={`https://wa.me/${consultor.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3 inline-flex items-center justify-center gap-2
                    px-3 py-2 md:px-6 md:py-3
                    w-full md:w-auto
                    text-[9px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.25em] uppercase
                    text-gray-500 border border-gray-200
                    hover:bg-black hover:text-white hover:border-black
                    transition-all duration-300 ease-in-out
                  "
                >
                  <MessageCircle size={12} className="md:w-[14px] md:h-[14px]" strokeWidth={1.5} />
                  <span>Consultoria</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}