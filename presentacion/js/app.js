/* Inicialización de Reveal.js + cronómetro de 3 min (tecla T) + control de animaciones (tecla P) */
Reveal.initialize({
  width: 1920,
  height: 1080,
  margin: 0.02,
  minScale: 0.2,
  maxScale: 2.0,
  hash: true,
  center: false,
  controls: true,
  progress: true,
  slideNumber: 'c/t',
  transition: 'convex',
  transitionSpeed: 'default',
  backgroundTransition: 'zoom',
  plugins: [RevealNotes, RevealHighlight, RevealZoom]
});

// Reinicia las animaciones CSS de cascada al entrar en cada diapositiva
Reveal.on('slidechanged', event => {
  const slide = event.currentSlide;
  if (!slide || document.body.classList.contains('motion-paused')) return;
  slide.querySelectorAll('.s-head .kicker, .s-head h2, .pains > li, .big-stat, .versus > *, .layers > *, .timeline > li, .chips > li, .subjects > .subj, .example > *, .kpis > .kpi, .lessons > article, .roadmap > li, .demo > *, .kpi-meter').forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
});

// Cronómetro de 3 minutos para el pitch (tecla T inicia/pausa, R reinicia)
const box = document.getElementById('pitchTimer');
const timeEl = document.getElementById('ptTime');
const barEl = document.getElementById('ptBar');
const TOTAL = 180;
let remaining = TOTAL;
let timerId = null;

function renderTimer() {
  const m = Math.floor(Math.abs(remaining) / 60);
  const s = Math.abs(remaining) % 60;
  timeEl.textContent = (remaining < 0 ? '-' : '') + m + ':' + String(s).padStart(2, '0');
  barEl.style.width = Math.max(0, (remaining / TOTAL) * 100) + '%';
  box.classList.toggle('warn', remaining <= 30 && remaining > 0);
  box.classList.toggle('over', remaining <= 0);
}

function toggleTimer() {
  box.hidden = false;
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    return;
  }
  timerId = setInterval(() => {
    remaining -= 1;
    renderTimer();
  }, 1000);
}

// Botón accesible para pausar/reanudar animaciones (tecla P)
const motionBtn = document.getElementById('motionBtn');
let motionPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function applyMotionState() {
  document.body.classList.toggle('motion-paused', motionPaused);
  if (motionBtn) {
    motionBtn.textContent = motionPaused ? '▶' : '⏸';
    motionBtn.setAttribute('aria-pressed', String(motionPaused));
  }
}
applyMotionState();

function toggleMotion() {
  motionPaused = !motionPaused;
  applyMotionState();
}

motionBtn?.addEventListener('click', toggleMotion);

document.addEventListener('keydown', e => {
  if (e.key === 't' || e.key === 'T') toggleTimer();
  if ((e.key === 'r' || e.key === 'R') && !box.hidden) {
    remaining = TOTAL;
    renderTimer();
  }
  if (e.key === 'p' || e.key === 'P') toggleMotion();
});
