import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import antes from "@/assets/antes.jpeg";
import depois from "@/assets/depois.jpeg";
import protese from "@/assets/protese.jpeg";

const cases = [
  { before: depois, label: "Antes e Depois - Lentes de Contato" },
  { before: antes, label: "Resultado - Reabilitação Estética" },
  { before: protese, label: "Prótese Protocolo" },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="resultados" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="line-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            <span className="text-gradient-gold">Resultados</span> que falam por si
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Cada sorriso transformado é uma história de confiança renovada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden border border-border glow-gold mb-6">
            <img
              src={cases[activeIndex].before}
              alt={cases[activeIndex].label}
              className="w-full aspect-video object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/80 to-transparent p-6">
              <p className="font-display text-lg font-semibold text-primary">
                {cases[activeIndex].label}
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 justify-center">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  i === activeIndex ? "border-primary glow-gold scale-105" : "border-border opacity-50 hover:opacity-80"
                }`}
              >
                <img src={c.before} alt={c.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
