/* ============================================================
   Brejnev KPELLY — Portfolio
   i18n (FR/EN) + small interactions
   ============================================================ */
const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.blog": "Blog",
    "nav.about": "À propos",

    "hero.eyebrow": "Portfolio",
    "hero.status": "Ouvert aux opportunités",
    "hero.role": "Développeur IA ",
    "hero.intro": "Titulaire d'une Licence Professionnelle en Intelligence Artificielle à l'IFRI, je conçois des solutions concrètes du modèle à , au besoin l'application qui l'embarque. Machine learning, NLP, vision par ordinateur et analyse de donnée et prédiction.",
    "hero.cta_projects": "Voir les projets",
    "hero.cta_contact": "Me contacter",
    "hero.cta_cv": "Télécharger mon CV",
    "hero.email": "Email",
    "hero.phone": "Téléphone",
    "hero.location": "Localisation",
    "hero.location_value": "Abomey-Calavi, Bénin",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",

    "home.projects.title": "Projets récents",
    "home.projects.see_all": "Tous les projets →",
    "home.experience.title": "Expérience",
    "home.skills.title": "Compétences",

    "skills.tech": "Techniques",
    "skills.tools": "Outils",
    "skills.soft": "Savoir-être",
    "skills.lang": "Langues",

    "exp1.role": "Stagiaire Développeur IA",
    "exp1.org": "Ministère de l'Économie et des Finances, Cotonou",
    "exp1.when": "Mai 2025 – Août 2025",
    "exp1.desc": "Développement d'un système intelligent de gestion des missions officielles ; analyse et modélisation de données pour l'optimisation budgétaire ; intégration d'outils de prédiction des coûts en appui à la décision.",

    "exp2.role": "Stagiaire Développeur IA",
    "exp2.org": "Holding Bourjon Investment, Cotonou",
    "exp2.when": "Août 2024 – Septembre 2024",
    "exp2.desc": "Contribution à un chatbot intelligent pour une application de mentorat ; création d'une application de traitement automatique de factures ; entraînement d'un modèle de prédiction.",

    "projects.page_title": "Projets",
    "projects.intro": "Une sélection de systèmes que j'ai conçus, du prototype à l'application pour certains.",
    "projects.featured": "Projets phares",
    "projects.other": "Autres réalisations",
    "projects.link_code": "Code source",
    "projects.link_case": "Voir le détail",
    "projects.hackathons": "Hackathons & concours",
    "projects.certificates": "Certificats",
    "p.other2.domain": "Optimisation",
    "p.other4.domain": "Vision par ordinateur",

    "p.riceguard.title": "RiceGuard",
    "p.riceguard.role": "Détection de maladies du riz par vision par ordinateur",
    "p.riceguard.desc": "Application Android hors-ligne qui identifie les maladies foliaires du riz à partir d'une photo. Un CNN (MobileNetV2, transfert d'apprentissage) atteint 99 % de précision, converti en modèle TFLite de 3,3 Mo pour une inférence en 45 ms sur téléphone.",

    "p.tellme.title": "TellmE",
    "p.tellme.role": "Assistant documentaire par recherche augmentée (RAG)",
    "p.tellme.desc": "Application de dialogue avec ses propres documents (PDF, DOCX, TXT) : les réponses citent la page source exacte. Interface en streaming mot-par-mot, architecture découplée pour brancher un backend réel sans réécrire les composants.",

    "p.ayestream.title": "AyeStream",
    "p.ayestream.role": "Marketplace SaaS de vente d'abonnements",
    "p.ayestream.desc": "Plateforme de vente d'abonnements streaming et outils IA, avec attribution automatique et sécurisée des comptes, paiement en ligne vérifié par signature, panneau d'administration complet.",

    "p.intrasys.title": "InTraSys",
    "p.intrasys.role": "Feux de signalisation intelligents pour la sécurité routière",
    "p.intrasys.desc": "Système de feux tricolores intelligents pensé pour fluidifier et sécuriser le trafic. Projet primé — 1ère place à l'Idéathon Sécurité Routière du C3E (UAC).",

    "p.eurusd.title": "Bot de trading EUR/USD ( en amélioration ) ",
    "p.eurusd.role": "Système algorithmique en Python / MetaTrader 5",
    "p.eurusd.desc": "Système de trading combinant analyse de structure de marché, score de tendance composite, filtres anti faux-signaux et gestion du risque, affiné par des cycles successifs de backtesting.",

    "p.other1": "Système de résumé automatique de texte (NLP)",
    "p.other2": "Optimisation et planification automatique d'examens par modèle algorithmique",
    "p.other3": "Chatbot open source de questions-réponses",
    "p.other4": "Segmentation d'images et reconnaissance de caractères (vision par ordinateur)",
    "p.other5": "Prédiction du stade d'une maladie rénale chronique",

    "blog.page_title": "Blog",
    "blog.intro": "Des notes sur mes projets et ce que j'apprends en IA — les premiers articles arrivent bientôt.",
    "blog.empty.title": "Rien à lire ici pour l'instant",
    "blog.empty.desc": "Cette section accueillera bientôt des retours d'expérience sur mes projets (RiceGuard, TellmE...) et des notes techniques. Revenez prochainement, ou suivez mon GitHub pour voir ce qui se prépare.",
    "blog.empty.cta": "Voir mon GitHub",

    "about.page_title": "À propos",
    "about.role": "Développeur IA",
    "about.p1": "Je suis titulaire d'une Licence Professionnelle en Intelligence Artificielle obtenue à l'Institut de Formation et de Recherche en Informatique (IFRI), à Abomey-Calavi. Passionné par l'IA et la technologie au sens large, j'utilise mes compétences en développement et en analyse de données pour construire des solutions concrètes et efficaces.",
    "about.p2": "Mon parcours combine formation académique et expériences pratiques : stages en développement IA dans un ministère et dans une entreprise d'investissement, participation à des hackathons, et plusieurs projets personnels menés du prototype jusqu'à la mise en production.",
    "about.education": "Formation",
    "about.experience": "Expérience professionnelle",
    "about.skills": "Compétences",
    "about.achievements": "Participations & distinctions",
    "about.interests": "Centres d'intérêt",
    "about.interests_value": "Musique, sport, lecture.",

    "edu1.title": "Licence Professionnelle en Intelligence Artificielle",
    "edu1.org": "Institut de Formation et de Recherche en Informatique (IFRI), Abomey-Calavi",
    "edu1.when": "2022 – 2025",
    "edu2.title": "Certificats Google (Coursera)",
    "edu2.org": "Foundations: Data, Data, Everywhere · Foundations of Digital Marketing and E-commerce",
    "edu2.when": "2026",
    "edu3.title": "Baccalauréat, série D",
    "edu3.org": "Collège Catholique Les Hibiscus, Parakou",
    "edu3.when": "2021 – 2022",
    "edu4.title": "Brevet d'Études du Premier Cycle (BEPC)",
    "edu4.org": "Collège Catholique Les Hibiscus, Parakou",
    "edu4.when": "2018 – 2019",
    "edu5.title": "Certificat d'Études Primaires (CEP)",
    "edu5.org": "École Primaire Catholique St Joseph d'Alaga, Parakou",
    "edu5.when": "2014 – 2015",

    "achv1.title": "Lauréat — Idéathon Sécurité Routière",
    "achv1.desc": "1ère place avec InTraSys,Système de feux tricolores intelligents pensé pour fluidifier et sécuriser le trafic. Organisé par le C3E (Centre pour l'Employabilité et l'Entrepreneuriat de l'UAC) dans le cadre de l'Idéathon Sécurité Routière .",
    "achv2.title": "Hackathon IA 2025 — ASIN",
    "achv2.desc": "Conception d'une plateforme intégrant l'IA pour faciliter l'accès à l'information sur le foncier aux citoyens béninois.",

    "footer.rights": "Tous droits réservés.",
    "footer.built": "Site conçu et développé personnellement."
  },

  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.about": "About",

    "hero.eyebrow": "Portfolio",
    "hero.status": "Open to opportunities",
    "hero.role": "AI Developer & Software Engineer",
    "hero.intro": "Holder of a Professional Bachelor's degree in Artificial Intelligence from IFRI, I build practical solutions — from the machine learning model to the application that ships it. Machine learning, NLP, computer vision and full-stack development.",
    "hero.cta_projects": "View projects",
    "hero.cta_contact": "Get in touch",
    "hero.cta_cv": "Download my CV",
    "hero.email": "Email",
    "hero.phone": "Phone",
    "hero.location": "Location",
    "hero.location_value": "Abomey-Calavi, Benin",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",

    "home.projects.title": "Recent projects",
    "home.projects.see_all": "All projects →",
    "home.experience.title": "Experience",
    "home.skills.title": "Skills",

    "skills.tech": "Technical",
    "skills.tools": "Tools",
    "skills.soft": "Soft skills",
    "skills.lang": "Languages",

    "exp1.role": "AI Developer Intern",
    "exp1.org": "Ministry of Economy and Finance, Cotonou",
    "exp1.when": "May 2025 – Aug 2025",
    "exp1.desc": "Built an intelligent system for managing official missions; analysed and modelled data for budget optimisation; integrated cost-prediction tools to support decision-making.",

    "exp2.role": "AI Developer Intern",
    "exp2.org": "Holding Bourjon Investment, Cotonou",
    "exp2.when": "Aug 2024 – Sep 2024",
    "exp2.desc": "Contributed to an intelligent chatbot for a mentoring application; built an automated invoice-processing application; trained a prediction model.",

    "projects.page_title": "Projects",
    "projects.intro": "A selection of systems I've designed and shipped, from research prototype to deployed application.",
    "projects.featured": "Featured projects",
    "projects.other": "Other work",
    "projects.link_code": "Source code",
    "projects.link_case": "See details",
    "projects.hackathons": "Hackathons & competitions",
    "projects.certificates": "Certificates",
    "p.other2.domain": "Optimization",
    "p.other4.domain": "Computer vision",

    "p.riceguard.title": "RiceGuard",
    "p.riceguard.role": "Rice leaf disease detection via computer vision",
    "p.riceguard.desc": "An offline Android app that identifies rice leaf diseases from a photo. A CNN (MobileNetV2, transfer learning) reaches 99% accuracy, converted to a 3.3 MB TFLite model for 45ms on-device inference.",

    "p.tellme.title": "TellmE",
    "p.tellme.role": "Retrieval-augmented document assistant (RAG)",
    "p.tellme.desc": "A chat app for talking to your own documents (PDF, DOCX, TXT), with answers citing the exact source page. Word-by-word streaming interface, decoupled architecture so a real backend can be plugged in without rewriting components.",

    "p.ayestream.title": "AyeStream",
    "p.ayestream.role": "SaaS subscription marketplace",
    "p.ayestream.desc": "A marketplace for streaming and AI-tool subscriptions, with secure automatic account assignment, signature-verified online payment, and a full admin panel.",

    "p.intrasys.title": "InTraSys",
    "p.intrasys.role": "Smart traffic lights for road safety",
    "p.intrasys.desc": "An intelligent traffic-light system designed to ease and secure traffic flow. Award-winning — 1st place at C3E's (UAC) Road Safety Ideathon.",

    "p.eurusd.title": "EUR/USD trading bot",
    "p.eurusd.role": "Algorithmic system in Python / MetaTrader 5",
    "p.eurusd.desc": "A trading system combining market-structure analysis, a composite trend score, no-trade filters and risk management, refined through successive rounds of backtesting.",

    "p.other1": "Automatic text summarisation system (NLP)",
    "p.other2": "Automatic exam scheduling optimisation via an algorithmic model",
    "p.other3": "Open-source question-answering chatbot",
    "p.other4": "Image segmentation and character recognition (computer vision)",
    "p.other5": "Chronic kidney disease stage prediction",

    "blog.page_title": "Blog",
    "blog.intro": "Notes on my projects and what I'm learning in AI — the first posts are coming soon.",
    "blog.empty.title": "Nothing to read here yet",
    "blog.empty.desc": "This section will soon host write-ups on my projects (RiceGuard, TellmE...) and technical notes. Check back soon, or follow my GitHub to see what's in progress.",
    "blog.empty.cta": "View my GitHub",

    "about.page_title": "About",
    "about.role": "AI Developer & Software Engineer",
    "about.p1": "I hold a Professional Bachelor's degree in Artificial Intelligence from the Institut de Formation et de Recherche en Informatique (IFRI), in Abomey-Calavi. Passionate about AI and technology more broadly, I use my development and data-analysis skills to build concrete, effective solutions.",
    "about.p2": "My background combines academic training with hands-on experience: AI development internships at a government ministry and an investment firm, hackathon participation, and several personal projects carried from prototype through to production.",
    "about.education": "Education",
    "about.experience": "Professional experience",
    "about.skills": "Skills",
    "about.achievements": "Participation & awards",
    "about.interests": "Interests",
    "about.interests_value": "Music, sport, reading.",

    "edu1.title": "Professional Bachelor's in Artificial Intelligence",
    "edu1.org": "Institut de Formation et de Recherche en Informatique (IFRI), Abomey-Calavi",
    "edu1.when": "2022 – 2025",
    "edu2.title": "Google Certificates (Coursera)",
    "edu2.org": "Foundations: Data, Data, Everywhere · Foundations of Digital Marketing and E-commerce",
    "edu2.when": "2026",
    "edu3.title": "Baccalauréat, Series D",
    "edu3.org": "Collège Catholique Les Hibiscus, Parakou",
    "edu3.when": "2021 – 2022",
    "edu4.title": "BEPC (lower-secondary certificate)",
    "edu4.org": "Collège Catholique Les Hibiscus, Parakou",
    "edu4.when": "2018 – 2019",
    "edu5.title": "CEP (primary school certificate)",
    "edu5.org": "École Primaire Catholique St Joseph d'Alaga, Parakou",
    "edu5.when": "2014 – 2015",

    "achv1.title": "Winner — Road Safety Ideathon",
    "achv1.desc": "1st place with InTraSys, a smart traffic-light system. Organised by C3E (UAC's Centre for Employability and Entrepreneurship).",
    "achv2.title": "ASIN AI Hackathon 2025",
    "achv2.desc": "Designed an AI-powered platform to improve Beninese citizens' access to land-related information.",

    "footer.rights": "All rights reserved.",
    "footer.built": "Designed and built personally."
  }
};

function getLang(){
  return localStorage.getItem('bk-lang') || 'fr';
}

function applyLang(lang){
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const dict = translations[lang] || translations.fr;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('bk-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // mark active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.primary a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // small scroll-reveal for section headers and list entries
  const revealTargets = document.querySelectorAll('.section-head, .entry, .achv-item, .empty');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    revealTargets.forEach(el => el.classList.add('reveal-init'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('reveal-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));
  }
});
