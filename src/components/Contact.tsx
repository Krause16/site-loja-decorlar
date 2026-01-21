import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/**
 * CONTATO – CONSULTORES (ALTO PADRÃO / LUXO)
 * - Fotos coloridas com tratamento de imagem premium
 * - Botão 'CONSULTORIA' estilo outline (borda fina)
 * - Interação minimalista preto/branco/vermelho
 */
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
    <section id="contato" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-black uppercase">
            Atendimento Exclusivo
          </h2>
          <div className="mt-6 mx-auto h-[1px] w-24 bg-gray-200" />
        </div>

        {/* GRID DE CONSULTORES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {consultores.map((consultor, index) => (
            <div key={index} className="group cursor-pointer flex flex-col items-center">
              
              {/* CONTAINER DA FOTO */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 border-b-4 border-transparent transition-colors duration-300 group-hover:border-red-600">
                <ImageWithFallback
                  src={consultor.foto}
                  alt={consultor.nome}
                  className="
                    w-full h-full object-cover
                    brightness-[0.95] contrast-[1.05]
                    transition-all duration-700 ease-out
                    group-hover:scale-105
                    group-hover:brightness-105
                  "
                />
                
                {/* Efeito sutil de vinheta para destacar o rosto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* INFORMAÇÕES */}
              <div className="pt-6 w-full text-center">
                <h3 className="text-lg font-medium tracking-wide text-black group-hover:text-red-600 transition-colors duration-300">
                  {consultor.nome}
                </h3>

                {/* BOTÃO 'CONSULTORIA' - ESTILO GRIFE */}
                <a
                  href={`https://wa.me/${consultor.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5 inline-flex items-center gap-3
                    px-6 py-3
                    text-[10px] font-bold tracking-[0.25em] uppercase
                    text-black border border-black/10
                    hover:bg-black hover:text-white hover:border-black
                    transition-all duration-300 ease-in-out
                  "
                >
                  <MessageCircle size={14} strokeWidth={1.5} />
                  Consultoria
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}