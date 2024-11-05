const formElement = document.querySelector("#mainForm");
const emailAddress = document.querySelector("#email");
const password1 = document.querySelector("#password");

formElement.addEventListener("submit", (e) =>{
    e.preventDefault()

    const emailAddressValue = emailAddress.value;
    const password1Value = password1.value;

    if(!emailAddressValue || !password1Value){
        alert("Fill all the fields")
        return


    function btnFunction(){
        emailAddressValue.textContent = display;
        password1Value.textContent = display;
    }
    }
})