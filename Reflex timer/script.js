const shape = document.getElementById("shape");
let time = document.getElementById("timeTaken");
let bestTime = document.getElementById("best");
let start = new Date().getTime();

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeShapeAppear() {
  shape.style.top = Math.random() * 400 + "px";
  shape.style.bottom = Math.random() * 400 + "px";
  shape.style.left = Math.random() * 400 + "px";
  shape.style.right = Math.random() * 400 + "px";

  shape.style.width = Math.random() * 100 + 20 + "px";
  shape.style.height = Math.random() * 100 + 20 + "px";

  shape.style.background = getRandomColor();

  if (Math.random() > 0.5) {
    shape.style.borderRadius = "50%";
  } else {
    shape.style.borderRadius = 0;
  }

  shape.style.display = "block";

  start = new Date().getTime();
}
function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() + 2000);
}

appearAfterDelay();

shape.onclick = function () {
  shape.style.display = "none";

  let end = new Date().getTime();

  let timeTaken = (end - start) / 1000;

  time.innerHTML = timeTaken;

  if (bestTime.textContent === "") {
    bestTime.textContent = timeTaken;
  } else if (bestTime.textContent > timeTaken) {
    bestTime.textContent = timeTaken;
  }

  appearAfterDelay();
};
