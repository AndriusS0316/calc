// calc uzduotis

let skaicius = 2;

const input = document.querySelector(".form1")
const changeDOM = document.querySelector(".change");
const secondDOM = document.querySelector(".second");
const ats = document.querySelector(".number");
const second = document.querySelector(".second");
// const more = document.querySelector(".form8");
const more = document.querySelector(".form8");



function changeClick() {
    skaicius = skaicius + 1;
    if (skaicius % 2 === 0) {
        console.log('vienas');
        second.innerText = 'paviršiaus plotas';
        // input.value = '';
        ats.innerText = 'Ats.:';
    } else {
        console.log('du');
        second.innerText = 'tūris';
        // input.value = '';
        ats.innerText = 'Ats.:';
    }
    
}

function secondClick() {
    if (skaicius % 2 === 0 && !(input.value <= 0)) {
        console.log('vienas');
        second.innerText = 'paviršiaus plotas';
        ats.innerText = "Paviršiaus plotas: " + (4 * 3.14) * (parseInt(input.value) * parseInt(input.value));
    } else if (skaicius % 2 !== 0 && !(input.value <= 0)) {
        console.log('du');
        second.innerText = 'tūris';
        ats.innerText = "Tūris: " + ((4 * 3.14 * (parseInt(input.value) * parseInt(input.value) * parseInt(input.value))) / 3);
    } else if (input.value === '') {
        alert("Privalu nurodyti sferos spindulį");
    } else if ((input.value <= 0)) {
        alert("Sferos spindulys negali būti nei nulis, nei neigiamas skaičius");
    }
}

function moreClick() {
    alert("More coming soon...");
    console.log("More coming soon...");
}


changeDOM.addEventListener('click', changeClick);
secondDOM.addEventListener('click', secondClick);
more.addEventListener('click', moreClick);
