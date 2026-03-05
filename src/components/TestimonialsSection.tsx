import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Maria Clara S.",
    text: "O Dr. Igor transformou meu sorriso completamente! As lentes de contato ficaram perfeitas e naturais. Me sinto muito mais confiante agora.",
    rating: 5,
    procedure: "Lentes de Contato",
  },
  {
    name: "João Pedro M.",
    text: "Fiz implante com o Dr. Igor e foi a melhor decisão. Profissional atencioso, explicou tudo com calma. O resultado ficou incrível!",
    rating: 5,
    procedure: "Implante Dentário",
  },
  {
    name: "Ana Beatriz L.",
    text: "Tinha muito medo de dentista, mas o Dr. Igor me deixou super à vontade. A reabilitação ficou maravilhosa, parece natural demais!",
    rating: 5,
    procedure: "Reabilitação Oral",
  },
  {
    name: "Carlos Eduardo R.",
    text: "Excelente profissional! Fiz a prótese protocolo e mudou minha vida. Voltei a sorrir e comer com confiança. Recomendo demais!",
    rating: 5,
    procedure: "Prótese Protocolo",
  },
  {
    name: "Fernanda G.",
    text: "Atendimento humanizado e resultado impecável. O Dr. Igor é um artista! Meu sorriso nunca esteve tão bonito.",
    rating: 5,
    procedure: "Estética Dental",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((activeIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((activeIndex + 1) % testimonials.length);

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="line-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            O que nossos <span className="text-gradient-gold">pacientes</span> dizem
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A satisfação dos nossos pacientes é o nosso maior orgulho.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Card */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10 text-center min-h-[280px] flex flex-col items-center justify-center">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground font-body text-base sm:text-lg leading-relaxed italic">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Author */}
                <div className="mt-2">
                  <p className="font-display font-semibold text-primary">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {testimonials[activeIndex].procedure}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
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

export default TestimonialsSection;
