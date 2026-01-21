import { MapPin, Clock, Navigation, Map as MapIcon } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// --- Ícone Personalizado (Pino Vermelho) ---
const customIcon = L.divIcon({
  className: 'custom-pin',
  html: `
    <div class="relative">
      <div class="w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
      <div class="w-6 h-6 bg-red-600 rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

// --- Coordenadas REAIS: Rua Francisco Frischmann, 3294 - Portão ---
const STORE_POSITION: [number, number] = [-25.473789, -49.296038];

// --- Links para Rota ---
const addressEncoded = "Rua+Francisco+Frischmann,+3294+-+Portão,+Curitiba+-+PR";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressEncoded}`;
const wazeUrl = `https://waze.com/ul?q=${addressEncoded}&navigate=yes`;

export function Location() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      {/* FILTRO MÁGICO: 
         Deixa o mapa do Google Preto e Branco (Minimalista) 
         mas mantém o contraste para ler os nomes das ruas.
      */}
      <style>{`
        .google-gray-tiles .leaflet-tile {
          filter: grayscale(100%) contrast(1.1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Venha nos Visitar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Um ambiente exclusivo criado para inspirar a transformação do seu lar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-50 border border-gray-100">
          
          {/* Lado Esquerdo: Informações */}
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-10 bg-white z-10 relative shadow-lg">
            
            {/* Endereço */}
            <div className="flex items-start space-x-4">
              <div className="bg-red-50 p-3 rounded-full shrink-0">
                <MapPin className="text-red-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Nosso Espaço</h3>
                <p className="text-gray-600 mt-2 leading-relaxed font-light">
                  Rua Francisco Frischmann, 3294<br />
                  Portão, Curitiba - PR
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-start space-x-4">
              <div className="bg-red-50 p-3 rounded-full shrink-0">
                <Clock className="text-red-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Horário</h3>
                <p className="text-gray-600 mt-2 font-light text-sm">
                  Segunda a Sexta: 09h às 18h<br />
                  Sábado: 09h às 13h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            {/* Botões de Rota */}
            <div className="pt-2">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Traçar Rota</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium text-sm flex-1"
                >
                  <MapIcon size={18} />
                  Google Maps
                </a>
                <a 
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors font-medium text-sm flex-1"
                >
                  <Navigation size={18} />
                  Waze
                </a>
              </div>
            </div>
          </div>

          {/* Lado Direito: MAPA GOOGLE MAPS (Clean) */}
          <div className="lg:col-span-2 relative h-full w-full bg-gray-200 z-0">
            <MapContainer 
              center={STORE_POSITION} 
              zoom={18} 
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              {/* Usando a camada oficial do Google Maps (Roadmap)
                  mas aplicando nosso filtro 'google-gray-tiles' para ficar cinza e chique.
              */}
              <TileLayer
                className="google-gray-tiles"
                url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
              />
              
              <Marker position={STORE_POSITION} icon={customIcon}>
                <Popup className="font-sans">
                  <strong className="text-red-600">Decor.Lar</strong><br/>
                  Seu estilo vive aqui.
                </Popup>
              </Marker>
            </MapContainer>
          </div>

        </div>
      </div>
    </section>
  );
}