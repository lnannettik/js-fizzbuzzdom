
// CHECH
console.log(`JS OK`);


// ref
const boxes = document.querySelector(`.boxes`);

const box = document.querySelector(`.box`);

const green = document.querySelector(`.green`);

const yellow = document.querySelector(`.yellow`);

const red = document.querySelector(`.red`);


// generare i box
for (let i = 1 ; i <= 100 ; i++) {
    console.log(`funziona ${i}`)

    boxes.innerHTML += `<div class="box box-${i}">${i}</div>`;

    if (i % 3 == 0) {
        box.classList.add(`green`);
    }


}


