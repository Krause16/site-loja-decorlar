import { MapPin, Phone, Clock } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // O estilo essencial do mapa

// --- Configuração do Ícone Vermelho Personalizado ---
// Cria o ponto vermelho usando CSS puro, sem imagens externas.
const customIcon = L.divIcon({
  className: 'custom-pin',
  html: `
    <div class="relative">
      <div class="w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
      <div class="w-6 h-6 bg-red-600 rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12], // Centraliza o ponto
});

// --- Coordenadas da Loja (IMPORTANTE: ATUALIZE ISTO!) ---
// Use a latitude e longitude REAIS da sua loja.
// Exemplo (Pinhais/PR): [-25.443150, -49.191300]
const STORE_POSITION: [number, number] = [-25.473728691546263, -49.29603450674768]; 

export function Location() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Venha nos Visitar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Nosso showroom foi pensado para você vivenciar o conforto e a sofisticação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-50 border border-gray-100">
          
          {/* Lado Esquerdo: Informações (Texto) */}
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-8 bg-white z-10 relative shadow-lg">
            
            {/* Endereço */}
            <div className="flex items-start space-x-4">
              <div className="bg-red-50 p-3 rounded-full">
                <MapPin className="text-red-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Nosso Showroom</h3>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  Av. Camilo di Lellis, 1234<br />
                  Centro, Pinhais - PR<br />
                  CEP 83323-000
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-start space-x-4">
              <div className="bg-red-50 p-3 rounded-full">
                <Clock className="text-red-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Horário de Atendimento</h3>
                <p className="text-gray-600 mt-1">
                  Segunda a Sexta: 09h às 18h<br />
                  Sábado: 09h às 13h
                </p>
              </div>
            </div>

            {/* Contato */}
            <div className="flex items-start space-x-4">
              <div className="bg-red-50 p-3 rounded-full">
                <Phone className="text-red-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Contato</h3>
                <p className="text-gray-600 mt-1">
                  (41) 99999-9999<br />
                  <span className="text-sm text-gray-500">contato@decorlar.com.br</span>
                </p>
              </div>
            </div>
          </div>

          {/* Lado Direito: O MAPA LIMPO */}
          <div className="lg:col-span-2 relative h-full w-full bg-gray-200 z-0">
            <MapContainer 
              center={STORE_POSITION} 
              zoom={15} 
              scrollWheelZoom={false}
              // Se quiser tirar até o zoom (+/-), descomente a linha abaixo:
              // zoomControl={false}
              className="h-full w-full"
            >
              {/* Camada do Mapa (Skin Cinza CartoDB) */}
              <TileLayer
                attribution='© OpenStreetMap contributors © CARTO'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              
              {/* O Marcador Vermelho Fixo */}
              <Marker position={STORE_POSITION} icon={customIcon}>
                <Popup className="font-sans">
                  <strong className="text-red-600">Decor.Lar</strong>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

        </div>
      </div>
    </section>
  );
}