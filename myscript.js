const conatiner = document.querySelector(".container-child-one");
const marker = document.querySelector(".marker");
const text = document.querySelector("#text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Breathe In!";
  text.style.color = "green";
  // marker.style.backgroundColor = "green";
  // marker.style.backgroundColor = "#55b7a4";
  conatiner.className = "container-child-one grow";

  setTimeout(() => {
    text.innerHTML = "Hold!";
    text.style.color = "orange";
    // marker.style.backgroundColor = "orange";
    // marker.style.backgroundColor = "white";

    setTimeout(() => {
      text.innerHTML = "Breathe Out!";
      text.style.color = "red";
      // marker.style.backgroundColor = "red";
      // marker.style.backgroundColor = "#2a5b52";
      conatiner.className = "container-child-one shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);
