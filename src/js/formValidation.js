//import Pristine from '../../node_modules/pristinejs/dist/pristine.min.js'
// import Pristine from '../js/vendor/pristine.js';

// const form = document.querySelector(".form-contacts");
// const pristine = new Pristine(form);

// function validate(obj)
// {
//   if(!obj.checkValidity())
//   {
//     alert("You have invalid input. Correct it!");
//     obj.focus();
//   }
// }

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     var valid = pristine.validate();
//     if (valid === true) {
//         // thxModalForm ();
//         for (let elem of form.elements) {
//             if (
//                 !elem.classList.contains("btn") && !elem.classList.contains("form-thx")
//             ) {
//                 elem.value = "";
//                 pristine.reset();

//                 for (let i = 0; i < float.length; i++) {
//                     float[i].classList.remove('is-floating');
//                 }
//             }
//         }
//     }
// });

// модальное окно

function thxModalForm () {
    document.querySelector('.form-thx').classList.add('is-open');
    setTimeout(() => {
        document.querySelector('.form-thx').classList.remove('is-open');
    }, 3000);
    document.querySelector('.form-thx__close').addEventListener('click', () => {
        document.querySelector('.form-thx').classList.remove('is-open');
    });
}

// // floating labels

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


// var bouncer = new Bouncer('[data-validate]', {
//     disableSubmit: true,
//     customValidations: {
//         valueMismatch: function (field) {

//             // Look for a selector for a field to compare
//             // If there isn't one, return false (no error)
//             var selector = field.getAttribute('data-bouncer-match');
//             if (!selector) return false;

//             // Get the field to compare
//             var otherField = field.form.querySelector(selector);
//             if (!otherField) return false;

//             // Compare the two field values
//             // We use a negative comparison here because if they do match, the field validates
//             // We want to return true for failures, which can be confusing
//             return otherField.value !== field.value;

//         }
//     },
//     messages: {
//         valueMismatch: function (field) {
//             var customMessage = field.getAttribute('data-bouncer-mismatch-message');
//             return customMessage ? customMessage : 'Please make sure the fields match.'
//         }
//     }
// });

// document.addEventListener('bouncerFormInvalid', function (event) {
//     console.log(event.detail.errors);
//     console.log(event.detail.errors[0].offsetTop);
//     window.scrollTo(0, event.detail.errors[0].offsetTop);
// }, false);

// document.addEventListener('bouncerFormValid', function () {
//     alert('Form submitted successfully!');
//     window.location.reload();
// }, false);
