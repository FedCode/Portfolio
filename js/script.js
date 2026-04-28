    
        // ── HELPERS ──
        function go(id) { document.getElementById(id).scrollIntoView({ behavior: 'smooth' }) }
        function toast(msg, clr = 'var(--green)') {
            const t = document.getElementById('toast');
            t.textContent = msg; t.style.borderLeftColor = clr;
            t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3200);
        }

        // ── THEME ──
        let dark = true;
        function toggleTheme() {
            dark = !dark;
            document.documentElement.setAttribute('data-theme', dark ? '' : 'light');
            document.getElementById('themeBtn').textContent = dark ? '☀️' : '🌙';
        }

        // ── PARTICLES ──
        const pc = document.getElementById('particles');
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div'); p.className = 'particle';
            const s = Math.random() * 5 + 3;
            p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;background:${Math.random() > .5 ? 'rgba(124,107,255,.55)' : 'rgba(0,229,204,.45)'};animation-duration:${Math.random() * 14 + 8}s;animation-delay:${Math.random() * 10}s`;
            pc.appendChild(p);
        }

        // ── SKILLS ──
        const SKILLS = [
            { name: 'Frontend — React & Next.js', icon: '⚛️', cls: 'v1', pct: 92, lv: 'Expert', pills: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'] },
            { name: 'Backend — Node & Express', icon: '🟢', cls: 'v2', pct: 89, lv: 'Expert', pills: ['Node.js', 'Express.js', 'REST API', 'GraphQL', 'JWT Auth'] },
            { name: 'Database — MongoDB', icon: '🍃', cls: 'v3', pct: 86, lv: 'Advanced', pills: ['MongoDB', 'Mongoose', 'Redis', 'PostgreSQL', 'Firebase'] },
            { name: 'Generative AI & LLMs', icon: '🤖', cls: 'v4', pct: 82, lv: 'Advanced', pills: ['OpenAI GPT-4', 'LangChain', 'RAG', 'Prompt Eng.', 'Hugging Face'] },
            { name: 'SEO & On-Page Optimization', icon: '🔍', cls: 'v5', pct: 88, lv: 'Expert', pills: ['Technical SEO', 'Schema Markup', 'Core Web Vitals', 'GA4', 'Ahrefs'] },
            { name: 'DevOps & Cloud', icon: '☁️', cls: 'v6', pct: 75, lv: 'Intermediate', pills: ['Docker', 'AWS EC2/S3', 'Vercel', 'CI/CD', 'Nginx'] },
        ];
        const sg = document.getElementById('skillsGrid');
        SKILLS.forEach(s => {
            sg.innerHTML += `<div class="skill-card">
    <div class="sk-icon ${s.cls}">${s.icon}</div>
    <div class="sk-name">${s.name}</div>
    <div class="sk-level">${s.lv} · ${s.pct}%</div>
    <div class="sk-bar-bg"><div class="sk-bar" data-pct="${s.pct}%"></div></div>
    <div class="sk-pills">${s.pills.map(p => `<span class="sk-pill">${p}</span>`).join('')}</div>
  </div>`;
        });
        const io = new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.sk-bar').forEach(b => b.style.width = b.dataset.pct); io.unobserve(e.target) } }) }, { threshold: .25 });
        sg.querySelectorAll('.skill-card').forEach(c => io.observe(c));

        // ── PROJECTS DATA ──
        const ALL_TAGS = [
            { k: 'mern', l: 'MERN' }, { k: 'react', l: 'React' }, { k: 'node', l: 'Node.js' }, { k: 'mongo', l: 'MongoDB' },
            { k: 'ai', l: 'AI/GPT' }, { k: 'gen', l: 'Gen AI' }, { k: 'seo', l: 'SEO' }, { k: 'next', l: 'Next.js' }, { k: 'ts', l: 'TypeScript' }
        ];
        let projects = [
            { title: 'MindMate AI', desc: 'A GPT-4 powered mental health journaling app with mood analytics, RAG-based therapy recommendations, and personalized daily insight dashboard.', tags: ['mern', 'ai', 'gen'], color: 't1', emoji: '🧠', live: 'https://smartnotesaifrontend.onrender.com/', git: '#', featured: true },
            { title: 'ShopSmart E-Commerce', desc: 'Full-featured e-commerce platform with Stripe payments, real-time inventory management, admin analytics, and automated AI-generated SEO meta tags.', tags: ['mern', 'react', 'seo', 'mongo'], color: 't2', emoji: '🛍️', live: '#', git: '#', featured: false },
            { title: 'DevCollab Hub', desc: 'Real-time collaborative code editor with WebSockets, GitHub OAuth, multi-user project rooms, and an AI pair-programmer powered by GPT-4.', tags: ['mern', 'node', 'ai', 'ts'], color: 't3', emoji: '💻', live: '#', git: '#', featured: true },
            { title: 'RankFlow SEO Suite', desc: 'Technical SEO audit tool that crawls sites, generates structured reports, tracks SERP rankings, and uses Gen AI to write optimized meta content at scale.', tags: ['react', 'node', 'seo', 'gen'], color: 't4', emoji: '📈', live: '#', git: '#', featured: false },
            { title: 'TalentSync HR Platform', desc: 'AI-powered recruitment SaaS with automated resume screening, skill-match scoring, video interview scheduling, and DEI analytics built on MERN + Next.js.', tags: ['mern', 'ai', 'mongo', 'next'], color: 't5', emoji: '🎯', live: '#', git: '#', featured: true },
            { title: 'CryptoTrack Dashboard', desc: 'Real-time crypto portfolio tracker with live WebSocket price feeds, interactive D3 charts, news sentiment analysis via Gen AI, and alert notifications.', tags: ['react', 'node', 'gen', 'ts'], color: 't6', emoji: '₿', live: '#', git: '#', featured: false },
            { title: 'BlogCraft AI CMS', desc: 'Headless CMS with AI content generation, automatic internal linking for SEO, image alt-tag generation, and multi-author workflows built on MERN.', tags: ['mern', 'gen', 'seo', 'mongo'], color: 't7', emoji: '✍️', live: '#', git: '#', featured: false },
            { title: 'FoodieApp — Delivery Platform', desc: 'Full-stack food delivery app with real-time order tracking, Razorpay/Stripe checkout, restaurant admin panel, and progressive web app support.', tags: ['mern', 'react', 'node'], color: 't8', emoji: '🍕', live: '#', git: '#', featured: false },
        ];
        let activeFilter = 'all';

        function tagLabel(k) { return ALL_TAGS.find(t => t.k === k)?.l || k }

        function renderProjects() {
            const pg = document.getElementById('projectsGrid');
            const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.tags.includes(activeFilter));
            pg.innerHTML = '';
            filtered.forEach(p => {
                pg.innerHTML += `<div class="proj-card">
      ${p.featured ? '<div class="proj-featured">⭐ Featured</div>' : ''}
      <div class="proj-thumb ${p.color}">${p.emoji}</div>
      <div class="proj-body">
        <div class="proj-tags">${p.tags.map(t => `<span class="ptag ${t}">${tagLabel(t)}</span>`).join('')}</div>
        <div class="proj-title">${p.title}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-links">
          <button class="plink live" onclick="window.open('${p.live}','_blank')">🌐 Live</button>
          <button class="plink" onclick="window.open('${p.git}','_blank')">⌥ GitHub</button>
        </div>
      </div>
    </div>`;
            });
            pg.innerHTML += `<div class="add-proj-card" onclick="openModal()">
    <div class="add-icon">＋</div>
    <div class="add-label">Add Your Project</div>
    <div class="add-sub">Click to showcase your work</div>
  </div>`;
        }

        function renderFilters() {
            const fr = document.getElementById('filterRow');
            const usedTags = ['all', ...new Set(projects.flatMap(p => p.tags))];
            fr.innerHTML = usedTags.map(t => `<button class="filter-btn${t === activeFilter ? ' active' : ''}" onclick="setFilter('${t}')">${t === 'all' ? '🗂 All' : tagLabel(t)}</button>`).join('');
        }
        function setFilter(f) { activeFilter = f; renderFilters(); renderProjects() }
        renderFilters(); renderProjects();

        // ── MODAL ──
        const tagSelections = new Set();
        function openModal() {
            const wrap = document.getElementById('tagWrap');
            wrap.innerHTML = ALL_TAGS.map(t => `<span class="tag-toggle${tagSelections.has(t.k) ? ' on' : ''}" onclick="toggleTag('${t.k}',this)">${t.l}</span>`).join('');
            document.getElementById('modal').classList.add('open');
        }
        function toggleTag(k, el) { tagSelections.has(k) ? tagSelections.delete(k) : tagSelections.add(k); el.classList.toggle('on') }
        function closeModal() { document.getElementById('modal').classList.remove('open') }
        document.getElementById('modal').addEventListener('click', function (e) { if (e.target === this) closeModal() });
        function saveProject() {
            const t = document.getElementById('pTitle').value.trim();
            if (!t) { toast('Please enter a project title', 'var(--red)'); return }
            projects.unshift({
                title: t,
                desc: document.getElementById('pDesc').value || 'A fullstack web application.',
                tags: tagSelections.size ? [...tagSelections] : ['mern'],
                color: document.getElementById('pColor').value,
                emoji: document.getElementById('pEmoji').value || '🚀',
                live: document.getElementById('pLive').value || '#',
                git: document.getElementById('pGit').value || '#',
                featured: false
            });
            tagSelections.clear();
            ['pTitle', 'pDesc', 'pEmoji', 'pLive', 'pGit'].forEach(id => document.getElementById(id).value = '');
            closeModal(); renderFilters(); renderProjects();
            toast('✅ Project added successfully!');
        }

        // ── EXPERIENCE ──
        const EXP = [
            { date: 'Jan 2024 – Present', role: 'Senior Fullstack Developer', comp: 'TechNova Solutions · Chandigarh (Full-time)', desc: 'Lead development of scalable MERN applications serving 50k+ monthly users. Integrated OpenAI GPT-4 APIs and built a RAG-based internal knowledge base. Reduced page load times by 40% via Next.js SSR. Mentored 4 junior engineers.', badges: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'AWS', 'Docker', 'Redis'] },
            { date: 'Jun 2022 – Dec 2023', role: 'Fullstack Developer (MERN)', comp: 'StartupXYZ · Remote (Full-time)', desc: 'Built 3 SaaS MVPs from scratch using MERN stack. Implemented technical SEO strategies that grew organic traffic by 180% in 8 months. Integrated Stripe payments, real-time notifications, and multi-tenant architecture.', badges: ['MERN', 'Next.js', 'SEO', 'Stripe', 'WebSockets', 'Tailwind'] },
            { date: 'Jan 2022 – May 2022', role: 'Frontend Developer', comp: 'Digital Agency Pvt. Ltd. · Chandigarh (Contract)', desc: 'Developed 10+ React-based websites for e-commerce clients. Optimized Core Web Vitals achieving 95+ Lighthouse scores. Implemented structured data markup and on-page SEO, leading to top-3 Google rankings for target keywords.', badges: ['React', 'Next.js', 'TypeScript', 'SEO', 'Lighthouse', 'Schema.org'] },
        ];
        const tl = document.getElementById('timeline');
        EXP.forEach((e, i) => {
            tl.innerHTML += `<div class="titem" style="animation-delay:${i * 0.15}s">
    <div class="tdot"></div>
    <div class="tcard">
      <div class="tdate">${e.date}</div>
      <div class="trole">${e.role}</div>
      <div class="tcomp">${e.comp}</div>
      <div class="tdesc">${e.desc}</div>
      <div class="tbadges">${e.badges.map(b => `<span class="tbadge">${b}</span>`).join('')}</div>
    </div>
  </div>`;
        });

        // ── EDUCATION ──
        const EDU = [
            { icon: '🎓', deg: 'B.Tech — Computer Science', school: 'Punjab Technical University', year: '2018 – 2022', gpa: 'GPA 8.4 / 10', desc: 'Core CS: DSA, DBMS, OS, Computer Networks, Software Engineering. Final year project — AI-based attendance management system.' },
            { icon: '💻', deg: 'MERN Stack Bootcamp', school: 'Udemy + freeCodeCamp', year: '2022', gpa: '500+ hrs', desc: 'End-to-end MERN stack development, REST APIs, JWT auth, Redux, and deployment on AWS & Vercel.' },
            { icon: '🤖', deg: 'Generative AI for Developers', school: 'DeepLearning.AI (Coursera)', year: '2023', gpa: 'Certified', desc: 'LLMs, prompt engineering, RAG architectures, fine-tuning, and building AI-powered applications with LangChain.' },
            { icon: '🔍', deg: 'Technical SEO Certification', school: 'Google Digital Garage + Semrush', year: '2023', gpa: 'Certified', desc: 'Technical SEO fundamentals, Core Web Vitals, crawlability, structured data, on-page optimization, and analytics.' },
        ];
        const eg = document.getElementById('eduGrid');
        EDU.forEach(e => {
            eg.innerHTML += `<div class="edu-card">
    <div class="edu-icon">${e.icon}</div>
    <div class="edu-deg">${e.deg}</div>
    <div class="edu-school">${e.school}</div>
    <div class="edu-year">${e.year}</div>
    <div class="edu-desc">${e.desc}</div>
    <span class="edu-gpa">${e.gpa}</span>
  </div>`;
        });

        // ── CONTACT ──
        function sendMsg() {
            const n = document.getElementById('cName').value.trim();
            const e = document.getElementById('cEmail').value.trim();
            if (!n || !e) { toast('Please fill Name and Email', 'var(--red)'); return }
            toast('✅ Message sent! I\'ll reply within 24 hours.');
            ['cName', 'cEmail', 'cSubject', 'cMsg'].forEach(id => document.getElementById(id).value = '');
        }

        // ── SCROLL SPY ──
        const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
        window.addEventListener('scroll', () => {
            const y = window.scrollY + 80;
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                const links = document.querySelectorAll('.nav-links a');
                if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
                    links.forEach(l => l.classList.remove('active'));
                    const active = [...links].find(l => l.getAttribute('onclick')?.includes(id));
                    if (active) active.classList.add('active');
                }
            });
        });
  
