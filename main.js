// calc uzduotis

let skaicius = 2;

const input = document.querySelector(".form1")
const changeDOM = document.querySelector(".change");
const secondDOM = document.querySelector(".second");
const ats = document.querySelector(".number");
const second = document.querySelector(".second");



function changeClick() {
    skaicius = skaicius + 1;
    if (skaicius % 2 === 0) {
        console.log('vienas');
        second.innerText = 'paviršiaus plotas';
        input.value = '';
        ats.innerText = 'Ats.:';
    } else {
        console.log('du');
        second.innerText = 'tūris';
        input.value = '';
        ats.innerText = 'Ats.:';
    }
    
}

function secondCick() {
    if (skaicius % 2 === 0) {
        console.log('vienas');
        second.innerText = 'paviršiaus plotas';
        ats.innerText = (4 * 3.14) * (parseInt(input.value) * parseInt(input.value));
    } else if (skaicius % 2 !== 0) {
        console.log('du');
        second.innerText = 'tūris';
        ats.innerText = ((4 * 3.14 * (parseInt(input.value) * parseInt(input.value) * parseInt(input.value))) / 3);
    }

}



changeDOM.addEventListener('click', changeClick);
secondDOM.addEventListener('click', secondCick);

