document.addEventListener("DOMContentLoaded", () => {

  const correctPassword = "0414"; // CHANGE THIS if needed

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const response = document.getElementById("response");
  const music = document.getElementById("bgMusic");

  const unlockBtn = document.getElementById("unlockBtn");
  const passwordInput = document.getElementById("passwordInput");
  const passwordScreen = document.getElementById("passwordScreen");
  const mainContent = document.getElementById("mainContent");
  const passwordError = document.getElementById("passwordError");

  let photoInterval;

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

  function startFloatingPhotos() {
    if (photoInterval) return;
    photoInterval = setInterval(createFloatingPhoto, 2500);
  }

  // Typing effect
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

  // Fireworks
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

  // Floating photos
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

});









