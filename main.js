
// CHECH
console.log(`JS OK`);


// ref container boxes
const boxes = document.querySelector(`.boxes`);

// generare i box
for (let i = 1 ; i <= 100 ; i++) {
    console.log(`funziona ${i}`)

    boxes.innerHTML += `<div class="box box-${i}">${i}</div>`;

}


