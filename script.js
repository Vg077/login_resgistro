const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novologin")
const campoNovaSenha = document.getElementById("novasenha")
const campoRepSenha = document.getElementById("repSenha")
let usuarios = [];

function login(){

}
function cadastra() {
    if (campoNovaSenha.value == campoRepSenha.value) {
    const usuario = {
        login:campoNovoLogin.value,
        senha:campoNovaSenha.value
    }
    usuarios.push(usuario);
    alert("Usuário cadastrado com sucesso!")
  }else{
    alert("As senhas são diferentes!");
  }

}