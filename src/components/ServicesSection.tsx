import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smile, ShieldCheck, Sparkles, Crosshair } from "lucide-react";

const services = [
  {
    icon: Crosshair,
    title: "Implantes Dentários",
    description: "Recupere dentes perdidos com implantes de última geração, devolvendo função e estética ao seu sorriso.",
  },
  {
    icon: Sparkles,
    title: "Lentes de Contato Dental",
    description: "Transforme seu sorriso com facetas ultrafinas que proporcionam naturalidade e harmonia.",
  },
  {
    icon: Smile,
    title: "Prótese Protocolo",
    description: "Solução definitiva com implantes fixos para restaurar completamente sua arcada dentária.",
  },
  {
    icon: ShieldCheck,
    title: "Reabilitação Oral",
    description: "Tratamento completo e personalizado para devolver saúde, função e beleza ao seu sorriso.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="line-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            <span className="text-gradient-gold">Serviços</span> Especializados
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Tratamentos modernos com tecnologia avançada para resultados excepcionais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 hover:glow-gold"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
