var form = document.querySelector("form");

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

const signupBtn = document.querySelector("#signup-btn");

let validatingSignUpForm = () => {

    const firstName = document.querySelector(".first-name");
    const lastName = document.querySelector(".last-name");
    const email = document.querySelector(".email");
    const phoneNumber = document.querySelector(".p-number");
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const phoneNumberValue = phoneNumber.value;
    const emailposition = emailValue.indexOf("@");
    const emaildotposition = emailValue.lastIndexOf(".");
    const signupPassword = document.querySelector(".password-input");
    const signupPasswordValue = signupPassword.value;



    if (emailValue === "" || signupPasswordValue === "" || firstNameValue === "" || lastNameValue === "" || phoneNumberValue === "") {
        document.getElementById("error").style.display = "flex";
        document.querySelector("#error p").textContent = "No information provided";
    }

    if (emailValue === "" && signupPasswordValue != "" && firstNameValue != "" && lastNameValue != "" && phoneNumberValue != "") {
        document.getElementById("error").style.display = "flex";
        document.querySelector("#error p").textContent = "Add email address";
    }

    if (signupPasswordValue === "" && emailValue != "" && firstNameValue != "" && lastNameValue != "" && phoneNumberValue != "") {
        document.getElementById("error").style.display = "flex";
        document.querySelector("#error p").textContent = "No password added";
    }

    if (firstNameValue === "" && signupPasswordValue != "" && emailValue != "" && lastNameValue != "" && phoneNumberValue != "") {
        document.getElementById("error").style.display = "flex";
        document.querySelector("#error p").textContent = "No FirstName added";
    }

    if (lastNameValue === "" && firstNameValue != "" && signupPasswordValue != "" && emailValue != "" && phoneNumberValue != "") {
        document.getElementById("error").style.display = "flex";
        document.querySelector("#error p").textContent = "No FirstName added";
    }

    if (phoneNumberValue === "" && firstNameValue != "" && signupPasswordValue != "" && emailValue != "" && lastNameValue != "") {
        document.getElementById("error").style.display = "flex";
        document.querySelector("#error p").textContent = "No FirstName added";
    }

    /*if (firstNameValue != "" && lastNameValue != "" && emailValue != "" && emailposition < 1 || emaildotposition < emailposition + 2 || emaildotposition + 2 >= email.length) {
        document.getElementById("error").style.display = "flex";
        document.querySelector("#error p").textContent = "Enter valid email";
    };*/

};


const eyeIcon = document.querySelector(".bi-eye");
let togglePassword = () => {
    const signupPassword = document.querySelector(".password-input");

    if (signupPassword.type == "password") {
        signupPassword.setAttribute("type", "text");
        eyeIcon.classList.remove("bi-eye");
        eyeIcon.classList.add("bi-eye-slash");
    } else {
        signupPassword.setAttribute("type", "password");
        eyeIcon.classList.add("bi-eye");
        eyeIcon.classList.remove("bi-eye-slash");
    }
};

eyeIcon.addEventListener("click", togglePassword);
