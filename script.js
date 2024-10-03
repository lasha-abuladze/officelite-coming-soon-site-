`use strict`;


const btn = document.querySelectorAll(`.btn`);
const dropDownDiv = document.querySelector(`.dropdown-div`);
const dropdownPlans = document.querySelector(`.dropdown-plans`);
const freePlan = document.querySelector(`#free-plan`);
const yourPlan = document.querySelector(`.your-plan`);
const yourPack = document.querySelector(`.your-pack`);
const yourPackPrice = document.querySelector(`.your-pack--price`);
const arrowSVG = document.querySelector(`.arrow-svg`);
const submitBtn = document.querySelector(`.submit-btn`);
const inputDivs = document.querySelectorAll(`.inputs`);

const radioinpArr = document.querySelectorAll(`.radio-inp`);
const inputs = document.querySelectorAll(`.inp`);
const errorSvgArr = document.querySelectorAll(`.error-svg`);



//// timer elements

const daysLeft = document.querySelector(`.days--left`);
const hoursLeft = document.querySelector(`.hours--left`);
const minLeft = document.querySelector(`.min--left`);
const secLeft = document.querySelector(`.sec--left`);






btn.forEach(el => {
    el.addEventListener(`click`, () => {
        window.open("./secondpage.html", "_self");
    })
})


dropDownDiv?.addEventListener(`click`, () => {

    dropdownPlans?.classList.toggle(`display-none`);
    arrowSVG.classList.toggle(`rotate`);
    console.log(`hi`)

    radioinpArr.forEach(el => {

       el.addEventListener(`click`, () => {

        yourPack.textContent = el.querySelector(`.pack`).textContent;
        yourPackPrice.textContent = el.querySelector(`.pack-price`).textContent;

        dropdownPlans?.classList.toggle(`display-none`);
        arrowSVG.classList.toggle(`rotate`);    

       })

    })

})

submitBtn?.addEventListener(`click`, (e) => {
    e.preventDefault();

    inputs.forEach((el,i) => {
        if(el.value === ``) {
            errorSvgArr[i].classList.remove(`display-none`);
            inputDivs[i].classList.add(`error-border`);
        } else {
            errorSvgArr[i].classList.add(`display-none`);
            inputDivs[i].classList.remove(`error-border`);
        }
    })
})






///////

{
    let currentDate = new Date();
    let comingDate = new Date('2024-12-10');
    let diffInTime = comingDate - currentDate;

    let currsecond = String(Math.trunc(diffInTime / 1000) % 60).padStart(2,0);
    let currMin = String(Math.trunc(Math.trunc(diffInTime / 1000) / 60) % 60).padStart(2,0);

    secLeft.textContent = currsecond;
    minLeft.textContent = String(currMin).padStart(2,0);
    hoursLeft.textContent = String(24 - (currentDate.getHours() + 1)).padStart(2,0);
    daysLeft.textContent = `${String(Math.trunc(diffInTime / (1000 * 60 * 60 * 24)) - 1).padStart(2,0)}`

}

setInterval(() => {
    currentDate = new Date();
    comingDate = new Date('2024-12-10');
    diffInTime = comingDate - currentDate;

    currsecond = String(Math.trunc(diffInTime / 1000) % 60).padStart(2,0);
    currMin = String(Math.trunc(Math.trunc(diffInTime / 1000) / 60) % 60).padStart(2,0);

    secLeft.textContent = currsecond;
    minLeft.textContent = String(currMin).padStart(2,0);
    hoursLeft.textContent = String(24 - (currentDate.getHours() + 1)).padStart(2,0);
    daysLeft.textContent = `${String(Math.trunc(diffInTime / (1000 * 60 * 60 * 24)) - 1).padStart(2,0)}`

}, 1000);