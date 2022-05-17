$(function () {
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1000
    });
});

// setting form variables

const form = document.querySelector('[data-form]');

const formInputs = document.querySelectorAll('[data-form-input]');

const formBtn = document.querySelector('[data-form-btn]');





// add event to all form input field

for (let i = 0; i < formInputs.length; i++) {

    formInputs[i].addEventListener('input', function()  {

        // check form validation

        if (form.checkValidity()) {

            formBtn.removeAttribute('disabled');

        } else {

            formBtn.setAttribute('disabled', '');

        }
        
    });
}



// toggle eye icon for password

const togglePassword = document.querySelector('#togglePassword');
  
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {

    // Toggle the type attribute using
    // getAttribure() method
    const type = password
        .getAttribute('type') === 'password' ?
        'text' : 'password';
            
    password.setAttribute('type', type);

    // Toggle the eye and bi-eye icon
    this.classList.toggle('bi-eye');
});


