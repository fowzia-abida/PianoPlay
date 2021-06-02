window.addEventListener("load", () => {
  const musics = document.querySelectorAll(".music");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#87e78f",
    "#e67350",
    "#50c8e6",
    "#def07a",
    "#b648e9",
    "#ee3fa5",
  ];

  //sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      musics[index].currentTime = 0;
      musics[index].play();
      createBubbles(index);
    });
  });
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
