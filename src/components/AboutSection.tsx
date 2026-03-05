import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import drIgor from "@/assets/dr-igor.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 relative" ref={ref}>
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
            Sobre o <span className="text-gradient-gold">Dr. Igor Mendes</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto">
              <div className="absolute -inset-2 rounded-2xl border border-primary/20" />
              <img
                src={drIgor}
                alt="Dr. Igor Mendes"
                className="rounded-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-foreground/90 font-body text-lg leading-relaxed">
              Dr. Igor Mendes é um apaixonado pela odontologia e pela capacidade de
              transformar vidas através dela. Concluiu a graduação em odontologia na{" "}
              <span className="text-primary font-semibold">ASCES UNITA</span> em 2020.
            </p>
            <p className="text-foreground/90 font-body text-lg leading-relaxed">
              Decidiu buscar uma especialização em implantodontia para aprimorar ainda
              mais seus conhecimentos e habilidades. Em 2023, concluiu com sucesso a
              pós-graduação no{" "}
              <span className="text-primary font-semibold">
                Instituto de Odontologia da Paraíba (IOA/IOP)
              </span>{" "}
              em Campina Grande, consolidando-se como especialista nessa área.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { number: "+5", label: "Anos de experiência" },
                { number: "+1000", label: "Sorrisos transformados" },
                { number: "100%", label: "Dedicação" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <p className="text-2xl font-display font-bold text-primary">{stat.number}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
