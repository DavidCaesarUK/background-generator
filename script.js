var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var bodyBck = document.getElementById('bodyid');
var displayColor = document.getElementById('display');
var random = document.getElementById('random');


function originalBck() {
    bodyBck.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    displayColor.textContent = bodyBck.style.background + ';';
}
originalBck();

function colorPicker() {
    bodyBck.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    displayColor.textContent = bodyBck.style.background + ';';
}

function randomColorGenerator() {
    var num1 = Math.floor(100000 + Math.random() * 800000);
    var num2 = Math.floor(100000 + Math.random() * 500000);

    var span1 = document.getElementById('span1');
    var span2 = document.getElementById('span2');

    span1.textContent = '#' + num1;
    span2.textContent = '#' + num2;

    bodyBck.style.background = 'linear-gradient(to right, #' + num1 + ', #' + num2 + ')';
    displayColor.textContent = bodyBck.style.background + ';';
}

color1.addEventListener('input', colorPicker);

color2.addEventListener('input', colorPicker);


random.addEventListener('click', randomColorGenerator);