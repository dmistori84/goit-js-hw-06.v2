const input = document.getElementById('validation-input');

input.addEventListener('blur', onSetColor);

function onSetColor() {
  
    if (input.value.length === Number(input.dataset.length)) {
        return input.classList = 'valid';
    }
    else return input.classList = 'invalid';
};


