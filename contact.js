gsap.registerPlugin(ScrollTrigger);

/* ================= BANNER TEXT ================= */
gsap.from(".overlay h1", {
  y: -40,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

/* ================= CONTACT SECTION ================= */
gsap.from(".contact-left", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  x: -60,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".contact-right", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  x: 60,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

/* ================= MAP SECTION ================= */

gsap.from(".map-info", {
  scrollTrigger: {
    trigger: ".map",
    start: "top 80%",
  },
  x: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.2
});
