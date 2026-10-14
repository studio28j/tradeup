/* =================================================================
   TRADEUP · main.js
   01. Menú   02. Slider hero   03. Dots casos
   04. Link activo en scroll   05. Formulario   06. Año footer
   ================================================================= */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 01. MENÚ ---------- */
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.getElementById('menu-panel');
  if (toggle && panel) {
    const setMenu = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      panel.hidden = !open;
    };
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      setMenu(panel.hidden);
    });
    panel.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('click', (e) => { if (!panel.hidden && !panel.contains(e.target)) setMenu(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) { setMenu(false); toggle.focus(); }
    });
  }

  /* ---------- 02. SLIDER HERO ---------- */
  const slider = document.querySelector('[data-slider]');
  if (slider) {
    const slides = [...slider.querySelectorAll('.hero__slide')];
    const current = document.querySelector('[data-slider-current]');
    const total = document.querySelector('[data-slider-total]');
    const next = document.querySelector('[data-slider-next]');
    const pad = (n) => String(n).padStart(2, '0');
    let index = 0;
    let timer;

    if (total) total.textContent = pad(slides.length);

    const go = (i) => {
      slides[index].classList.remove('is-active');
      index = (i + slides.length) % slides.length;
      slides[index].classList.add('is-active');
      if (current) current.textContent = pad(index + 1);
    };
    const play = () => {
      if (reduceMotion || slides.length < 2) return;
      clearInterval(timer);
      timer = setInterval(() => go(index + 1), 6000);
    };

    next?.addEventListener('click', () => { go(index + 1); play(); });
    // Pausa cuando la pestaña no está visible
    document.addEventListener('visibilitychange', () => (document.hidden ? clearInterval(timer) : play()));
    play();
  }

  /* ---------- 03. DOTS CASOS (sincronizados con el scroll del carrusel) ---------- */
  const track = document.querySelector('.cases__track');
  const dotsWrap = document.querySelector('[data-dots]');
  if (track && dotsWrap) {
    const items = [...track.querySelectorAll('.cases__list > li')];

    const pages = () => {
      const visible = Math.max(1, Math.round(track.clientWidth / (items[0]?.offsetWidth || 1)));
      return Math.max(1, items.length - visible + 1);
    };
    const build = () => {
      const n = pages();
      // En desktop sin scroll el diseño muestra 2 dots decorativos
      const count = n > 1 ? n : 2;
      dotsWrap.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const b = document.createElement('button');
        b.type = 'button';
        b.tabIndex = -1;
        b.addEventListener('click', () => {
          const target = items[Math.min(i, items.length - 1)];
          track.scrollTo({ left: target.offsetLeft - items[0].offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
        });
        dotsWrap.appendChild(b);
      }
      sync();
    };
    const sync = () => {
      const dots = [...dotsWrap.children];
      const max = track.scrollWidth - track.clientWidth;
      const ratio = max > 0 ? track.scrollLeft / max : 0;
      const active = Math.round(ratio * (dots.length - 1));
      dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
    };

    track.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(build, 150); });
    build();
  }

  /* ---------- 04. LINK ACTIVO EN SCROLL ---------- */
  const links = [...document.querySelectorAll('.nav__link')];
  const map = links
    .map((a) => {
      const id = a.getAttribute('href');
      const el = id && id.length > 1 ? document.querySelector(id) : document.querySelector('.hero');
      return el ? { a, el } : null;
    })
    .filter(Boolean);
  if ('IntersectionObserver' in window && map.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((l) => l.classList.remove('is-active'));
          map.find((m) => m.el === entry.target)?.a.classList.add('is-active');
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    map.forEach((m) => io.observe(m.el));
  }

  /* ---------- 05. FORMULARIO ---------- */
  const form = document.querySelector('.contact-form');
  if (form) {
    const status = form.querySelector('.form-status');
    const setStatus = (msg, type) => {
      status.textContent = msg;
      status.className = `form-status ${type ? `is-${type}` : ''}`;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      form.classList.add('was-validated');
      if (!form.checkValidity()) {
        setStatus('Revisa los campos marcados y acepta la política de datos.', 'error');
        form.querySelector(':invalid')?.focus();
        return;
      }

      // TODO: conectar al backend / CRM (HubSpot Forms, endpoint propio, etc.)
      // Mientras "action" sea "#", solo se muestra el mensaje de confirmación.
      const action = form.getAttribute('action');
      if (action && action !== '#') {
        try {
          const res = await fetch(action, { method: 'POST', body: new FormData(form) });
          if (!res.ok) throw new Error(res.statusText);
        } catch (err) {
          setStatus('No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.', 'error');
          return;
        }
      }
      form.reset();
      form.classList.remove('was-validated');
      setStatus('¡Gracias! Te contactaremos muy pronto.', 'ok');
    });
  }

  /* ---------- 06. AÑO FOOTER ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
