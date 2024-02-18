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
    function copyPass() {
        let newPass = password.textContent; // Obtenha o texto da senha
          navigator.clipboard.writeText(newPass).then(function() {
        console.log('Senha copiada com sucesso!');
        alert('Senha copiada com sucesso!');
    }).catch(function(error) {
        console.error('Erro ao copiar senha:', error);
        alert('Erro ao copiar senha. Por favor, tente novamente.');
    });
}

   /* ESSA FUNÇÃO SÓ FUNCIONA EM NAVEGADOR ANTIGO/
    
       function copyPass(){
            alert("Senha copiada com sucesso!")
        navigator.clipboard.writeText(newPass);
    } */
