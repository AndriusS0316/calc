// calc kubo uzduotis

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
        ats.innerText = "Plotas: " + (6 * (parseInt(input.value) * parseInt(input.value)));
    } else if (skaicius % 2 !== 0 && !(input.value <= 0)) {
        console.log('du');
        second.innerText = 'tūris';
        ats.innerText = "Tūris: " + ((parseInt(input.value) * parseInt(input.value) * parseInt(input.value)));
    } else if (input.value === '') {
        alert("Privalu nurodyti kubo briaunos ilgį");
    } else if ((input.value <= 0)) {
        alert("Kubo briauna negali būti nei nulis, nei neigiamas skaičius");
    }
}




changeDOM.addEventListener('click', changeClick);
secondDOM.addEventListener('click', secondClick);

