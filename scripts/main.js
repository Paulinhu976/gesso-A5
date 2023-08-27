const ul = document.querySelector("nav .ul");
const bannerText = document.querySelector(".banner-text");

function checkWindowSize() {
  const elementsToHide = document.querySelectorAll(
    ".hidden, .hidden-1, .hidden-2"
  );
  const screenWidth = window.innerWidth;

  elementsToHide.forEach((element) => {
    if (screenWidth <= 830) {
      element.classList.remove("hidden", "hidden-1", "hidden-2");
    } else {
      element.classList.add("hidden");
    }
  });
}

// Verificar o tamanho da tela sempre que a janela for redimensionada
window.addEventListener("resize", checkWindowSize);

// Executar a verificação inicial
checkWindowSize();

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden, .hidden-1, .hidden-2");

elements.forEach((element) => myObserver.observe(element));

function openMenu() {
  ul.classList.add("open");
  //bannerText.classList.remove("show");
}

function closeMenu() {
  ul.classList.remove("open");

  // bannerText.classList.add("show");
}
