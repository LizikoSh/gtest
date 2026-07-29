const catalogMenu = document.querySelector("#catalogMenu");
const catalogToggle = document.querySelector("#catalogToggle");
const mobileMenu = document.querySelector("#mobileMenu");
const searchInput = document.querySelector("#searchInput");
const cards = [...document.querySelectorAll(".product-card")];
const emptySearch = document.querySelector("#emptySearch");
const tabs = [...document.querySelectorAll(".tabs button")];

let activeGroup = "hits";
let cart = 0;
let wishlist = 0;
let compare = 0;

function toggleMenu() {
  const open = catalogMenu.hidden;
  catalogMenu.hidden = !open;
  catalogToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.textContent = open ? "×" : "☰";
}

catalogToggle.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("click", toggleMenu);
catalogMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", toggleMenu));

function filterProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("uk");
  let visible = 0;
  cards.forEach((card) => {
    const matchesSearch = card.dataset.name.toLocaleLowerCase("uk").includes(query);
    const matchesTab = card.dataset.groups.split(" ").includes(activeGroup);
    card.hidden = !(matchesSearch && matchesTab);
    if (!card.hidden) visible += 1;
  });
  emptySearch.hidden = visible !== 0;
}

searchInput.addEventListener("input", filterProducts);
tabs.forEach((tab) => tab.addEventListener("click", () => {
  tabs.forEach((item) => item.classList.remove("active"));
  tab.classList.add("active");
  activeGroup = tab.dataset.tab;
  filterProducts();
}));

function updateCounter(type, value) {
  const count = document.querySelector(`#${type}Count`);
  count.textContent = value;
  count.hidden = value === 0;
}

document.querySelectorAll(".buy").forEach((button) => button.addEventListener("click", () => {
  cart += 1;
  updateCounter("cart", cart);
  document.querySelector("#cartStatus").textContent = `${cart} ${cart === 1 ? "товар" : "товари"}`;
  button.textContent = "Додано";
  setTimeout(() => { button.textContent = "Купити"; }, 900);
}));

document.querySelectorAll(".wish").forEach((button) => button.addEventListener("click", () => {
  button.classList.toggle("active");
  wishlist += button.classList.contains("active") ? 1 : -1;
  updateCounter("wishlist", wishlist);
}));

document.querySelectorAll(".compare").forEach((button) => button.addEventListener("click", () => {
  button.classList.toggle("active");
  compare += button.classList.contains("active") ? 1 : -1;
  updateCounter("compare", compare);
}));
