const correctPassword = "0414"; // CHANGE THIS

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const music = document.getElementById("bgMusic");

let photoInterval;

yesBtn.addEventListener("click", () => {
  const message = "YAYYY!! 💘 I love you so much, ADITYAAAAAA!!!";

  typeText(response, message);
  launchFireworks();
  startFloatingPhotos();

  if (music) {
    music.pause();
  }
});


noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = "24px";
    heart.style.animation = "fall 3s linear";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}
setInterval(createFloatingHeart, 600);

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = "💗";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
document.addEventListener("click", () => {
  if (music && music.paused) {
    music.volume = 0.5;
    music.play();
  }
});
function typeText(element, text) {
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 70);
}

// Fireworks effect
function launchFireworks() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  for (let i = 0; i < 80; i++) {
    const spark = document.createElement("div");
    spark.className = "firework";

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 300;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    spark.style.left = centerX + "px";
    spark.style.top = centerY + "px";

    spark.style.setProperty("--x", x + "px");
    spark.style.setProperty("--y", y + "px");

    spark.style.background =
      `hsl(${Math.random() * 360}, 100%, 60%)`;

    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 1000);
  }
}
// Floating photos from bottom of screen
const photoFiles = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpeg"
];



function createFloatingPhoto() {
  const img = document.createElement("img");
  img.src = photoFiles[Math.floor(Math.random() * photoFiles.length)];
  img.className = "floating-photo";

  img.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(img);

  setTimeout(() => img.remove(), 10000);
}
function startFloatingPhotos() {
  if (photoInterval) return; // prevents duplicates

  photoInterval = setInterval(createFloatingPhoto, 2500);
}
document.addEventListener("DOMContentLoaded", () => {

  const unlockBtn = document.getElementById("unlockBtn");
  const passwordInput = document.getElementById("passwordInput");
  const passwordScreen = document.getElementById("passwordScreen");
  const mainContent = document.getElementById("mainContent");
  const passwordError = document.getElementById("passwordError");

  function checkPassword() {
    if (passwordInput.value === correctPassword) {
      passwordScreen.style.display = "none";
      mainContent.style.display = "block";
    } else {
      passwordError.textContent = "❌ Wrong password… try again cutie 💕";
    }
  }

  unlockBtn.addEventListener("click", checkPassword);

  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  });

});







