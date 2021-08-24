// calc uzduotis

let skaicius = 3;

const input = document.querySelector(".form1")
const changeDOM = document.querySelector(".change");
const secondDOM = document.querySelector(".second");
const ats = document.querySelector(".number");
const second = document.querySelector(".second");

function changeClick() {
    if (skaicius % 2 === 0) {
        console.log('vienas');
        second.innerText = 'paviršiaus plotas';
    } else {
        console.log('du');
        second.innerText = 'tūris';
    }
    skaicius = skaicius + 1;
}

function secondCick() {
    if (skaicius % 2 === 0) {
        console.log('vienas');
    } else if (skaicius % 2 !== 0) {
        console.log('du');
        second.innerText = 'tūris';
    }

}



changeDOM.addEventListener('click', changeClick);
secondDOM.addEventListener('click', secondCick);

