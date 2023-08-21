const form = document.querySelector("#form");
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSlect = document.querySelector("#job");
const messageTextarea = document.querySelector("#menssagem");

form.addEventListener("submit", (event) =>{
    event.PreventDefault();
 // verificando se o nome está preenchido//
    if (nameInput.value === "") {
        alert("Por favor, preencher o seu nome completo");
        return;
    }
// verificando se o nome está preenchido//
if (emailInput.valeu === ""|| !isEmailValid(emailInput.value)){
    alert("por favor, preencher o seu email");
    return; 
}


    form.submit();
});
 // verificando a validação do email//
 function isEmailValid(email){
    const emailRegex = new RegExp(
     /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true
    }
    return false;
 }
