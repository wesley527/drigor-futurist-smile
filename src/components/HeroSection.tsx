import { motion } from "framer-motion";
import drIgor from "@/assets/dr-igor.jpeg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary blur-[120px] animate-pulse-glow" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(42 55% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(42 55% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="line-gold mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Transformando{" "}
              <span className="text-gradient-gold">sorrisos</span>,{" "}
              <br className="hidden sm:block" />
              transformando{" "}
              <span className="text-gradient-gold">vidas</span>.
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-lg mb-8">
              Especialista em Implantodontia, oferecendo tratamentos de excelência
              com tecnologia de ponta para devolver o seu melhor sorriso.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5581991812325"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:scale-105 transition-transform duration-300 glow-gold"
              >
                Agende sua consulta
              </a>
              <a
                href="#sobre"
                className="px-8 py-3 rounded-full border border-primary/30 text-primary font-body font-semibold tracking-wide hover:bg-primary/10 transition-colors duration-300"
              >
                Conheça o Dr. Igor
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <img
                src={drIgor}
                alt="Dr. Igor Mendes - Cirurgião Dentista"
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl border border-border"
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-muted-foreground font-body">Especialista em</p>
                <p className="text-sm font-display font-semibold text-primary">Implantodontia</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
