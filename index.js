
let btn = document.querySelectorAll("button")
let screen = document.getElementById("screen");
let screenValue = '';

for (item of btn) {

    item.addEventListener('mousedown', (e) => {
        e.target.style.boxShadow = 'none';
    })
    item.addEventListener('mouseup', (e) => {
        e.target.style.boxShadow = '2px 2px 0px black';
    })
    item.addEventListener("click", (e) => {
        let targetValue = e.target.innerText;
        if (targetValue == '+/-') {
            targetValue = ''
            screenValue = `(-${screenValue})`;
            screen.value = screenValue;
        } else if (targetValue == '←') {
            targetValue = ''
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        } else if (targetValue == 'x') {
            targetValue = '*'
            screenValue += targetValue
            screen.value = screenValue;
        } else if (targetValue == 'C') {
            screenValue = '';
            screen.value = screenValue;
        } else if (targetValue == '=') {
            if (screenValue == '') {
                screen.value = 'Enter Some Number';
            } else {
                screen.value = eval(screenValue);
            }
        } else {
            screenValue += targetValue;
            screen.value = screenValue;
        }
    })
}

