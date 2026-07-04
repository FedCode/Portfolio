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
            { name: 'API Integration', icon: '🔌', cls: 'v5', pct: 88, lv: 'Advanced', pills: ['REST APIs', 'Axios', 'Async/Await', 'Sync/Async JS'] },
            { name: 'Testing & Validation', icon: '🧪', cls: 'v6', pct: 80, lv: 'Advanced', pills: ['Jest', 'React Testing Library', 'Zod'] },
            { name: 'Design Tools', icon: '🖌️', cls: 'v1', pct: 80, lv: 'Advanced', pills: ['Adobe Photoshop', 'Figma', 'Zeplin'] },
            { name: 'Backend Knowledge', icon: '🟢', cls: 'v2', pct: 65, lv: 'Working Knowledge', pills: ['MongoDB', 'Node.js', 'Express.js'] },
            { name: 'AI Tools', icon: '🤖', cls: 'v3', pct: 82, lv: 'Advanced', pills: ['Claude', 'Gemini', 'Blackbox AI', 'n8n'] },
            { name: 'CMS Platforms', icon: '🧩', cls: 'v4', pct: 78, lv: 'Advanced', pills: ['WordPress', 'Shopify', 'Wix', 'Elementor', 'Astro'] },
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
            { k: 'react', l: 'React.js' }, { k: 'node', l: 'Node.js' }, { k: 'mongo', l: 'MongoDB' },
            { k: 'html', l: 'HTML/CSS/JS' }, { k: 'wp', l: 'WordPress' }, { k: 'shopify', l: 'Shopify' }
        ];
        let projects = [
            { title: 'CodeCrack Solutions', desc: 'A business website built with React.js, focused on clean UI and fast performance.', tags: ['react'], color: 't1', emoji: '⚛️', live: 'http://codecracksolutions.com/', git: '#', featured: true },
            { title: 'SmartNotes AI', desc: 'A fullstack AI-powered note-taking app built with React Context API on the frontend and Node.js, Express & MongoDB on the backend.', tags: ['react', 'node', 'mongo'], color: 't3', emoji: '🧠', live: 'https://smartnotesaifrontend.onrender.com/', git: '#', featured: true },
            { title: 'MedPro Dental', desc: 'A responsive dental clinic website built with HTML, CSS & JavaScript.', tags: ['html'], color: 't2', emoji: '🦷', live: 'https://medprodental.com/', git: '#', featured: false },
            { title: 'Taylor Morrison', desc: 'A responsive website built with HTML, CSS & JavaScript.', tags: ['html'], color: 't7', emoji: '🏠', live: 'https://www.taylormorrison.com/', git: '#', featured: false },
            { title: 'CBITSS eCommerce', desc: 'A WordPress eCommerce product page built for CBITSS.', tags: ['wp'], color: 't4', emoji: '🛒', live: 'https://www.cbitss.app/product/web/', git: '#', featured: false },
            { title: 'Motherland Hospital Dharamshala', desc: 'A custom WordPress website for a hospital in Dharamshala.', tags: ['wp'], color: 't4', emoji: '🏥', live: 'https://www.motherlandhospitaldharamshala.com/', git: '#', featured: false },
            { title: 'Chandigarh Cab Express', desc: 'A WordPress website for a Chandigarh-based cab booking service.', tags: ['wp'], color: 't5', emoji: '🚕', live: 'https://www.chandigarhcabexpress.com/', git: '#', featured: false },
            { title: 'MK Enterprises', desc: 'A WordPress business website for MK Enterprises.', tags: ['wp'], color: 't4', emoji: '🏢', live: 'https://www.mk-enterprises.in/', git: '#', featured: false },
            { title: 'English Pro', desc: 'A WordPress website for an English learning platform.', tags: ['wp'], color: 't5', emoji: '📚', live: 'https://www.english-pro.in/', git: '#', featured: false },
            { title: 'EB5 Marketplace', desc: 'A WordPress website for an EB-5 investment marketplace.', tags: ['wp'], color: 't4', emoji: '💼', live: 'https://eb5marketplace.com/', git: '#', featured: false },
            { title: 'CBITSS', desc: 'The main WordPress website for CBITSS.', tags: ['wp'], color: 't5', emoji: '🌐', live: 'https://www.cbitss.in/', git: '#', featured: false },
            { title: 'Vendi Shop', desc: 'A customized Shopify storefront for Vendi.', tags: ['shopify'], color: 't6', emoji: '🛍️', live: 'https://shop.vendiapp.com/', git: '#', featured: false },
            { title: 'Myers Detox Store', desc: 'A Shopify store built for Myers Detox, with a tailored theme and product pages.', tags: ['shopify'], color: 't6', emoji: '🧴', live: 'https://store.myersdetox.com/', git: '#', featured: false },
            { title: 'The Jiu Jiteiro', desc: 'A Shopify storefront for a Brazilian Jiu-Jitsu brand.', tags: ['shopify'], color: 't8', emoji: '🥋', live: 'https://thejiujiteiro.com/', git: '#', featured: false },
            { title: 'Keystone Farms Cheese', desc: 'A Shopify store for a specialty cheese brand.', tags: ['shopify'], color: 't6', emoji: '🧀', live: 'https://www.keystonefarmscheese.com/', git: '#', featured: false },
            { title: 'MBBCVM', desc: 'A custom Shopify storefront.', tags: ['shopify'], color: 't8', emoji: '🛒', live: 'https://mbbcvm.com/', git: '#', featured: false },
            { title: 'Noleuderm', desc: 'A Shopify store for a skincare brand.', tags: ['shopify'], color: 't6', emoji: '🧴', live: 'https://www.noleuderm.com/', git: '#', featured: false },
            { title: 'One More Game Studio', desc: 'A Shopify storefront built for a game studio brand.', tags: ['shopify'], color: 't8', emoji: '🎮', live: 'https://onemoregame.studio/', git: '#', featured: false },
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
            { date: 'Jan 2023 – Present · 3 yrs 7 mos', role: 'Frontend Developer', comp: 'CBitss · Chandigarh, India (Full-time, On-site)', desc: 'Working as a Frontend Developer — building and maintaining responsive web interfaces using React.js, WordPress and Shopify for client projects.', badges: ['React.js', 'WordPress', 'Shopify', 'JavaScript'] },
            { date: 'Dec 2020 – Nov 2023 · 3 yrs', role: 'Frontend Developer', comp: 'Ivagam Infotech · Tiruvannamalai, Tamil Nadu (Full-time)', desc: 'Developed and maintained frontend interfaces using HTML, CSS, JavaScript, jQuery and React.js for various client websites.', badges: ['HTML/CSS/JS', 'jQuery', 'React.js', 'Bootstrap'] },
            { date: 'Jul 2019 – Oct 2020 · 1 yr 4 mos', role: 'Frontend Developer', comp: 'Net Solutions · Chandigarh IT Park', desc: 'Built and maintained responsive websites using HTML, CSS, JavaScript and jQuery, converting design mockups into functional pages.', badges: ['HTML/CSS/JS', 'jQuery', 'Bootstrap'] },
            { date: 'Jan 2018 – Jul 2019 · 1 yr 7 mos', role: 'Frontend Developer', comp: 'Digittrix Infotech Pvt Ltd · Chandigarh, India (Full-time)', desc: 'Developed frontend pages and WordPress websites for client projects, focusing on responsive layouts and cross-browser compatibility.', badges: ['HTML/CSS/JS', 'WordPress', 'jQuery'] },
            { date: 'Feb 2017 – Aug 2017 · 7 mos', role: 'Web Designer', comp: 'Digitech Software Solutions Pvt Ltd · Panchkula, Haryana (Full-time)', desc: 'Designed and built website layouts using HTML, CSS and Photoshop, translating client requirements into web-ready designs.', badges: ['HTML/CSS', 'Photoshop', 'Web Design'] },
            { date: 'Nov 2015 – Jan 2017 · 1 yr 3 mos', role: 'Web Designer', comp: 'Kindlebit Solutions Pvt. Ltd. · Chandigarh IT Park (Full-time)', desc: 'Started career designing and coding static websites with HTML, CSS and Photoshop, building a strong foundation in web design.', badges: ['HTML/CSS', 'Photoshop', 'Web Design'] },
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
            { icon: '🎓', deg: 'BCA', school: 'Himachal Pradesh University (HPU), Shimla', year: '2015', gpa: '66%', desc: 'Bachelor of Computer Applications, covering programming fundamentals, web technologies and software development basics.' },
            { icon: '🎨', deg: 'Web Design Diploma', school: 'Morph Academy, Chandigarh', year: '6 Months', gpa: 'Certified', desc: 'Hands-on training in web design fundamentals, HTML/CSS and graphic design tools like Photoshop.' },
            { icon: '💻', deg: 'Frontend Development Certification', school: 'Coding Ninjas', year: '6 Months', gpa: 'Certified', desc: 'Focused training in frontend development covering JavaScript, React.js and modern UI development practices.' },
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
