import '../../node_modules/just-validate/dist/js/just-validate.min.js';

let validateForms = function (selector, rules, succesModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        colorWrong : '#e74c3c',
        messages: {
            message: {
                minLength: 'Комментарий должен содержать не менее 3 симоволов',
                required: 'Поле обязательно для заполения'
            },
            name: {
                required: 'Поле обязательно для заполения',
                minLength: 'Имя должно содержать не менее 3 симоволов'
            },
            email: 'Введите корректный E-mail',
            subject: {
                required: 'Поле обязательно для заполения',
            },
            // checkbox: 'Поле обязательно для заполнения',
            // login: 'Поле обязательно для заполнения',
            // password: 'Поле обязательно для заполнения',
        },
        submitHandler: function (form) {

        }
    });
}

validateForms('.form-contacts', {
    email: {
        required: true,
        email: true
    },
    name: {
        required: true
    },
    subject: {
        required: true
    },
    message: {
        required: true
    }
}, '.thanks-popup', 'send goal');

// validateForms('.form-modal', {
//     login: {
//         required: true
//     },
//     password: {
//         required: true
//     }
// },
// );
