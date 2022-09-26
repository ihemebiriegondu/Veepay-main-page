
const network = document.getElementById("network");
const dataValue = document.getElementById("datavalue");
const dataAmount = document.getElementById("data-amount");


let changeValue = () => {
    if (network.value == "select-network") {
        dataValue.innerHTML = ""
    } else if (network.value == "mtn") {
        dataValue.innerHTML = `
        <option value="500mb">500mb-30 Days</option>
        <option value="1gb">1gb-30 Days</option>
        <option value="2gb">2gb-30 Days</option>
        <option value="3gb">3gb-30 Days</option>
        <option value="5gb">5gb-30 Days</option>
        <option value="6gb">6gb-7 Days</option>
        <option value="10gb">10gb-30 Days</option>
        <option value="20gb">20gb-30 Days</option>
        <option value="40gb">40gb-30 Days</option>
        <option value="120gb">120gb-60 Days</option>
        `
    } else if (network.value == "glo") {
        dataValue.innerHTML = `
        <option value="1.3gb">1.3gb-14 Days</option>
        <option value="2.9gb">2.9gb-30 Days</option>
        <option value="4.1gb">4.1gb-30 Days</option>
        <option value="5.8gb">5.8gb-30 Days</option>
        <option value="7.7gb">7.7gb-30 Days</option>
        <option value="11gb">11gb-30 Days</option>
        <option value="12gb">12gb-30 Days</option>
        <option value="29.5gb">29.5gb-30 Days</option>
        <option value="50gb">50gb-30 Days</option>
        <option value="93gb">93gb-60 Days</option>
        `
    } else if (network.value == "airtel") {
        dataValue.innerHTML = `
        <option value="500mb">500mb-30 Days</option>
        <option value="1gb">1gb-30 Days</option>
        <option value="2gb">2gb-30 Days</option>
        <option value="3gb">3gb-30 Days</option>
        <option value="5gb">5gb-30 Days</option>
        <option value="6gb">6gb-7 Days</option>
        <option value="10gb">10gb-30 Days</option>
        <option value="20gb">20gb-30 Days</option>
        <option value="40gb">40gb-30 Days</option>
        <option value="120gb">120gb-60 Days</option>
        `
    } else if (network.value == "9mobile") {
        dataValue.innerHTML = `
        <option value="500mb">500mb-30 Days</option>
        <option value="1.5gb">1.5gb-30 Days</option>
        <option value="4.5gb">4.5gb-30 Days</option>
        <option value="11gb">11gb-30 Days</option>
        <option value="15gb">15gb-30 Days</option>
        <option value="40gb">40gb-30 Days</option>
        <option value="75gb">75gb-30 Days</option>
        `
    }
}

network.addEventListener("change", changeValue);

