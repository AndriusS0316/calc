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
    } else {
        console.log('du');
        second.innerText = 'tūris';
    }
    
}

function secondCick() {
    if (skaicius % 2 === 0) {
        console.log('vienas');
        second.innerText = 'paviršiaus plotas';
    } else if (skaicius % 2 !== 0) {
        console.log('du');
        second.innerText = 'tūris';
        document.getElementsByClassName(".turis");
    }

}



changeDOM.addEventListener('click', changeClick);
secondDOM.addEventListener('click', secondCick);

