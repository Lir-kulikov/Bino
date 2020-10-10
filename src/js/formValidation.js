
// thx modal

function thxModalForm () {
    document.querySelector('.form-thx').classList.add('is-open');
    setTimeout(() => {
        document.querySelector('.form-thx').classList.remove('is-open');
    }, 3000);
    document.querySelector('.form-thx__close').addEventListener('click', () => {
        document.querySelector('.form-thx').classList.remove('is-open');
    });
}

// floating labels

const float = document.querySelectorAll('.js-floating');
const field = document.querySelectorAll('.form-contacts__input');

function floatingLabels () {
    for (let i = 0; i < field.length; i++) {
        field[i].addEventListener('focus', () => float[i].classList.add('is-floating'));
        field[i].addEventListener('blur', () => {
            if (field[i].value == 0) {
                float[i].classList.remove('is-floating');
            }
        });
    }
}

floatingLabels ();

const form = document.querySelector(".form-contacts");
import Bouncer from '../js/vendor/bouncer.polyfills.min';
var validate = new Bouncer('.form-contacts', {
    disableSubmit: true,
    messageAfterField: true
});

document.addEventListener('bouncerFormValid', function () {
    //alert('Form submitted successfully!');
    thxModalForm();
    for (let elem of form.elements) {
        if (
            !elem.classList.contains("btn") && !elem.classList.contains("form-thx")
        ) {
            elem.value = "";


            for (let i = 0; i < float.length; i++) {
                float[i].classList.remove('is-floating');
            }
        }
    }
}, false);