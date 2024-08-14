function burgMenuOnOff() {
  const headerMenuBG = document.querySelector(".header__cont-nav");
  const headerMenu = document.querySelector(".header__cont-nav ul");
  headerMenuBG.classList.toggle("active");
  headerMenu.classList.toggle("active");
}
