/* =========================
   TYPEWRITER EFFECT
   ========================= */

const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer"
];

let roleIndex = 0;
let charIndex = 0;
const typeSpeed = 100;
const eraseSpeed = 60;
const delay = 1500;

const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (!typewriter) return;

  if (charIndex < roles[roleIndex].length) {
    typewriter.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typeSpeed);
  } else {
    setTimeout(eraseEffect, delay);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typewriter.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, eraseSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, typeSpeed);
  }
}

/* =========================
   DARK / LIGHT MODE TOGGLE
   ========================= */

const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });
}

/* =========================
   START AFTER PAGE LOAD
   ========================= */

window.onload = () => {
  typeEffect();
};


(function () {
  emailjs.init("6ZCv82bSNZt933ch3");
})();

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ltb8jv",
        "template_rx2y8oe",
        this
      )
      .then(
        function () {
          alert("Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("Message failed to send!");
          console.log(error);
        }
      );
  });
}
