import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  Baby,
  Droplets,
  Heart,
  Leaf,
  Menu,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { buttonVariants } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Separator } from "./components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
import hero from "./assets/lactancia.jpg";
import logo from "../public/favicon.jpeg";
import brochure from "./assets/Folleto.pdf";

const nutrients = [
  [
    "Agua",
    "Hidratación natural",
    "Cerca del 88% de la leche materna es agua. Durante la lactancia exclusiva, hidrata al bebé sin necesidad de ofrecer otros líquidos.",
    Droplets,
  ],
  [
    "Carbohidratos",
    "Energía para crecer",
    "Principalmente lactosa, que aporta energía y favorece el desarrollo cerebral.",
    Sparkles,
  ],
  [
    "Grasas",
    "Desarrollo neurológico",
    "Contiene ácidos grasos esenciales, como el DHA, importantes para el sistema neurológico y la retina.",
    Baby,
  ],
  [
    "Proteínas",
    "Nutrición y defensa",
    "Proteínas de fácil digestión, como la lactoalbúmina, y proteínas de defensa, como la lactoferrina.",
    ShieldCheck,
  ],
  [
    "Vitaminas y minerales",
    "Nutrientes esenciales",
    "Aporta hierro, calcio y vitaminas A y C, entre otros nutrientes, en formas de alta absorción. Consultá al equipo de salud sobre los suplementos que tu bebé pueda necesitar.",
    Leaf,
  ],
  [
    "Componentes bioactivos",
    "Protección desde el inicio",
    "Anticuerpos, como la inmunoglobulina A, glóbulos blancos, enzimas y hormonas que contribuyen a la protección y al desarrollo del bebé.",
    Heart,
  ],
] as const;

const benefits = {
  bebe: [
    [
      "Protección inmunológica",
      "Ayuda a reducir la incidencia de infecciones respiratorias, otitis y diarreas.",
    ],
    [
      "Crecimiento y desarrollo",
      "La succión favorece el desarrollo de la mandíbula y del rostro. Sus nutrientes acompañan el desarrollo neurológico.",
    ],
    [
      "Salud a largo plazo",
      "Se asocia con un menor riesgo de obesidad y diabetes tipo 2. Puede contribuir a reducir el riesgo de algunas enfermedades alérgicas.",
    ],
  ],
  madre: [
    [
      "Recuperación posparto",
      "Estimula la liberación de oxitocina, ayuda al útero a recuperar su tamaño y reduce el sangrado posparto.",
    ],
    [
      "Salud a largo plazo",
      "Se asocia con un menor riesgo de cáncer de mama y de ovario, y puede contribuir a la salud cardiovascular.",
    ],
    [
      "Práctica y económica",
      "Está disponible a la temperatura adecuada y supone un ahorro económico para la familia.",
    ],
  ],
};

