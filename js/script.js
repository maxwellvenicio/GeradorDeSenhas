//INPUT
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

//PASSWORD
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

//SHOW/HIDE CONTAINER
let containerPassword = document.querySelector("#container-password");

//CHARACTERS
let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?!@#$%&*";

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

//GENERATE PASSWORD
function generatePassword() {
  let pass = "";

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

//COPY
function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}
