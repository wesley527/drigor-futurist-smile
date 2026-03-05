import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="line-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Entre em <span className="text-gradient-gold">Contato</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Agende sua avaliação e dê o primeiro passo para o sorriso dos seus sonhos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Phone,
              title: "WhatsApp",
              info: "+55 81 9 9181-2325",
              href: "https://wa.me/5581991812325",
              cta: "Enviar mensagem",
            },
            {
              icon: Instagram,
              title: "Instagram",
              info: "@dr.igormendes_",
              href: "https://www.instagram.com/dr.igormendes_?igsh=MXJuamc2eTVtczE0OQ==",
              cta: "Seguir perfil",
            },
            {
              icon: MapPin,
              title: "Localização",
              info: "Pernambuco, Brasil",
              href: "#",
              cta: "Ver no mapa",
            },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 hover:glow-gold text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">{item.info}</p>
              <span className="text-xs text-primary font-body font-semibold uppercase tracking-widest group-hover:underline">
                {item.cta}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-8 rounded object-cover" />
            <span className="font-display text-sm text-gradient-gold font-semibold">
              Dr. Igor Mendes
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Dr. Igor Mendes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
