const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

input.addEventListener('input', e => {
    if (e.target.value) {
        span.textContent = e.target.value;
    }
    else { span.textContent = 'Anonymous'; }
}
);

