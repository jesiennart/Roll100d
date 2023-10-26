const btn4 = document.querySelector('.btn-4')
const btn6 = document.querySelector('.btn-6')
const btn8 = document.querySelector('.btn-8')
const btn10 = document.querySelector('.btn-10')
const btn12 = document.querySelector('.btn-12')
const btn20 = document.querySelector('.btn-20')
const btn100 = document.querySelector('.btn-100')
const popup = document.querySelector('.popup')
const returnBtn = document.querySelector('.btn-return')
const roll = document.querySelector('.btn-roll')
const result = document.querySelector('.result')
const mainBtn = document.querySelectorAll('.btn')

const showPop4 = (params) => {
    popup.style.visibility = 'visible';
    result.textContent = 'Good Luck :)';
    function k4() {
    let number = Math.floor(Math.random() * 4 + 1);
    result.textContent = number;
    }
    roll.addEventListener('click', k4)
}
const showPop6 = (params) => {
    popup.style.visibility = 'visible';
    result.textContent = 'Good Luck :)';
    function k6() {
    let number = Math.floor(Math.random() * 6 + 1);
    result.textContent = number;
}
    roll.addEventListener('click', k6)
}
const showPop8 = (params) => {
    popup.style.visibility = 'visible';
    result.textContent = 'Good Luck :)';
    function k8() {
    let number = Math.floor(Math.random() * 8 + 1);
    result.textContent = number; 
}
    roll.addEventListener('click', k8)
}
const showPop10 = (params) => {
    popup.style.visibility = 'visible';
    result.textContent = 'GoGood Luck :)';
    function k10() {
    let number = Math.floor(Math.random() * 10 + 1);
    result.textContent = number; 
}
    roll.addEventListener('click', k10)
}
const showPop12 = (params) => {
    popup.style.visibility = 'visible';
    result.textContent = 'Good Luck :)';
    function k12() {
    let number = Math.floor(Math.random() * 12 + 1);
    result.textContent = number; 
}
    roll.addEventListener('click', k12)
}
const showPop20 = (params) => {
    popup.style.visibility = 'visible';
    result.textContent = 'Good Luck :)';
    function k20() {
    let number = Math.floor(Math.random() * 20 + 1);
    result.textContent = number; 
}
    roll.addEventListener('click', k20)
}
const showPop100 = (params) => {
    popup.style.visibility = 'visible';
    result.textContent = 'Good Luck :)';
    function k100() {
    let number = Math.floor(Math.random() * 100 + 1);
    result.textContent = number; 
}
    roll.addEventListener('click', k100)
}

const hidPop = (params) => {
    popup.style.visibility = 'hidden';
    result.textContent = '';
}

btn4.addEventListener('click', showPop4)
btn6.addEventListener('click', showPop6)
btn8.addEventListener('click', showPop8)
btn10.addEventListener('click', showPop10)
btn12.addEventListener('click', showPop12)
btn20.addEventListener('click', showPop20)
btn100.addEventListener('click', showPop100)

returnBtn.addEventListener('click', hidPop)