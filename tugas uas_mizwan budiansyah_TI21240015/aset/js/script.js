/* ======================================================
   Wisata Daerahku — Interaksi Halus & Modern
   File: assets/js/script.js
   ====================================================== */

// ---------- 1. NAVBAR: Ubah background saat scroll ----------
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ---------- 2. ANIMASI TEKS BANNER ----------
const bannerText = document.querySelector(".banner-text");
if (bannerText) {
  let text = bannerText.textContent.trim();
  bannerText.textContent = "";
  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${i * 0.05}s`;
    bannerText.appendChild(span);
  });
}

// ---------- 3. EFEK HOVER GLOW PADA CARD ----------
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
  card.addEventListener("mouseleave", () => {
    card.style.removeProperty("--x");
    card.style.removeProperty("--y");
  });
});

// ---------- 4. SCROLL TO TOP BUTTON ----------
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
