gsap.registerPlugin(ScrollTrigger);

[".card1", ".card2", ".card3", ".card4", ".card5", ".card6"].forEach(card => {
  gsap.to(card, {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      start: "top 15%",
      end: "bottom 15%",
      scrub: true,
      markers: true
    }
  });
});
