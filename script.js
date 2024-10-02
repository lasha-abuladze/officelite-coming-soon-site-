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



freePlan.checked = true;



btn?.addEventListener(`click`, () => {
    window.open("./secondpage.html", "_blank");
})


dropDownDiv.addEventListener(`click`, () => {

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



submitBtn.addEventListener(`click`, (e) => {
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
