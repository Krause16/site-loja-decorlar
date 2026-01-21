import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Dados das imagens com textos (Luxo precisa de contexto, mano!)
const SLIDES = [
  {
    src: "https://i.imgur.com/AP8iicB.jpeg",
    title: "Harmonia",
    desc: "Sofá modular e cortinas em voil. Amplitude e leveza atemporal."
  },
  {
    src: "https://i.imgur.com/FNYkeTm.jpeg",
    title: "Fluidez",
    desc: "Design orgânico em veludo. Movimento e elegância sob medida."
  },
  {
    src: "https://i.imgur.com/T8TZErU.jpeg",
    title: "Refúgio",
    desc: "Suíte master com blackout total. O equilíbrio entre conforto e função."
  },
  {
    src: "https://i.imgur.com/owrkAEh.jpeg",
    title: "Exclusividade",
    desc: "Estofado amplo e cortinas em linho fendi. O clássico reinventado."
  },
  {
    src: "https://i.imgur.com/4LUqKKv.jpeg", 
    title: "Essência",
    desc: "Cabeceira artesanal e texturas nobres. Acabamento impecável."
  },
];

export function Gallery() {
  const containerRef = useRef(null);
  
  // Monitora o scroll total do container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="bg-black relative">
      {SLIDES.map((slide, i) => {
        // Cálculo matemático pra criar o efeito de "empilhamento"
        // Cada slide monitora o scroll global, mas reage no tempo certo
        const targetScale = 1 - ((SLIDES.length - i) * 0.05); 
        
        return (
          <Card 
            key={i} 
            i={i} 
            {...slide} 
            progress={scrollYProgress} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

interface CardProps {
  i: number;
  src: string;
  title: string;
  desc: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ i, src, title, desc, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // A imagem escala um pouquinho pra dar profundidade (efeito Apple)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]); // Zoom out suave
  
  // O container escala pra trás quando o próximo entra (efeito de pilha 3D)
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative w-[90vw] h-[80vh] rounded-[20px] overflow-hidden origin-top bg-[#1a1a1a] border border-white/10 shadow-2xl"
      >
        {/* Camada da Imagem com Zoom Suave */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
             <ImageWithFallback
                src={src}
                alt={title}
                className="w-full h-full object-cover"
              />
          </motion.div>
        </div>

        {/* Overlay de Grão (Segredo do Luxo pra esconder baixa resolução) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
        </div>

        {/* Overlay Gradiente pra leitura */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Tipografia Minimalista */}
        <div className="absolute bottom-10 left-10 text-white z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">{desc}</p>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter mix-blend-difference">
            {title}
          </h2>
        </div>
      </motion.div>
    </div>
  );
};