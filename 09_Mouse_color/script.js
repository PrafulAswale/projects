const cursor = document.querySelector(".cursor");
let mousePosition;
var offset = [0, 0];
var div;
var isDown = false;
// an array of 10 colors in hex value
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array
cursor.addEventListener(
  "mousedown",
  function (e) {
    isDown = true;
    offset = [cursor.offsetLeft - e.clientX, cursor.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown) {
      mousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
      cursor.style.left = mousePosition.x + offset[0] + "px";
      cursor.style.top = mousePosition.y + offset[1] + "px";
      cursor.style.background = colors[Math.floor(Math.random() * 10)];
    }
  },
  true
);
