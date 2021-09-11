
function Events() {
    // Choose-Flag
    var chooseFlagTB_MB = document.querySelector('#header__choose-flag--TB-MB');
    var chooseFlagDropdownTB_MB = document.querySelector('#header__choose-flag-dropdown--TB-MB');
    var chooseFlagPC = document.querySelector('#header__choose-flag--PC');
    var chooseFlagDropdownPC = document.querySelector('#header__choose-flag-dropdown--PC');
    // Nav-Bar
    var navBarOut = document.querySelector('.nav-bar__out');
    var navBarBackGround = document.querySelector('.nav-bar__background');
    var navBarFloat = document.querySelector('.nav-bar__float');
    var navBarButton = document.querySelector('.nav-button__options');
    // SignIn SignUp
    var signInButton = document.querySelector('.header__list-item-signIn');
    var signUpButton = document.querySelector('.header__list-item-signUp');
    var formSignIn = document.querySelector('form.form__sign-in');
    var formSignUp = document.querySelector('form.form__sign-up');


    // Choose-Flag
    chooseFlagTB_MB.onclick = function() {
        chooseFlagDropdownTB_MB.classList.toggle('active');
    }
    chooseFlagPC.onclick = function() {
        chooseFlagDropdownPC.classList.toggle('active');
    }


    // Nav-Bar
    navBarOut.onclick = function() {
        navBarBackGround.classList.remove('displayBlock');
        chooseFlagDropdownTB_MB.classList.remove('active');
        navBarFloat.style.transform = 'translateX(-100%)';
        navBarFloat.style.animation = 'navBarSlideOut 0.4s ease';
    }
    navBarBackGround.onclick = function() {
        navBarBackGround.classList.remove('displayBlock');
        chooseFlagDropdownTB_MB.classList.remove('active');
        navBarFloat.style.transform = 'translateX(-100%)';
        navBarFloat.style.animation = 'navBarSlideOut 0.4s ease';
    }

    
    // SignIn SignUp
    signInButton.onclick = function() {
        formSignIn.classList.add('displayBlock');
        formSignUp.classList.remove('displayBlock');
    }

    signUpButton.onclick = function() {
        formSignUp.classList.add('displayBlock');
        formSignIn.classList.remove('displayBlock');
    }
}


Events();


// export default SignFunc;
// export { formSignIn, formSignUp };
export var formSignIn = document.querySelector('form.form__sign-in');
export var formSignUp = document.querySelector('form.form__sign-up');
// console.log(formSignIn)
// export {formSignUp, formSignIn};