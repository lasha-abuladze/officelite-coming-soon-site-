`use strict`;


const btn = document.querySelector(`.btn--get-started`);
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






btn?.addEventListener(`click`, () => {
    window.open("./secondpage.html", "_blank");
})

// freePlan?.checked = true;

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


setInterval(() => {
    const currentDate = new Date();
    const comingDate = new Date('2024-12-10');
    const diffInTime = comingDate - currentDate;

    const currsecond = String(Math.trunc(diffInTime / 1000) % 60).padStart(2,0);
    const currMin = String(Math.trunc(Math.trunc(diffInTime / 1000) / 60) % 60).padStart(2,0);

    console.log(currentDate.getHours())

    secLeft.textContent = currsecond;
    minLeft.textContent = currMin;
    hoursLeft.textContent = `${24 - (currentDate.getHours() + 1)}`
    daysLeft.textContent = `${Math.trunc(diffInTime / (1000 * 60 * 60 * 24)) - 1}`

}, 1000);