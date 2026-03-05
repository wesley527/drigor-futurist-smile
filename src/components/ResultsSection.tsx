import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
          {/* Main image with fade transition */}
          <div className="relative rounded-2xl overflow-hidden border border-border glow-gold mb-6 aspect-video">
            {cases.map((c, i) => (
              <img
                key={i}
                src={c.before}
                alt={c.label}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/80 to-transparent p-6">
              <p className="font-display text-lg font-semibold text-primary">
                {cases[activeIndex].label}
              </p>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex gap-2 justify-center">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
