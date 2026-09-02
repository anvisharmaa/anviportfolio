/* ============================================
   Portfolio — script.js
   ============================================ */

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Footer year ---------- */
document.querySelector("[data-year]").textContent = new Date().getFullYear();

/* ---------- Loader ---------- */
(function loader() {
  const loader = document.querySelector("[data-loader]");
  const count = document.querySelector("[data-loader-count]");
  if (!loader) return;

  if (prefersReduced) {
    loader.classList.add("is-done");
    startHero();
    return;
  }

  let n = 0;
  const tick = setInterval(() => {
    n += Math.floor(Math.random() * 12) + 4;
    if (n >= 100) { n = 100; clearInterval(tick); done(); }
    count.textContent = n;
  }, 90);

  function done() {
    setTimeout(() => {
      loader.classList.add("is-done");
      startHero();
    }, 350);
  }
})();

/* ---------- Hero intro (staggered line reveal) ---------- */
function startHero() {
  const lines = document.querySelectorAll(".hero__title .line");
  lines.forEach((line, i) => {
    setTimeout(() => line.classList.add("is-in"), 150 * i);
  });
  // Reveal the rest of the hero content
  document.querySelectorAll(".hero [data-reveal]").forEach((el, i) => {
    setTimeout(() => el.classList.add("is-in"), 300 + 100 * i);
  });
}

/* ---------- Split text for line reveals ---------- */
document.querySelectorAll("[data-reveal-lines]").forEach((el) => {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words
    .map((w) => `<span class="rl-word"><span>${w}</span></span>`)
    .join(" ");
});

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        // Trigger counters when they appear
        if (entry.target.hasAttribute("data-count")) countUp(entry.target);
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
);

// Observe everything except hero reveals (hero is handled by startHero)
const hero = document.querySelector(".hero");
document
  .querySelectorAll("[data-reveal], [data-reveal-lines], [data-count]")
  .forEach((el) => {
    if (hero && hero.contains(el)) return; // hero handled by startHero
    io.observe(el);
  });

/* ---------- Number count-up ---------- */
function countUp(el) {
  const target = parseInt(el.getAttribute("data-count"), 10);
  if (prefersReduced) { el.textContent = target; return; }
  const dur = 1400;
  const start = performance.now();
  function frame(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased);
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---------- Custom cursor ---------- */
(function cursor() {
  const ring = document.querySelector("[data-cursor]");
  const dot = document.querySelector("[data-cursor-dot]");
  if (!ring || window.matchMedia("(pointer: coarse)").matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  function render() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  render();

  document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
  });
})();

/* ---------- Magnetic buttons ---------- */
if (!prefersReduced && !window.matchMedia("(pointer: coarse)").matches) {
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const strength = 0.35;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });
}

/* ---------- Hero parallax background ---------- */
if (!prefersReduced) {
  const bg = document.querySelector("[data-parallax]");
  if (bg) {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      bg.style.transform = `translateY(${y * 0.3}px)`;
    }, { passive: true });
  }
}

/* ---------- Mobile nav ---------- */
(function nav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!toggle) return;
  toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });
})();

/* ---------- LEGO car scroll progress ---------- */
(function legoCar() {
  const track = document.querySelector(".lego-track");
  const car = document.querySelector("[data-lego-car]");
  const wheels = document.querySelectorAll("[data-lego-wheel]");
  if (!car || !track || prefersReduced) return;

  const CAR_WIDTH = 66; // keep in sync with .lego-car width in CSS

  let ticking = false;

  function update() {
    ticking = false;

    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop || document.body.scrollTop || 0;
    const scrollable = (doc.scrollHeight || document.body.scrollHeight) - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(Math.max(scrollTop / scrollable, 0), 1) : 0;

    // Distance the car can travel across the track's content area.
    const style = getComputedStyle(track);
    const padL = parseFloat(style.paddingLeft) || 0;
    const padR = parseFloat(style.paddingRight) || 0;
    const trackWidth = track.clientWidth || window.innerWidth;
    const distance = Math.max(0, trackWidth - padL - padR - CAR_WIDTH);

    const x = progress * distance;
    car.style.transform = `translateX(${x}px)`;

    // Spin wheels proportional to distance travelled (circumference ~ 2*pi*r, r=8).
    const rotation = (x / (2 * Math.PI * 8)) * 360;
    wheels.forEach((w) => (w.style.transform = `rotate(${rotation}deg)`));
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);
  window.addEventListener("load", update);
  update(); // set initial position
})();
