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
            { name: 'Core Frontend', icon: '🧱', cls: 'v1', pct: 95, lv: 'Expert', pills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'] },
            { name: 'UI Frameworks', icon: '🎨', cls: 'v2', pct: 92, lv: 'Expert', pills: ['Tailwind CSS', 'Bootstrap', 'React Bootstrap'] },
            { name: 'Frontend — React & Next.js', icon: '⚛️', cls: 'v3', pct: 90, lv: 'Expert', pills: ['React.js', 'Next.js', 'TypeScript'] },
            { name: 'State Management', icon: '🔄', cls: 'v4', pct: 85, lv: 'Advanced', pills: ['Redux', 'Redux Toolkit', 'RTK Query'] },
            { name: 'Design Tools', icon: '🖌️', cls: 'v5', pct: 80, lv: 'Advanced', pills: ['Adobe Photoshop', 'Figma', 'Zeplin'] },
            { name: 'Backend Knowledge', icon: '🟢', cls: 'v6', pct: 65, lv: 'Working Knowledge', pills: ['MongoDB', 'Node.js', 'Express.js'] },
            { name: 'AI Tools', icon: '🤖', cls: 'v1', pct: 82, lv: 'Advanced', pills: ['Claude', 'Gemini', 'Blackbox AI', 'n8n'] },
            { name: 'CMS Platforms', icon: '🧩', cls: 'v2', pct: 78, lv: 'Advanced', pills: ['WordPress', 'Shopify', 'Wix', 'Elementor', 'Astro'] },
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
            { k: 'react', l: 'React.js' }, { k: 'ts', l: 'TypeScript' }, { k: 'next', l: 'Next.js' },
            { k: 'redux', l: 'Redux' }, { k: 'wp', l: 'WordPress' }, { k: 'shopify', l: 'Shopify' },
            { k: 'tailwind', l: 'Tailwind' }
        ];
        // NOTE: Placeholder projects only — add your live & GitHub links when ready.
        let projects = [
            { title: 'React JS Web App', desc: 'A responsive single-page application built with React.js, TypeScript and Redux Toolkit. Live demo and repo link coming soon.', tags: ['react', 'ts', 'redux'], color: 't1', emoji: '⚛️', live: '#', git: '#', featured: true },
            { title: 'WordPress Website', desc: 'A custom WordPress site built with Elementor, focused on clean design and fast page speed. Live link coming soon.', tags: ['wp'], color: 't4', emoji: '📝', live: '#', git: '#', featured: false },
            { title: 'Shopify Store', desc: 'A fully customized Shopify storefront with a tailored theme and optimized product pages. Live link coming soon.', tags: ['shopify'], color: 't6', emoji: '🛍️', live: '#', git: '#', featured: false },
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
                desc: document.getElementById('pDesc').value || 'A frontend web application.',
                tags: tagSelections.size ? [...tagSelections] : ['react'],
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
            { date: 'Jan 2024 – Present', role: 'Senior Frontend Developer', comp: 'TechNova Solutions · Chandigarh (Full-time)', desc: 'Lead development of responsive, high-performance UIs using React.js, Next.js & TypeScript for 50k+ monthly users. Built reusable component libraries with Redux Toolkit & RTK Query, and integrated Claude/Gemini AI tools into internal workflows.', badges: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'] },
            { date: 'Jun 2022 – Dec 2023', role: 'Frontend Developer', comp: 'StartupXYZ · Remote (Full-time)', desc: 'Built and maintained multiple React.js interfaces from Figma designs. Developed and customized WordPress and Shopify storefronts for clients. Improved page speed and responsiveness across devices.', badges: ['React.js', 'Redux', 'WordPress', 'Shopify', 'Bootstrap'] },
            { date: 'Jan 2022 – May 2022', role: 'Junior Frontend Developer', comp: 'Digital Agency Pvt. Ltd. · Chandigarh (Contract)', desc: 'Developed 10+ HTML/CSS/JS & React-based websites for e-commerce clients. Converted Figma/Photoshop designs into pixel-perfect, responsive pages with Bootstrap & Tailwind CSS.', badges: ['HTML/CSS/JS', 'React.js', 'jQuery', 'Figma', 'Bootstrap'] },
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
            { icon: '🎓', deg: 'B.Tech — Computer Science', school: 'Punjab Technical University', year: '2018 – 2022', gpa: 'GPA 8.4 / 10', desc: 'Core CS: DSA, DBMS, OS, Computer Networks, Software Engineering. Final year project — a React-based web application.' },
            { icon: '💻', deg: 'Frontend Development Bootcamp', school: 'Udemy + freeCodeCamp', year: '2022', gpa: '400+ hrs', desc: 'React.js, Next.js, TypeScript, Redux/RTK Query, responsive design with Tailwind CSS & Bootstrap.' },
            { icon: '🤖', deg: 'Generative AI Tools for Developers', school: 'Self-paced / Online', year: '2023', gpa: 'Certified', desc: 'Practical use of Claude, Gemini, Blackbox AI and n8n automation to speed up frontend development workflows.' },
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
