import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import * as SiIcons from 'react-icons/si';
import { useEffect, useRef, useState } from 'react';
import { hero, highlights, projects, technologies, timeline, socials, about } from './data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } },
  viewport: { once: true, margin: '-80px' },
});

// Cabeçalho de "janela de editor" reutilizável — o elemento assinatura do site
function WindowFrame({ filename, children, className = '' }) {
  return (
    <div className={`rounded-md border border-[var(--border)] bg-[var(--surface)] overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--border)] bg-black/20">
        <div className="window-dots flex gap-1.5">
          <span className="bg-[#ff5f57]" />
          <span className="bg-[#febc2e]" />
          <span className="bg-[#28c840]" />
        </div>
        {filename && (
          <span className="font-mono text-xs text-[var(--muted)] ml-2">{filename}</span>
        )}
      </div>
      {children}
    </div>
  );
}

function SectionEyebrow({ children }) {
  return (
    <p className="font-mono text-xs text-[var(--accent)] mb-2">
      <span className="text-[var(--muted)]">// </span>{children}
    </p>
  );
}

export default function App() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // efeito de digitação no cargo, uma vez, ao montar
  const [typed, setTyped] = useState('');
  useEffect(() => {
    let i = 0;
    const full = hero.role;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const navTabs = [
    { label: 'about.md', href: '#sobre' },
    { label: 'projects.jsx', href: '#projetos' },
    { label: 'stack.json', href: '#stack' },
  ];

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--paper)] relative overflow-hidden">
      <div className="absolute inset-0 bg-code-grid opacity-60 pointer-events-none" />

      <header className="max-w-5xl mx-auto px-4 pt-8 pb-6 flex flex-wrap items-center justify-between gap-4 relative">
        <div className="font-mono text-sm text-[var(--paper)]">
          <span className="text-[var(--accent)]">nilson</span>
          <span className="text-[var(--muted)]">@dev</span>
          <span className="text-[var(--muted)]">:~$</span>
          <span className="terminal-cursor" />
        </div>
        <nav className="flex items-center gap-1 font-mono text-xs">
          {navTabs.map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className="px-3 py-1.5 rounded border border-transparent text-[var(--muted)] hover:text-[var(--paper)] hover:border-[var(--border)] transition-colors"
            >
              {tab.label}
            </a>
          ))}
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded border border-transparent text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--border)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-16 space-y-20 relative">
        {/* Hero */}
        <motion.section className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center pt-4" {...inView(0)}>
          <motion.div {...fadeUp} className="space-y-5">
            <SectionEyebrow>disponível para projetos</SectionEyebrow>
            <h1 className="font-mono text-3xl sm:text-4xl font-semibold leading-tight text-[var(--paper)]">
              {hero.name}
            </h1>
            <p className="font-mono text-lg sm:text-xl text-[var(--accent)] min-h-[1.75rem]">
              {typed}
              {typed.length < hero.role.length && <span className="terminal-cursor" />}
            </p>
            <p className="text-base text-[var(--muted)] max-w-xl leading-relaxed">
              <span className="font-mono text-[var(--muted)]/70">/* </span>
              {hero.blurb}
              <span className="font-mono text-[var(--muted)]/70"> */</span>
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <motion.a
                href="#projetos"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent)] text-[var(--ink)] font-mono text-sm font-semibold hover:brightness-110 transition"
              >
                {hero.ctaPrimary}
                <ArrowUpRight size={16} />
              </motion.a>
              <motion.a
                href="/curriculoNilson.pdf"
                download="Curriculo-NilsonHoffmann.pdf"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border)] text-[var(--paper)] font-mono text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
              >
                {hero.ctaSecondary}
                <Download size={16} />
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {highlights.map((item, idx) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.06 }}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.5 }}>
            <WindowFrame filename="nilson.jpg">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={hero.avatar} alt="Foto de Nilson" className="h-full w-full object-cover" />
              </div>
            </WindowFrame>
            <div className="mt-3 font-mono text-xs text-[var(--muted)] flex items-center justify-between px-1">
              <span>último commit</span>
              <span className="text-[var(--accent)]">Plataforma de agendamento com IA</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Sobre */}
        <motion.section id="sobre" className="space-y-6 scroll-mt-20" {...inView(0.05)}>
          <SectionEyebrow>~/about.md</SectionEyebrow>
          <h2 className="font-mono text-2xl font-semibold text-[var(--paper)]">{about.title}</h2>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
            <p className="text-base text-[var(--muted)] leading-relaxed">{about.description}</p>
            <div className="space-y-3">
              {about.highlights.map((h, idx) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="flex gap-3 items-start font-mono text-sm"
                >
                  <span className="text-[var(--accent)]">›</span>
                  <p className="text-[var(--muted)]">{h}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projetos */}
        <motion.section id="projetos" className="space-y-6 scroll-mt-20" {...inView(0.05)}>
          <SectionEyebrow>~/projects</SectionEyebrow>
          <h2 className="font-mono text-2xl font-semibold text-[var(--paper)]">Projetos em destaque</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project, idx) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                {...fadeUp}
                transition={{ delay: 0.05 * idx }}
                whileHover={{ y: -4 }}
                className="block group"
              >
                <WindowFrame filename={`${project.title.toLowerCase().replace(/\s+/g, '-')}.jsx`} className="group-hover:border-[var(--accent)]/50 transition-colors">
                  <div className="aspect-video overflow-hidden bg-black/20">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono text-base font-semibold text-[var(--paper)]">{project.title}</h3>
                      <ArrowUpRight size={16} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition" />
                    </div>
                    <p className="text-sm text-[var(--muted)]">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((tag) => (
                        <span key={tag} className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/30 border border-[var(--border)] text-[var(--accent)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </WindowFrame>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Stack */}
        <motion.section id="stack" className="space-y-6 scroll-mt-20" {...inView(0.05)}>
          <SectionEyebrow>~/stack.json</SectionEyebrow>
          <h2 className="font-mono text-2xl font-semibold text-[var(--paper)]">Tecnologias</h2>

          <div className="relative">
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="overflow-x-scroll scrollbar-hide pb-2"
              style={{ cursor: 'grab', WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-3" style={{ width: 'max-content' }}>
                {technologies.map((tech, idx) => {
                  const Icon = SiIcons[tech.icon];
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.02 * idx, duration: 0.3 }}
                      viewport={{ once: true, margin: '-80px' }}
                      onMouseDown={(e) => e.stopPropagation()}
                      className="flex-shrink-0 w-24 h-24 rounded-md border border-[var(--border)] bg-[var(--surface)] flex flex-col items-center justify-center gap-2 hover:border-[var(--accent)]/50 transition select-none"
                    >
                      {Icon && <Icon className="text-3xl" style={{ color: tech.color }} />}
                      <span className="font-mono text-[10px] text-[var(--muted)]">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-2 w-16 bg-gradient-to-l from-[var(--ink)] to-transparent pointer-events-none" />
          </div>
          <p className="font-mono text-xs text-[var(--muted)]">← arraste para ver mais →</p>
        </motion.section>

        {/* Timeline — git log */}
        <motion.section className="space-y-4" {...inView(0.05)}>
          <SectionEyebrow>~/experience.log</SectionEyebrow>
          <h2 className="font-mono text-2xl font-semibold text-[var(--paper)]">Trajetória</h2>
          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: 0.05 * idx }}
                className="flex gap-4 py-4 border-b border-[var(--border)] last:border-0"
              >
                <span className="font-mono text-xs text-[var(--muted)] pt-1 w-8 shrink-0">
                  {String(timeline.length - idx).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <p className="font-mono text-xs text-[var(--accent)]">{item.period}</p>
                  <p className="font-mono text-base font-semibold text-[var(--paper)] mt-0.5">{item.title}</p>
                  <p className="text-sm text-[var(--muted)] mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...inView(0.05)}>
          <WindowFrame filename="contact.sh" className="p-6 sm:p-8 text-center space-y-4">
            <p className="font-mono text-sm text-[var(--muted)]">
              <span className="text-[var(--accent)]">$</span> ./vamos-conversar.sh
            </p>
            <h2 className="font-mono text-2xl sm:text-3xl font-semibold text-[var(--paper)]">Pronto para colaborar?</h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">
              Se você busca alguém para desenvolver aplicações web modernas com foco em performance, vamos conversar.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-1">
              <motion.a
                href="/curriculoNilson.pdf"
                download="Curriculo-NilsonHoffmann.pdf"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[var(--accent)] text-[var(--ink)] font-mono text-sm font-semibold hover:brightness-110 transition"
              >
                Baixar currículo
                <Download size={16} />
              </motion.a>
              <motion.a
                href={socials[2].href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[var(--border)] text-[var(--paper)] font-mono text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
              >
                <Mail size={16} /> Email
              </motion.a>
              <motion.a
                href={socials[1].href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[var(--border)] text-[var(--paper)] font-mono text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
              >
                <Linkedin size={16} /> LinkedIn
              </motion.a>
              <motion.a
                href={socials[0].href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[var(--border)] text-[var(--paper)] font-mono text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
              >
                <Github size={16} /> GitHub
              </motion.a>
            </div>
          </WindowFrame>
        </motion.section>
      </main>

      <footer className="max-w-5xl mx-auto px-4 py-8 font-mono text-xs text-[var(--muted)] flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Nilson Hoffmann Neto</span>
      </footer>
    </div>
  );
}