const refs = {
    btnDec: document.querySelector('[data-action="decrement"]'),
    btnInc: document.querySelector('[data-action="increment"]'),
    span: document.getElementById('value'),
};
const { btnDec, btnInc, span } = refs;

function getCounter() {
    let counterValue = 0;
    
    function dec() {
        return counterValue -= 1;
    };

    function inc() {
        return counterValue += 1;
    };
    return { dec, inc };
};

const temporaryStorage = getCounter();

btnDec.addEventListener('click', () => {
    let result = temporaryStorage.dec();
    span.textContent = result;
}
);

btnInc.addEventListener('click', () => {
    let result = temporaryStorage.inc();
    span.textContent = result;
}
);


