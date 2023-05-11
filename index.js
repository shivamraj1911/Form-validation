const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const Password = document.getElementById('password');
const Confirm Password2 = document.getElementById('password2');

// show error function
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

// show success
function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}


//Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

   if (username.value === '') {
    showError(username, 'Username is required');
   } else {
    showSuccess(username);
   }

   if (email.value === '') {
    showError(email, 'Email is required');
   } else {
    showSuccess(username);
   }
   if (Password.value === '') {
    showError(Password, 'Password is required');
   } else {
    showSuccess(username);
   }
   if (Password2.value === '') {
    showError(Password2, 'Confirm Password is required');
   } else {
    showSuccess(username);
   }
});