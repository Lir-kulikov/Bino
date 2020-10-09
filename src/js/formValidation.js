//import Pristine from '../../node_modules/pristinejs/dist/pristine.min.js'
import Pristine from '../js/vendor/pristine.js';

const form = document.querySelector(".form-contacts");
const pristine = new Pristine(form);

function validate(obj)
{
  if(!obj.checkValidity())
  {
    alert("You have invalid input. Correct it!");
    obj.focus();
  }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = pristine.validate();
    if (valid === true) {
        // thxModalForm ();
        for (let elem of form.elements) {
            if (
                !elem.classList.contains("btn") && !elem.classList.contains("form-thx")
            ) {
                elem.value = "";
                pristine.reset();

                for (let i = 0; i < float.length; i++) {
                    float[i].classList.remove('is-floating');
                }
            }
        }
    }
});

// модальное окно

// function thxModalForm () {
//     document.querySelector('.form-thx').classList.add('is-open');
//     setTimeout(() => {
//         document.querySelector('.form-thx').classList.remove('is-open');
//     }, 3000);
//     document.querySelector('.form-thx__close').addEventListener('click', () => {
//         document.querySelector('.form-thx').classList.remove('is-open');
//     });
// }

// // floating labels

// const float = document.querySelectorAll('.js-floating');
// const field = document.querySelectorAll('.form-contacts__input');

// function floatingLabels () {
//     for (let i = 0; i < field.length; i++) {
//         field[i].addEventListener('focus', () => float[i].classList.add('is-floating'));
//         field[i].addEventListener('blur', () => {
//             if (field[i].value == 0) {
//                 float[i].classList.remove('is-floating');
//             }
//         });
//     }
// }

// floatingLabels ();

