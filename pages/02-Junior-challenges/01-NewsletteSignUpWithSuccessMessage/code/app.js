const btn = document.getElementById("btn");
const btnDismiss = document.getElementById("btn-back");
const defaultPage = document.getElementById("default-page");
const submitPage = document.getElementById("submit-page");

const output = document.getElementById("output");
const input = document.getElementById("input");
const errorText = document.getElementById("error");

let emailAddress = input.value;

input.addEventListener("input", () => {
  emailAddress = input.value;
});

btn.addEventListener("click", () => {
  if (!emailAddress.includes("@") || !emailAddress.includes(".")) {
    errorText.style.display = "unset";
    input.style.backgroundColor = "#ffcccc";
    input.style.borderColor = "#cc3333";
  } else {
    defaultPage.style.display = "none";
    submitPage.style.display = "flex";

    output.innerHTML = `${emailAddress}`;
  }
});

btnDismiss.addEventListener("click", () => {
  defaultPage.style.display = "grid";
  submitPage.style.display = "none";

  input.value = "";
  errorText.style.display = "none";
  input.style.backgroundColor = "unset";
  input.style.borderColor = "hsl(231, 7%, 60%)";
});
