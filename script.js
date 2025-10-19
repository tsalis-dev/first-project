// Typing effect
const text = ["Tsalis Sholeh Al Akbar", "a Web Developer", "a Game Creator"];
let index = 0;
let char = 0;
const speed = 100;
const typingSpan = document.querySelector(".typing");

function type() {
  if (char < text[index].length) {
    typingSpan.textContent += text[index].charAt(char);
    char++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (char > 0) {
    typingSpan.textContent = text[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 300);
  }
}
document.addEventListener("DOMContentLoaded", type);

// ScrollReveal animation
ScrollReveal().reveal(".hero-text, .skills div, .card, .socials a", {
  interval: 100,
  distance: "40px",
  origin: "bottom",
  duration: 700,
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
