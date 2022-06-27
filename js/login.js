var form = document.querySelector("form");

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

const signupBtn = document.querySelector("#signup-btn");

let validateSignUpForm = () => {

    const emailNo = document.querySelector(".email-no");
    const emailNoValue = emailNo.value;
    const emailposition = emailNoValue.indexOf("@");
    const emaildotposition = emailNoValue.lastIndexOf(".");
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

    if (emailNoValue != "" && signupPasswordValue === "") {
        emailNo.classList.remove("is-invalid");
        document.getElementById("validationServer03Feedback").style.display = "none";
    }

    if (signupPasswordValue != "" && emailNoValue === "") {
        signupPassword.classList.remove("is-invalid");
        document.getElementById("validationServer04Feedback").style.display = "none";
        document.getElementById("forget").style.color = "#dc3545";
        document.getElementById("basic-addon1").style.borderColor = "rgba(115, 126, 145, 0.7)";
    };

    if (emailposition < 1 || emaildotposition < emailposition + 2 || emaildotposition + 2 >= emailNo.length) {
        emailNo.classList.add("is-invalid");
        document.getElementById("validationServer03Feedback").style.display = "block";
    };

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
