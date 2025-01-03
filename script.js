document.addEventListener('DOMContentLoaded', (event) => {
    let button = document.getElementById('incrementBtn');
    let counter = document.getElementById('counter');

    button.addEventListener('click', function() {
        let currentValue = parseInt(counter.innerText);
        counter.innerText = currentValue + 1;
    });
});