const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");
const navBar = document.getElementById("nav");
const backCover = document.getElementById("cover");

openNav.addEventListener("click", () => {
  openNav.style.display = "none";
  backCover.style.display = "unset";
  closeNav.style.display = "unset";
  navBar.style.display = "flex";
});

closeNav.addEventListener("click", () => {
  openNav.style.display = "unset";
  backCover.style.display = "none";
  closeNav.style.display = "none";
  navBar.style.display = "none";
});

backCover.addEventListener("click", () => {
  openNav.style.display = "unset";
  backCover.style.display = "none";
  closeNav.style.display = "none";
  navBar.style.display = "none";
});
