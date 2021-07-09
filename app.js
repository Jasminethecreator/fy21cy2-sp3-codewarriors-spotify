// variables for   login1-
const loginOne = document.querySelector ('#login1');
const loginTwo = document.querySelector ('#login2');
const loginBtn = document.querySelector ('#loginbtn');

//event listener  login1- login2
loginBtn.addEventListener ('click', () => {
    loginOne.classList.add('hidden')
    loginTwo.classList.remove('hidden')
});
//end of login page #1


// Input fields
const username = document.querySelector('#username');
const password = document.querySelector('#password');
//const submitBtn = document.querySelector ('input[name="submit"]');
const form = document.querySelector('form');

//const userNameInputError = document.querySelector('#username-error');
//const passwordInputError = document.querySelector('#password-error');





//form.addEventListener ('submit', (e) => {
   // e.preventDefault();


//});

function checkInput () {

    if (username.value.trim().length <= 6) {
        alert('Username must be at least 8 characters');
        return false;
  } if (password.value.trim().length <= 8) {
       alert('Password much contain a number and atleast 8 characters');
       return false;
  } else {
       return true;
   }
}




