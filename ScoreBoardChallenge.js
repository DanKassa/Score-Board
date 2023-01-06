let value = 0;
let value2 = 0;

let result = document.getElementById('homeValue')
let result2 = document.getElementById('guestValue')
function addoneHome(){
    value+= 1;
    result.textContent= value;
}

function add3Home(){
    value+= 3;
    result.textContent= value;
}

function add5Home(){
    value+= 5;
    result.textContent= value;
}
function add1Guest(){
    value2+= 1;
    result2.textContent= value2;
}

function add3Guest(){
    value2+= 3;
    result2.textContent= value2;
}

function add5Guest(){
    value2+= 5;
    result2.textContent= value2;
}