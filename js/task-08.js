const refs = {
    form: document.querySelector('.login-form'),
    emailForm: document.querySelector('[name="email"]'),
    passwordForm: document.querySelector('[name="password"]'),
};
const { form, emailForm, passwordForm} = refs;
const userObj = {};

form.addEventListener('submit', loginForm);

function loginForm(event) {
    event.preventDefault();

    userObj.mail = event.target.elements.email.value;
    userObj.password = event.target.elements.password.value;
    
    if (!event.target.elements.email.value) {
        alert('Введите почту');
    };
    if (!event.target.elements.password.value) {
        alert('Введите пароль');
    }
    else {
        form.reset();
        console.log('userObj', userObj);
    }
};
