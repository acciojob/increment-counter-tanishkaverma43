window.onload = function() {
    let button = document.getElementById('incrementBtn');
    let counter = document.getElementById('counter');

    button.onclick = function() {
        let currentValue = parseInt(counter.innerText);
        counter.innerText = currentValue + 1;
    }
}