let box = document.querySelector("#box");

box.addEventListener("mousemove", function (dets) {
  let boxLocation = box.getBoundingClientRect();
  let insideBox = dets.clientX - boxLocation.left;

  // Calculate percentage of mouse's position across the box width
  let percentage = (insideBox / boxLocation.width) * 100;

  // Map the percentage to a color intensity for red (from 0 to 255)
  let redIntensity = Math.floor((percentage / 100) * 255);

  // Set the background color with the calculated red intensity
  box.style.backgroundColor = `rgb(${redIntensity}, 0, 0)`;
});

// Optionally, reset color when the mouse leaves the box
box.addEventListener("mouseleave", function () {
  box.style.backgroundColor = "transparent";
});
