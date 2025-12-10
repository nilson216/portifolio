import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import * as SiIcons from 'react-icons/si';
import { hero, highlights, projects, technologies, timeline, socials, about } from './data';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
  viewport: { once: true, margin: '-80px' },
});

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:24px_24px] opacity-40 pointer-events-none" />

      <header className="max-w-6xl mx-auto px-4 pt-10 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
            <Sparkles size={22} />
          </div>
          <div>
            <p className="text-sm text-slate-300">Portfólio de</p>
            <h1 className="text-xl font-semibold text-slate-50">{hero.name}</h1>
          </div>
        </div>
        <nav className="flex items-center gap-3 text-sm text-slate-300">
          {socials.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-16 space-y-16">
        {/* Hero */}
        <motion.section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center" {...inView(0)}>
          <motion.div {...fadeUp} className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Disponível para projetos</p>
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight text-slate-50">
              {hero.role}
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl">{hero.blurb}</p>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#projetos"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white shadow-glass hover:-translate-y-0.5 transition"
              >
                {hero.ctaPrimary}
                <ArrowUpRight size={18} />
              </motion.a>
              <motion.a
                href="/curriculoNilson.pdf"
                download="Curriculo-NilsonHoffmann.pdf"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:border-primary hover:text-primary transition"
              >
                {hero.ctaSecondary}
                <Download size={18} />
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-2">
              {highlights.map((item, idx) => (
                <motion.span 
                  key={item} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-slate-200 text-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="h-12 w-12 rounded-full border border-primary/60 bg-primary/10 overflow-hidden">
                <img src={hero.avatar} alt="Sua foto" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Vamos conversar</p>
                <div className="flex gap-3">
                  <a href={socials[0].href} className="hover:text-primary transition" target="_blank" rel="noreferrer">
                    <Github size={18} />
                  </a>
                  <a href={socials[1].href} className="hover:text-primary transition" target="_blank" rel="noreferrer">
                    <Linkedin size={18} />
                  </a>
                  <a href={socials[2].href} className="hover:text-primary transition">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
              <img src={hero.avatar} alt="Sua foto" className="h-full w-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }}
              className="absolute -bottom-6 left-8 right-8 rounded-2xl bg-slate-900/80 backdrop-blur border border-white/10 p-4 shadow-glass"
            >
              <p className="text-sm text-slate-200">Último trabalho</p>
              <p className="text-base font-semibold text-slate-50">Plataforma de agendamento com IA</p>
              <div className="mt-2 flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Full Stack</span>
                <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">Web</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Sobre mim */}
        <motion.section className="space-y-6" {...inView(0.05)}>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Trajetória</p>
            <h3 className="text-3xl font-semibold text-slate-50">{about.title}</h3>
          </div>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
            <motion.div {...fadeUp} className="space-y-4">
              <p className="text-base text-slate-300 leading-relaxed">{about.description}</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }} className="space-y-3">
              {about.highlights.map((highlight, idx) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="flex gap-3 items-start"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-slate-300">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Projetos */}
        <motion.section id="projetos" className="space-y-6" {...inView(0.05)}>
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Trabalhos</p>
              <h3 className="text-3xl font-semibold text-slate-50">Projetos em destaque</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project, idx) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                {...fadeUp}
                transition={{ delay: 0.05 * idx }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/5 bg-white/5 hover:border-primary/60 transition shadow-glass overflow-hidden block cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-slate-800/60">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-slate-50">{project.title}</h4>
                    <ArrowUpRight size={18} className="text-slate-400 group-hover:text-primary transition" />
                  </div>
                  <p className="text-sm text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-900/70 border border-white/10 text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Tecnologias Modernas */}
        <motion.section className="space-y-6" {...inView(0.05)}>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Stack</p>
            <h3 className="text-3xl font-semibold text-slate-50">Tecnologias Modernas</h3>
            <p className="text-slate-400 mt-2">Utilizamos as ferramentas mais avançadas do mercado</p>
          </div>
          
          <div className="relative">
            <div 
              className="overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent hover:scrollbar-thumb-slate-600 pb-4"
              style={{ 
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <div 
                className="flex gap-6 px-4"
                style={{ width: 'max-content' }}
              >
                {[...technologies, ...technologies].map((tech, idx) => {
                  const IconComponent = SiIcons[tech.icon];
                  return (
                    <motion.div
                      key={`${tech.name}-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * (idx % technologies.length), duration: 0.4 }}
                      viewport={{ once: true, margin: '-80px' }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="flex-shrink-0 w-32 h-32 rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-glass flex flex-col items-center justify-center gap-3 hover:border-primary/60 transition cursor-pointer group"
                    >
                      {IconComponent && (
                        <IconComponent 
                          className="text-5xl transition-colors" 
                          style={{ color: tech.color }}
                        />
                      )}
                      <span className="text-sm font-medium text-slate-200">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Gradient overlays for scroll hint */}
            <div className="absolute top-0 left-0 bottom-4 w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-4 w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
          </div>
          
          <p className="text-center text-sm text-slate-400">← Arraste para ver mais →</p>
        </motion.section>

        {/* Timeline */}
        <motion.section className="space-y-4" {...inView(0.05)}>
          <h3 className="text-3xl font-semibold text-slate-50">Trajetória</h3>
          <div className="space-y-3">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: 0.05 * idx }}
                className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm text-primary font-medium">{item.period}</p>
                  <p className="text-lg font-semibold text-slate-50">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
                <ArrowUpRight size={18} className="text-slate-400" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section className="rounded-3xl border border-primary/40 bg-primary/10 p-8 text-center space-y-4 shadow-glass" {...inView(0.05)}>
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Vamos criar algo</p>
          <h3 className="text-3xl font-semibold text-slate-50">Pronto para colaborar?</h3>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Se você busca alguém para desenvolver aplicações web modernas com foco em performance e experiência, vamos conversar!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a
              href="/curriculoNilson.pdf"
              download="Curriculo-NilsonHoffmann.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 text-slate-900 font-semibold hover:-translate-y-0.5 transition"
            >
              Baixar Currículo
              <Download size={18} />
            </motion.a>
            <motion.a
              href={socials[2].href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-slate-100 hover:border-primary hover:text-primary transition"
            >
              Email
              <Mail size={18} />
            </motion.a>
            <motion.a
              href={socials[1].href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-slate-100 hover:border-primary hover:text-primary transition"
            >
              LinkedIn
              <Linkedin size={18} />
            </motion.a>
          </div>
        </motion.section>
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Nilson. Web • Full Stack • Performance.</span>
        <span className="text-slate-500">Feito com React + Tailwind + Framer Motion</span>
      </footer>
    </div>
  );
}
