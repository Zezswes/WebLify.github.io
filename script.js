// Obsluga menu mobilnego
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Wczytywanie grafik z assets/1-4.
// Obslugiwane rozszerzenia: png, jpg, jpeg, webp, avif.
document.querySelectorAll("[data-project-image]").forEach(img => {
  const number = img.dataset.projectImage;
  const extensions = ["png", "jpg", "jpeg", "webp", "avif"];
  let index = 0;

  const tryNext = () => {
    if (index >= extensions.length) return;
    img.src = `assets/${number}.${extensions[index++]}`;
  };

  img.addEventListener("load", () => img.classList.add("loaded"));
  img.addEventListener("error", tryNext);
  tryNext();
});

document.getElementById("year").textContent = new Date().getFullYear();
