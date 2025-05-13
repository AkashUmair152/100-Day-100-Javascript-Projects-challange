let rect = document.querySelector('#card');

window.addEventListener("mousemove", (e) => {
    let valX = gsap.utils.mapRange(0, window.innerWidth, 250, window.innerWidth - 250, e.clientX);

    gsap.to("#card", {
        left: valX,
        ease: "power3.out", // Correct format
        duration: 0.5
    });
});
