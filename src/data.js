export const hero = {
  name: 'Nilson Hoffmann Neto',
  role: 'Desenvolvedor Web Júnior',
  blurb:
    'Desenvolvo aplicações web modernas, acessíveis e rápidas, com foco em clareza visual, dados bem apresentados e entregas consistentes.',
  ctaPrimary: 'Ver projetos',
  ctaSecondary: 'Baixar Currículo',
  avatar: '/me.jpg', // coloque sua foto em public/me.jpg
};

export const about = {
  title: 'Sobre mim',
  description:
    'Sou desenvolvedor web júnior apaixonado por criar interfaces limpas, intuitivas e bem otimizadas. Tenho experiência com as principais tecnologias do ecossistema JavaScript e foco em entregar projetos que combinam design cuidadoso com funcionalidade robusta.',
  highlights: [
    'Experiência em desenvolvimento full-stack com React, Node.js e PostgreSQL',
    'Foco em UX/UI e performance de aplicações web',
    'Animações fluidas e microinterações que melhoram a experiência do usuário',
    'Versionamento com Git e colaboração em equipe',
    'Aprendizado contínuo e disposição para novos desafios',
  ],
};

export const highlights = [
  'Aplicações web com React, Vite e Tailwind',
  'Experiência do usuário focada em clareza e dados',
  'Integrações com APIs e dashboards de métricas',
  'Animações e microinterações com Framer Motion',
];

export const projects = [
  {
    title: 'FinTrack',
    description:
      'Plataforma para acompanhar ganhos, gastos, investimentos, saldo, categorias e gráficos de forma prática e organizada.',
    tech: ['React', 'Tailwind', 'Charts'],
    link: 'https://fintrack-8rc9.onrender.com',
    image: '/projects/fintrack.jpg', // coloque a imagem em public/projects/fintrack.jpg
  },
  {
    title: 'Rosanna',
    description:
      'Sistema de estoque para docerias: ingredientes, movimentações e quantidades em tempo real por usuário, com dados isolados.',
    tech: ['React', 'Tailwind', 'API'],
    link: 'https://estoque-doceria-frontend.onrender.com',
    image: '/projects/rosanna.jpg', // coloque a imagem em public/projects/rosanna.jpg
  },
  {
    title: 'Barbearia com IA',
    description:
      'App mobile de agendamento para barbearias com integração de IA para otimizar experiência do cliente e gestão do barbeiro.',
    tech: ['Mobile', 'Next.js', 'AI', 'Responsive'],
    link: 'https://fsw-aparatus-beta.vercel.app/',
    image: '/projects/barbearia-ia.jpg', // coloque a imagem em public/projects/barbearia-ia.jpg
  },
];

export const skills = [
  {
    title: 'Web',
    items: ['React', 'Vite', 'Next.js (básico)', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST', 'MongoDB', 'PostgreSQL (básico)'],
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'GitHub', 'Figma', 'Vercel', 'Linux'],
  },
];

export const timeline = [
  {
    period: 'jun 2025 — nov 2025',
    title: 'Desenvolvedor Web · Energy Simple',
    description: 'Manutenção e evolução de sistemas PHP/MySQL, correção de bugs e novas funcionalidades.',
  },
  {
    period: 'out 2024 — mar 2025',
    title: 'Estagiário de TI (Infraestrutura) · KPM Logistics',
    description: 'Suporte presencial e remoto, diagnóstico de problemas técnicos, equipamentos e redes.',
  },
  {
    period: 'jun 2023 — set 2024',
    title: 'Responsável por inventário · Trust Group',
    description: 'Monitoramento e administração de estoque, atendimento a chamados de suporte.',
  },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/nilson216' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nilson-hoffmann-neto-667910301/' },
  { label: 'Email', href: 'mailto:netohjunior216@gmail.com' },
];
