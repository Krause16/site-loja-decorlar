import { MapPin, ExternalLink, Navigation } from "lucide-react";

export function Location() {
  const address = "Rua Francisco Frischman, 3294 - Portão, Curitiba - PR";

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Frischman+3294+Portão+Curitiba+PR";

  // Waze (sem API)
  const wazeUrl =
    "https://waze.com/ul?q=Rua%20Francisco%20Frischman%2C%203294%20-%20Port%C3%A3o%2C%20Curitiba%20-%20PR&navigate=yes";

  // Embed simples (sem API). O mapa vai ficar cinza via CSS filter.
  // O "pin vermelho" será um overlay do seu site.
  const mapsEmbedUrl =
    "https://www.google.com/maps?q=Rua+Francisco+Frischman+3294+Portão+Curitiba+PR&z=16&output=embed";

  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-black">Localização</h2>
          <p className="text-xl text-gray-700">
            Visite nossa loja física e conheça todas as novidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* CARD DE INFORMAÇÕES */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-black">Nosso Endereço</h3>
                <p className="text-gray-700 text-lg">{address}</p>
              </div>
            </div>

            {/* Botões: Google Maps + Waze */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
              >
                <ExternalLink size={20} />
                Abrir no Google Maps
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <Navigation size={20} />
                Abrir no Waze
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-xl mb-4 text-black">Horário de Funcionamento</h4>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Segunda a Sexta:</strong> 8h às 18h30
                </p>
                <p>
                  <strong>Sábado:</strong> 9h às 13h
                </p>
                <p>
                  <strong>Domingo:</strong> Fechado
                </p>
              </div>
            </div>
          </div>

          {/* MAPA PREMIUM (sem API, sofisticado) */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-[520px] border border-gray-200">
            {/* Overlay gradiente + vinheta (deixa com cara premium) */}
            <div className="pointer-events-none absolute inset-0 z-[2]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/10" />
              <div className="absolute inset-0 [box-shadow:inset_0_0_0_1px_rgba(0,0,0,0.04)]" />
              <div className="absolute inset-0 [box-shadow:inset_0_-80px_120px_rgba(0,0,0,0.20)]" />
            </div>

            {/* CTA: Google + Waze */}
            <div className="absolute top-5 left-5 z-[5] flex items-center gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/90 backdrop-blur text-white px-5 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
              >
                <Navigation size={18} />
                <span className="text-sm font-semibold">Como chegar</span>
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/85 backdrop-blur text-black px-5 py-3 rounded-lg shadow-lg border border-black/5 hover:border-red-600 hover:text-red-600 transition"
                aria-label="Como chegar pelo Waze"
                title="Como chegar pelo Waze"
              >
                <Navigation size={18} />
                <span className="text-sm font-semibold">Waze</span>
              </a>
            </div>

            {/* Badge do endereço (premium) */}
            <div className="absolute bottom-5 left-5 z-[5] max-w-[85%]">
              <div className="flex items-center gap-3 bg-white/85 backdrop-blur px-4 py-3 rounded-lg shadow-lg border border-black/5">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={18} />
                </div>
                <div className="leading-tight">
                  <p className="text-xs text-gray-500">Decor Lar</p>
                  <p className="text-sm text-gray-900 font-medium">{address}</p>
                </div>
              </div>
            </div>

            {/* PIN VERMELHO (overlay no centro) */}
            <div className="pointer-events-none absolute inset-0 z-[4] flex items-center justify-center">
              <div className="relative -translate-y-6">
                {/* Glow */}
                <div className="absolute inset-0 blur-xl opacity-40 bg-red-600 rounded-full scale-125" />
                {/* Pin */}
                <div className="relative w-12 h-12">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.25)]" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full" />
                  {/* Pontinha */}
                  <div className="absolute left-1/2 top-[75%] -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-red-600 drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)]" />
                </div>
              </div>
            </div>

            {/* GOOGLE MAPS (iframe) */}
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) contrast(1.15) brightness(1.02)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Loja"
            />

            {/* Hint de interação */}
            <div className="pointer-events-none absolute top-5 right-5 z-[5] hidden sm:block">
              <div className="bg-white/70 backdrop-blur px-3 py-2 rounded-lg border border-black/5 text-xs text-gray-700 shadow">
                Arraste para explorar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}