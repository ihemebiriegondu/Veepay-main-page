var form = document.querySelector("form");

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

const signupBtn = document.querySelector("#signup-btn");

let validateSignUpForm = () => {

    const emailNo = document.querySelector(".email-no");
    const emailNoValue = emailNo.value;
    const signupPassword = document.querySelector(".password-input");
    const signupPasswordValue = signupPassword.value;

    if (emailNoValue === "" || signupPasswordValue === "") {
        document.getElementById("remember").style.display = "none";
        document.getElementById("flexCheckDefault").style.display = "none"
    }

    if (emailNoValue === "") {
        emailNo.classList.add("is-invalid");
        document.getElementById("validationServer03Feedback").style.display = "block";
    }

    if (signupPasswordValue === "") {
        signupPassword.classList.add("is-invalid");
        document.getElementById("validationServer04Feedback").style.display = "block";
        document.getElementById("forget").style.color = "#dc3545";
        document.getElementById("basic-addon1").style.borderColor = "#dc3545";
    }

};


