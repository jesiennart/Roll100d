const btn4 = document.querySelector(".btn-4");
const btn6 = document.querySelector(".btn-6");
const btn8 = document.querySelector(".btn-8");
const btn10 = document.querySelector(".btn-10");
const btn12 = document.querySelector(".btn-12");
const btn20 = document.querySelector(".btn-20");
const btn100 = document.querySelector(".btn-100");
const popup = document.querySelector(".popup");
const returnBtn = document.querySelector(".btn-return");
const roll = document.querySelector(".btn-roll");
const result = document.querySelector(".result");
const mainBtn = document.querySelectorAll(".btn");
const con = document.querySelector(".container");

const showPop = () => {
  popup.style.visibility = "visible";
  result.textContent = "Good Luck";
  popup.classList.add("animation");
  con.classList.add("hide-con");
};

const showPop4 = () => {
  showPop();
  function k4() {
    let number = Math.floor(Math.random() * 4 + 1);
    result.textContent = number;
  }
  roll.addEventListener("click", k4);
};
const showPop6 = () => {
  showPop();
  function k6() {
    let number = Math.floor(Math.random() * 6 + 1);
    result.textContent = number;
  }
  roll.addEventListener("click", k6);
};
const showPop8 = () => {
  showPop();
  function k8() {
    let number = Math.floor(Math.random() * 8 + 1);
    result.textContent = number;
  }
  roll.addEventListener("click", k8);
};
const showPop10 = () => {
  showPop();
  function k10() {
    let number = Math.floor(Math.random() * 10 + 1);
    result.textContent = number;
  }
  roll.addEventListener("click", k10);
};
const showPop12 = () => {
  showPop();
  function k12() {
    let number = Math.floor(Math.random() * 12 + 1);
    result.textContent = number;
  }
  roll.addEventListener("click", k12);
};
const showPop20 = () => {
  showPop();
  function k20() {
    let number = Math.floor(Math.random() * 20 + 1);
    result.textContent = number;
  }
  roll.addEventListener("click", k20);
};
const showPop100 = () => {
  showPop();
  function k100() {
    let number = Math.floor(Math.random() * 100 + 1);
    result.textContent = number;
  }
  roll.addEventListener("click", k100);
};

const hidePop = () => {
  popup.style.visibility = "hidden";
  result.textContent = "";
  popup.classList.toggle("animation");
  con.classList.remove("hide-con");
};

btn4.addEventListener("click", showPop4);
btn6.addEventListener("click", showPop6);
btn8.addEventListener("click", showPop8);
btn10.addEventListener("click", showPop10);
btn12.addEventListener("click", showPop12);
btn20.addEventListener("click", showPop20);
btn100.addEventListener("click", showPop100);
returnBtn.addEventListener("click", hidePop);
