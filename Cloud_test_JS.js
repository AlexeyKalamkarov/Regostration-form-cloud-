const form = document.getElementById('.form');
const step1 = document.getElementById('page-1');
const step2 = document.getElementById('page-2');
const step3 = document.getElementById('page-3');
const step4 = document.getElementById('page-4');
let resultURL = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend';
let currentStep = 1;
function nextStep() {
    if (currentStep === 1) {
        if (step1.checkValidity()) {
            step1.style.display = 'none';
            step2.style.display = 'block';
            currentStep++;
        } else {
            step1.reportValidity();
        }
    } else if (currentStep === 2) {
        if (step2.checkValidity()) {
            step2.style.display = 'none';
            step3.style.display = 'block';
            currentStep++;
        } else {
            step2.reportValidity();
        }
    }   else if (currentStep === 3) {
            if (step3.checkValidity()) {
                step3.style.display = 'none';
                step4.style.display = 'block';
                currentStep++;
        }   else {
            step3.reportValidity();
        }
    }
}

function prevStep() {
    if (currentStep === 2) {
        step2.style.display = 'none';
        step1.style.display = 'block';
        currentStep--;
    } else if (currentStep === 3) {
        step3.style.display = 'none';
        step2.style.display = 'block';
        currentStep--;
    } else if (currentStep === 4) {
        step4.style.display = 'none';
        step3.style.display = 'block';
        currentStep--;
    }
}

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '/register');
//     xhr.send(formData);
// });
function addInput() {
    const addInputBtn = document.getElementById('add-button');
    const inputsContainer = document.getElementById('container-input');
    let inputCount = 1;
    addInputBtn.addEventListener('click', () => {
        inputCount++;
        const newDiv = document.createElement('div');
        newDiv.classList.add("advantages-div")
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'input_p2';
        const newBtnDel = document.createElement("button");
        newBtnDel.classList.add("icon-btn");
        newBtnDel.innerHTML = `
                <svg width="23" height="22" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.453 16.6522L4.55826 8.15225C4.52719 7.85703
                                4.75867 7.5999 5.05552 7.5999H14.9447C15.2416 7.5999
                                15.4731 7.85703 15.442 8.15225L14.5472 16.6522C14.5205
                                16.9067 14.3059 17.0999 14.05 17.0999H5.95025C5.69437
                                17.0999 5.47979 16.9067 5.453 16.6522Z" fill="#CCCCCC"/>
                                                            <path d="M17.0001 5.6999H3.00012C2.72398 5.6999 2.50012
                                5.47605 2.50012 5.1999V4.2999C2.50012 4.02376 2.72398
                                3.7999 3.00012 3.7999H5.35511C5.44983 3.7999 5.54261
                                3.77299 5.62263 3.72231L8.37761 1.97749C8.45764 1.92681
                                8.55041 1.8999 8.64514 1.8999H11.3551C11.4498 1.8999
                                11.5426 1.92681 11.6226 1.97749L14.3776 3.72231C14.4576
                                3.77299 14.5504 3.7999 14.6451 3.7999H17.0001C17.2763
                                3.7999 17.5001 4.02376 17.5001 4.2999V5.1999C17.5001
                                5.47604 17.2763 5.6999 17.0001 5.6999Z" fill="#CCCCCC"/>
                        </svg>
                               `
        inputsContainer.appendChild(newDiv);
        newDiv.appendChild(newInput);
        newDiv.appendChild(newBtnDel);
            newBtnDel.onclick = function deleteBut() {
                inputsContainer.removeChild(newDiv);
            }

    });

}

addInput();
document.addEventListener('DOMContentLoaded', () => {
    const NumberInput = document.getElementById('number')
    const MaskOptions = {
        mask: '+{7}(000)000-00-00'
    }
    IMask(NumberInput, MaskOptions)
});

const textarea = document.querySelector('textarea');
const counter = document.querySelector('.current');
const maxlength = 200;
textarea.addEventListener('input', onInput)
function onInput(event) {
    event.target.value = event.target.value.substr(0, maxlength); // обрезаем текст до 360 символов
    const length = event.target.value.length;
    counter.textContent = length;
}
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', resultURL);
    xhr.send(formData);
});

