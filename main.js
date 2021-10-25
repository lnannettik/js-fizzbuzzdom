
// CHECH
console.log(`JS OK`);


// ref
const boxes = document.querySelector(`.boxes`);

// const green = document.querySelector(`.green`);

// const yellow = document.querySelector(`.yellow`);

// const red = document.querySelector(`.red`);


// generare i box
for (let i = 1 ; i <= 100 ; i++) {
    // console.log(`${i}`)

    if ((i % 5 == 0) && (i % 3 == 0)) {
        boxes.innerHTML += `<div class="box red box-${i}">FizzBuzz</div>`;
        console.log(`FizzBuzz`)
    } else if (i % 3 == 0) {
        boxes.innerHTML += `<div class="box green box-${i}">Fizz</div>`;
        console.log(`fizz`)
    } else if (i % 5 == 0) {
        boxes.innerHTML += `<div class="box yellow box-${i}">Buzz</div>`;
        console.log(`buzz`)
    } else {
        boxes.innerHTML += `<div class="box normal box-${i}">${i}</div>`;
    }

}


