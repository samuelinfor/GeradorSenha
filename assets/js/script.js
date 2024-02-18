let linhaElment = document.querySelector("#linhaChar");
let buttonElment = document.querySelector("#button");

let sizePass = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPass = document.querySelector("#container-password");

let charset = "1234567890abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ!@#$%&*";
let newPass = "";

sizePass.innerHTML = linhaElment.value;

linhaChar.oninput = function(){
    sizePass.innerHTML = this.value;
}

    function generatePass(){
        let pass = "";
            for(let i = 0, n = charset.length; i < linhaElment.value; ++i){
                pass += charset.charAt(Math.floor(Math.random() * n));
            }
    containerPass.classList.remove("hide");       
    password.innerHTML = pass;
    newPass = pass;
}

    function copyPass(){
        alert("Senha copiada com sucesso!")
        navigator.clipboard.writeText(newPass);
    }