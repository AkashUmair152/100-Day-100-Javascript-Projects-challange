let rect = document.querySelector('#center');

rect.addEventListener('mousemove', function (dets) {
    let reactLocation = rect.getBoundingClientRect();
    let insiderect = dets.clientX - reactLocation.left;

    if (insiderect < reactLocation.width / 2) {
        let redcolor = gsap.utils.mapRange(reactLocation.width / 2, 0, 255, 0, insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            duration: 0.5
        });
    } else {
        let bluecolor = gsap.utils.mapRange(reactLocation.width / 2, reactLocation.width, 0, 255, insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            duration: 0.5
        });
    }
});

rect.addEventListener('mouseleave', function () {
    // rect.style.backgroundColor = 'white';
    gsap.to(rect, {
        backgroundColor: 'white',
        duration: 0.5
    });
});
