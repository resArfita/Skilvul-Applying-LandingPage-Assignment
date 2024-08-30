// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status
    };
}

//validate in the zipCode is number
function isNumber(inputString) {
    return !isNaN(inputString);
}


//task 9
function checkboxIsChecked() {
    return handleGetFormData().status;
}

function validateFormData(formData) {
    if (formData && isNumber(formData.zipCode) && checkboxIsChecked()) {
        return true;
    }else{
        return false;
    }
}


//task 10
function submit() {
    const data = handleGetFormData();
    let warning = document.getElementById("warning");

    if(!validateFormData(data)) {
        warning.innerHTML = "Periksa form anda sekali lagi";
    } else{
        warning.innerHTML = "";
    }
}

document.getElementById("submit-form").addEventListener("click", (event) => {
    event.preventDefault();
    submit();
});