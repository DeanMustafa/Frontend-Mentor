const btnConfirm = document.getElementById("submit");
const btnProceed = document.getElementById("checked");
const btnContinue = document.getElementById("done");

// CARDHOLDER NAME
let inputUserName = document.getElementById("incardName");
let userName = document.getElementById("inp-user-name");
let alertName = document.getElementById("alert-name");
// CARD NUMBER
let inputCardNumber = document.getElementById("cardNumber");
let userCardNumber = document.getElementById("inp-user-card-number");
let alertCardNum = document.getElementById("alert-cardNum");
// EXP. DATE
let inputMonth = document.getElementById("month");
let inputYear = document.getElementById("year");
let userExpDate = document.getElementById("inp-user-expdate");
let alertExpDate = document.getElementById("alert-exp");
// CVC
let inputCVC = document.getElementById("cvc");
let userCVC = document.getElementById("inp-user-cvc");

btnConfirm.addEventListener("click", () => {
  // GET VALUES
  let getUserName = inputUserName.value;
  let getCardNumber = inputCardNumber.value;
  let getMonth = inputMonth.value;
  let getYear = inputYear.value;
  let getCVC = inputCVC.value;

  if (getUserName === "") {
    inputUserName.style.borderColor = "red";
    alertName.style.display = "unset";
  } else if (getCardNumber == 0) {
    // CARD NUMBER
    inputCardNumber.style.borderColor = "red";
    alertCardNum.style.display = "unset";
  } else if (getMonth == 0 || getYear == 0) {
    // EXP. DATE
    inputMonth.style.borderColor = "red";
    inputYear.style.borderColor = "red";
    alertExpDate.style.display = "unset";
  } else if (getCVC == 0) {
    // CVC
    inputCVC.style.borderColor = "red";
    alertCVC.style.display = "unset";
  } else {
    // CARDHOLDER NAME
    inputUserName.style.borderColor = "initial";
    alertName.style.display = "none";
    userName.innerHTML = getUserName;

    // CARD NUMBER
    inputCardNumber.style.borderColor = "initial";
    alertCardNum.style.display = "none";
    userCardNumber.innerHTML = getCardNumber;

    // EXP. DATE
    inputMonth.style.borderColor = "initial";
    inputYear.style.borderColor = "initial";
    alertExpDate.style.display = "none";
    userExpDate.innerHTML = getMonth + "/" + getYear;

    // CVC
    inputCVC.style.borderColor = "initial";
    userCVC.innerHTML = getCVC;

    // PROCEED
    let confirmBtn = document.getElementById("submit");
    let proceedBtn = document.getElementById("checked");
    let proceedText = document.getElementById("checked-text");
    proceedBtn.classList.remove("hide");
    proceedText.classList.remove("hide");
    confirmBtn.classList.add("hide");
  }
});

btnProceed.addEventListener("click", () => {
  let proceedBtn = document.getElementById("checked");
  let firstPage = document.getElementById("first-page");
  let firstPageBG = document.getElementById("first-page-bg");
  let secondPage = document.getElementById("second-page");
  proceedBtn.style.display = "none";
  firstPage.style.display = "none";
  firstPageBG.style.minHeight = "250px";
  secondPage.style.display = "flex";
});

btnContinue.addEventListener("click", () => {
  location.reload();
});
