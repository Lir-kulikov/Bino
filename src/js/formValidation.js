//import Pristine from '../../node_modules/pristinejs/dist/pristine.min.js'

import Pristine from '../js/vendor/pristine.min.js'

const form = document.querySelector(".form-contacts");
const pristine = new Pristine(form);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = pristine.validate();
    if (valid === true) {
        // pristine.reset()
        document.querySelector('.form-thx').classList.add('is-open');
        setTimeout(() => {
            document.querySelector('.form-thx').classList.remove('is-open');
        }, 3000);
        document.querySelector('.form-thx__close').addEventListener('click', () => {
            document.querySelector('.form-thx').classList.remove('is-open');
        });
        for (let elem of form.elements) {
            if (
                !elem.classList.contains("btn") && !elem.classList.contains("form-thx")
            ) {
                elem.value = "";
                pristine.reset();
                
            }
        }
    }
});

//pristine-error text-help