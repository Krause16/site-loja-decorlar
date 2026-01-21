import { Sparkles, Heart, Award } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-black">Sobre a Decor-Lar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de 50 anos criando ambientes únicos e sofisticados,
            oferecendo soluções em decoração que unem elegância, qualidade e tradição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-8 text-center transition hover:shadow-md">
            <div className="w-14 h-14 border border-red-600 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-red-600" size={28} />
            </div>
            <h3 className="text-xl mb-3 text-black">Exclusividade</h3>
            <p className="text-gray-600">
              Peças cuidadosamente selecionadas para compor ambientes únicos e atemporais.
            </p>
          </div>

          <div className="border border-gray-200 p-8 text-center transition hover:shadow-md">
            <div className="w-14 h-14 border border-red-600 flex items-center justify-center mx-auto mb-6">
              <Heart className="text-red-600" size={28} />
            </div>
            <h3 className="text-xl mb-3 text-black">Atendimento Personalizado</h3>
            <p className="text-gray-600">
              Um atendimento próximo e especializado para transformar ideias em realidade.
            </p>
          </div>

          <div className="border border-gray-200 p-8 text-center transition hover:shadow-md">
            <div className="w-14 h-14 border border-red-600 flex items-center justify-center mx-auto mb-6">
              <Award className="text-red-600" size={28} />
            </div>
            <h3 className="text-xl mb-3 text-black">Qualidade Garantida</h3>
            <p className="text-gray-600">
              Produtos de alto padrão, com durabilidade, garantia e confiança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