let changeAmount = () => {
    if (network.value === "mtn") {
        if (dataValue.value === "500mb") {
            dataAmount.value = "N150"
        } else if (dataValue.value === "1gb") {
            dataAmount.value = "N290"
        } else if (dataValue.value === "2gb") {
            dataAmount.value = "N585"
        } else if (dataValue.value === "3gb") {
            dataAmount.value = "N870"
        } else if (dataValue.value === "5gb") {
            dataAmount.value = "N1450"
        } else if (dataValue.value === "6gb") {
            dataAmount.value = "N1500"
        } else if (dataValue.value === "10gb") {
            dataAmount.value = "N2900"
        } else if (dataValue.value === "20gb") {
            dataAmount.value = "N5000"
        } else if (dataValue.value === "40gb") {
            dataAmount.value = "N10,000"
        } else if (dataValue.value === "120gb") {
            dataAmount.value = "N30,000"
        }
    } else if (network.value === "glo") {
        if (dataValue.value === "2.9gb") {
            dataAmount.value = "N1,000"
        } else if (dataValue.value === "4.1gb") {
            dataAmount.value = "N1,500"
        } else if (dataValue.value === "5.8gb") {
            dataAmount.value = "N2,000"
        } else if (dataValue.value === "7.7gb") {
            dataAmount.value = "N2,500"
        } else if (dataValue.value === "11gb") {
            dataAmount.value = "N3,000"
        } else if (dataValue.value === "12gb") {
            dataAmount.value = "N5,000"
        } else if (dataValue.value === "29.5gb") {
            dataAmount.value = "N8,000"
        } else if (dataValue.value === "50gb") {
            dataAmount.value = "N10,000"
        } else if (dataValue.value === "93gb") {
            dataAmount.value = "N15,000"
        } else if (dataValue.value === "1.3gb") {
            dataAmount.value = "N500"
        }
    } else if (network.value === "airtel") {
        if (dataValue.value === "500mb") {
            dataAmount.value = "N225"
        } else if (dataValue.value === "1gb") {
            dataAmount.value = "N400"
        } else if (dataValue.value === "2gb") {
            dataAmount.value = "N800"
        } else if (dataValue.value === "3gb") {
            dataAmount.value = "N1,200"
        } else if (dataValue.value === "5gb") {
            dataAmount.value = "N2,000"
        } else if (dataValue.value === "6gb") {
            dataAmount.value = "N1500"
        } else if (dataValue.value === "10gb") {
            dataAmount.value = "N3000"
        } else if (dataValue.value === "20gb") {
            dataAmount.value = "N4,999"
        } else if (dataValue.value === "40gb") {
            dataAmount.value = "N9,999"
        } else if (dataValue.value === "120gb") {
            dataAmount.value = "N20,000"
        }
    } else if (network.value === "9mobile") {
        if (dataValue.value === "500mb") {
            dataAmount.value = "N450"
        } else if (dataValue.value === "1.5gb") {
            dataAmount.value = "N950"
        } else if (dataValue.value === "4.5gb") {
            dataAmount.value = "N2,000"
        } else if (dataValue.value === "11gb") {
            dataAmount.value = "N3,999"
        } else if (dataValue.value === "15gb") {
            dataAmount.value = "N4,999"
        } else if (dataValue.value === "40gb") {
            dataAmount.value = "N10,000"
        } else if (dataValue.value === "75gb") {
            dataAmount.value = "N15,000"
        } 
    }

}

dataValue.addEventListener("change", changeAmount);



var form = document.querySelector("form");

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


const phoneNumber = document.querySelector(".phonenumber");
const phoneNumberValue = document.querySelector(".phonenumber").value;
const amount = document.querySelector(".amount");
const submitBtn = document.querySelector("button");
const inputs = document.querySelectorAll(".input-group input");
const selects = document.querySelectorAll(".input-group select");

inputs.forEach(input => {
    let removeDisabledInput = () => {
        if (input === document.activeElement && submitBtn.classList.contains("disabled")) {
            submitBtn.classList.remove("disabled");
            phoneNumber.classList.remove("is-invalid");
            document.getElementById("validationServer01Feedback").style.display = "none";
        }
    }
    input.addEventListener("focus", removeDisabledInput);
});

selects.forEach(select => {
    let removeDisabledSelect = () => {
        if (select === document.activeElement && submitBtn.classList.contains("disabled")) {
            submitBtn.classList.remove("disabled");
            phoneNumber.classList.remove("is-invalid");
            document.getElementById("validationServer01Feedback").style.display = "none";
        }
    };
    select.addEventListener("focus", removeDisabledSelect);
});

let validateSmePurchase = () => {
    const phoneNumber = document.querySelector(".phonenumber");
    const phoneNumberValue = document.querySelector(".phonenumber").value;
    const amount = document.querySelector(".amount");
    const dataValue = document.getElementById("datavalue");
    const submitBtn = document.querySelector("button");

    if (dataValue.value === "") {
        return false
    }

    if (phoneNumber.value === "") {
        phoneNumber.classList.add("is-invalid")
        document.getElementById("validationServer01Feedback").style.display = "block"
        submitBtn.classList.add("disabled")
        return false
    }

    if (isNaN(phoneNumber.value)) {
        phoneNumber.classList.add("is-invalid")
        document.getElementById("validationServer01Feedback").style.display = "block"
        submitBtn.classList.add("disabled")
        return false
    }

    if (phoneNumberValue.length !== 11) {
        phoneNumber.classList.add("is-invalid")
        document.getElementById("validationServer01Feedback").style.display = "block"
        submitBtn.classList.add("disabled")
        return false
    }

    if (isNaN(amount)) {
        return false
    }
}