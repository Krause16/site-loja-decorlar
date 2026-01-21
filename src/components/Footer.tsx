import { Instagram, Music2, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Principal - Dividido em 2 colunas agora (Esquerda e Direita) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          {/* Lado Esquerdo: Marca e Descrição */}
          <div className="max-w-md">
            <h3 className="text-3xl font-light tracking-wider mb-6 text-white">Decor-Lar</h3>
            <p className="text-gray-300 font-light leading-relaxed text-sm">
              Desde 1976, definindo padrões de excelência em design de interiores. 
              Transformando espaços com minimalismo, sofisticação e exclusividade.
            </p>
          </div>

          {/* Lado Direito: Redes Sociais */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-sm uppercase tracking-widest mb-6 text-gray-400 font-medium">Siga-nos</h4>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-600 transition-colors duration-300"
                aria-label="TikTok"
              >
                <Music2 size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé do Rodapé: Direitos Autorais */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Decor-Lar. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Design de Alto Padrão.</p>
        </div>
      </div>
    </footer>
  );
}