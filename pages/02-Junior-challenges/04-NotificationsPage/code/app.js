const markAllAsRead = document.getElementById("markAsRead");
const removeNotify = document.getElementById("notification-numbers");

markAllAsRead.addEventListener("click", () => {
  removeNotify.style.display = "none";
  removeDots();
  removeBackground();
});

function removeDots() {
  let dots = document.querySelectorAll("#redDots");
  let index = 0,
    length = dots.length;
  for (; index < length; index++) {
    dots[0].style.display = "none";
    dots[1].style.display = "none";
    dots[2].style.display = "none";
  }
}

function removeBackground() {
  let backs = document.querySelectorAll(".user");
  for (let i = 0; i < backs.length; i++) {
    backs[0].classList.add("user-no-back");
    backs[1].classList.add("user-no-back");
    backs[2].classList.add("user-no-back");
  }
  console.log("working");
}
