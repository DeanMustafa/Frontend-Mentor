const rates = document.querySelectorAll(".rate");
let num = "";

const rateFn = () => {
  rates.forEach((rate) => {
    rate.addEventListener("click", (e) => {
      const clickedNum = e.target;

      num = clickedNum.innerHTML;
      console.log(num);

      clickedNum.classList.add("clicked");

      const nonClickedNum = Array.from(rates).filter(
        (rate) => rate !== e.target
      );
      nonClickedNum.map((num) => {
        if (num.classList.contains("clicked")) {
          num.classList.remove("clicked");
        }
      });
    });
  });
};

rateFn();

const btn = document.querySelector(".submit");
btn.addEventListener("click", () => {
  console.log(num);
  document.getElementById("result").innerHTML = num;
});
