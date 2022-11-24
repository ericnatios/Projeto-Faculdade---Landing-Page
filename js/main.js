const btn = document.querySelector("#sendFormButton")

let nameValue = document.querySelector("#nome")
let senhaValue = document.querySelector("#senha")
let loginValue = document.querySelector("#login")
let telefoneValue = document.querySelector("#telefone")
let emailValue = document.querySelector("#email")


// let arr = new Array(nameValue.value + senhaValue.value + emailValue.value + loginValue.value + telefoneValue + emailValue.value)


const showAlert = () =>{
    return alert(`Cadastro realizado com sucesso! Bem vindo ${nameValue.value}`)
}


btn.addEventListener("click", showAlert, false)