const navLinks = [
  ["La lactancia", "lactancia"],
  ["La leche materna", "leche"],
  ["Beneficios", "beneficios"],
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 font-bold">
        <div className="page-width header-inner">
          <a href="#inicio" className="brand" aria-label="Nido de Amor, inicio">
            <img src={logo} alt="" width={60} height={60} />
            <span>
              Nido de Amor<small>LACTANCIA MATERNA</small>
            </span>
          </a>
          <nav className="main-nav" aria-label="Navegación principal">
            {navLinks.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
            <a
              href={brochure}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                className: "flex items-center gap-2",
              })}
            >
              Ver folleto <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
          </nav>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "mobile-menu",
              })}
              aria-label="Abrir menú"
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="brand">
                  <img src={logo} alt="" width={44} height={44} />
                  <span>
                    Nido de Amor<small>LACTANCIA MATERNA</small>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="sheet-nav" aria-label="Navegación móvil">
                {navLinks.map(([label, id]) => (
                  <a
                    href={`#${id}`}
                    key={id}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={brochure}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    className: "flex items-center justify-center gap-2 w-full",
                  })}
                >
                  Ver folleto <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-photo"
            src={hero}
            alt="Una madre sostiene con ternura a su bebé recién nacido"
            width={1536}
            height={1024}
          />
          <div className="hero-shade" />
          <div className="page-width hero-inner">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="hero-copy"
            >
              <h1>
                Lactancia
                <br />
                materna<span>.</span>
              </h1>
              <p className="hero-subtitle">Alimento, protección y afecto.</p>
              <p className="hero-description text-slate-700">
                Información para acompañarte en una etapa única.
                <br className="desktop-break" /> Porque cuidar también es estar
                cerca.
              </p>
              <a
                href="#lactancia"
                className={buttonVariants({
                  size: "lg",
                  className: "inline-flex items-center gap-2",
                })}
              >
                Conocer más <ArrowDown className="h-4 w-4 shrink-0" />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-caption"
          >
            <Heart size={16} /> Cada vínculo es único. Cada familia, también.
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="intro section-space page-width"
          id="lactancia"
        >
          <div>
            <span className="eyebrow">01 / LA LACTANCIA</span>
            <h2>
              Mucho más <br />
              que alimentar.
            </h2>
          </div>
          <div className="intro-text text-slate-700">
            <p>
              La lactancia materna es el proceso por el cual la madre alimenta a
              su bebé a través de la leche que producen sus mamas. Es una forma
              natural de brindar{" "}
              <strong className="text-foreground">
                alimento, protección y afecto
              </strong>{" "}
              desde el nacimiento.
            </p>
            <p>
              Contar con información y una red de apoyo ayuda a las familias a
              tomar decisiones conscientes y a atravesar las dificultades
              iniciales. Acompañar sin juzgar también es cuidar.
            </p>
            <a
              href="#leche"
              className="text-link inline-flex items-center gap-2 mt-4"
            >
              Conocé qué contiene la leche materna{" "}
              <ArrowDown className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </motion.section>

        <section className="milk-section section-space" id="leche">
          <div className="page-width">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="section-heading"
            >
              <div>
                <span className="eyebrow">02 / LA LECHE MATERNA</span>
                <h2>
                  Un alimento vivo.
                  <br />
                  Una protección natural.
                </h2>
              </div>
              <p className="text-slate-700">
                Su composición se adapta a las necesidades del bebé y cambia a
                lo largo de la lactancia.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <Accordion className="nutrient-accordion">
                {nutrients.map(([title, subtitle, text, Icon], i) => (
                  <motion.div variants={fadeUp} key={title}>
                    <AccordionItem value={`nutrient-${i}`}>
                      <AccordionTrigger>
                        <span className="nutrient-head">
                          <span className="nutrient-icon">
                            <Icon size={23} strokeWidth={1.5} />
                          </span>
                          <span>
                            <strong className="text-slate-800">{title}</strong>
                            <small className="text-slate-600">{subtitle}</small>
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-slate-700">{text}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <Card className="colostrum-card mt-8">
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="colostrum-badge inline-flex items-center gap-1.5"
                  >
                    <Droplets className="h-3.5 w-3.5" /> Los primeros días
                  </Badge>
                  <CardTitle>
                    <h3 className="text-slate-800">
                      El calostro: un primer regalo de protección.
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Es la primera leche, presente durante los primeros 2 a 5
                    días después del parto. Espesa y amarillenta, es rica en
                    proteínas, anticuerpos y glóbulos blancos. Por su función
                    protectora, suele llamarse la «primera vacuna» del bebé.
                    También favorece la eliminación del meconio —sus primeras
                    deposiciones— y ayuda a reducir el riesgo de ictericia.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="section-space page-width" id="beneficios">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="section-heading"
          >
            <div>
              <span className="eyebrow">03 / BENEFICIOS</span>
              <h2>Bienestar que se comparte.</h2>
            </div>
            <p className="text-slate-700">
              La lactancia cuida al bebé y a la madre,
              <br />
              en el presente y a lo largo de la vida.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <Tabs defaultValue="bebe" className="w-full">
              <div className="flex justify-center sm:justify-start mb-8">
                <TabsList className="inline-flex h-auto p-1.5 bg-primary rounded-2xl gap-1">
                  <TabsTrigger
                    value="bebe"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all text-white/70 bg-transparent hover:text-white hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md data-[state=active]:scale-[1.02]"
                  >
                    <Baby size={19} /> Para el bebé
                  </TabsTrigger>

                  <TabsTrigger
                    value="madre"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all text-white/70 bg-transparent hover:text-white hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md data-[state=active]:scale-[1.02]"
                  >
                    <Heart size={19} /> Para la madre
                  </TabsTrigger>
                </TabsList>
              </div>
              {(Object.keys(benefits) as Array<keyof typeof benefits>).map(
                (key) => (
                  <TabsContent value={key} key={key}>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      className="benefit-grid"
                    >
                      {benefits[key].map(([title, text], index) => (
                        <motion.div variants={fadeUp} key={title}>
                          <Card className="benefit-card h-full border-none shadow-sm bg-white/80">
                            <CardHeader>
                              <span className="benefit-number font-bold text-primary/80">
                                0{index + 1}
                              </span>

                              <CardTitle>
                                <h3 className="text-slate-800">{title}</h3>
                              </CardTitle>
                            </CardHeader>

                            <CardContent>
                              <p className="text-slate-700">{text}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                ),
              )}
            </Tabs>
          </motion.div>
        </section>

        <section className="care-band">
          <div className="page-width care-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <Card className="care-card">
                <CardContent>
                  <Heart className="care-icon" strokeWidth={1.5} size={29} />
                  <span className="eyebrow">UN VÍNCULO QUE CRECE</span>
                  <h2>También es encuentro.</h2>
                  <p className="text-slate-700">
                    El contacto piel con piel y la cercanía durante la lactancia
                    favorecen la liberación de oxitocina, reducen el estrés y
                    ofrecen seguridad y consuelo al bebé. Son momentos que
                    fortalecen el vínculo afectivo.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <Card className="care-card">
                <CardContent>
                  <Leaf className="care-icon" strokeWidth={1.5} size={29} />
                  <span className="eyebrow">CUIDAR NUESTRO ENTORNO</span>
                  <h2>Naturalmente sostenible.</h2>
                  <p className="text-slate-700">
                    La leche materna no necesita envases, fabricación industrial
                    ni transporte para llegar al bebé. Reduce los residuos, el
                    consumo de energía y el uso de agua asociado a la
                    preparación de otros alimentos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="support section-space page-width"
        >
          <div>
            <span className="eyebrow">NO ESTÁS SOLA</span>
            <h2>Acompañar hace la diferencia.</h2>
            <p className="text-slate-700">
              Rodeate de personas que te apoyen y buscá orientación profesional
              <br className="desktop-break" /> de confianza. Tu bienestar
              también importa.
            </p>
          </div>
          <a
            href={brochure}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "inline-flex items-center gap-2",
            })}
          >
            <ArrowDownToLine className="h-4 w-4 shrink-0" /> Consultar el
            folleto
          </a>
        </motion.section>
      </main>

      <footer>
        <div className="page-width footer-top">
          <a href="#inicio" className="brand">
            <img
              src={logo}
              alt="Logo de Nido de Amor"
              width={48}
              height={48}
              loading="lazy"
            />
            <span>
              Nido de Amor<small>SAN JUAN, ARGENTINA</small>
            </span>
          </a>
          <span className="text-slate-500">
            Información para cuidar. Cercanía para acompañar.
          </span>
          <a
            href="#inicio"
            className="text-link inline-flex items-center gap-2"
          >
            Volver arriba <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
        </div>
        <Separator className="bg-slate-200" />
        <div className="page-width disclaimer text-slate-500">
          El contenido es informativo y no reemplaza la consulta con un
          profesional de salud. Cada madre, bebé y familia tiene necesidades
          particulares.
        </div>
      </footer>
    </>
  );
}
