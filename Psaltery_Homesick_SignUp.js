const formElement = document.querySelector("#submitForm");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const userName = document.querySelector("#username");
const telPhone = document.querySelector("#phone");
const emailAddress = document.querySelector("#email");
const datalist = document.querySelector("#datalist-city");
const radioMale = document.querySelector("#male");
const radioFemale = document.querySelector("#female");
const confirmPassword1 = document.querySelector("#confirm-password1");
const confirmPassword2 = document.querySelector("#confirm-password2");
const submitBtn = document.querySelector("#submit-btn");

formElement.addEventListener("submit", (e) => {
    e.preventDefault()

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const userNameValue = userName.value;
    const telPhoneValue = telPhone.value;
    const emailAddressValue = emailAddress.value;
    const confirmValue1 = confirmPassword1.value;
    const confirmValue2 = confirmPassword2.value;

    if(!firstNameValue || !lastNameValue || !userNameValue || !telPhoneValue || !emailAddressValue || !confirmValue1 || !confirmValue2){
        alert("Please fill the field");
        return
    }
} )
