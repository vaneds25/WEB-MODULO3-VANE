const span = document.querySelector("#pass_ge")
const range = document.querySelector(".controles input")
const tag = document.querySelectorAll("div")

const letters = "abcdefghijklmnopqrstuvwxyz"
const mayus = letters.toUpperCase()
const numbers = "123456789"
const special = "$%&"

const allValues = letters + mayus + numbers + special

const genPass = () => {    
    span.innerText = "generando contraseña"
    let acculatePass = ""
    
    for (let i = 0; i < range.value; i++) {
        const seed = Math.floor(Math.random() * allValues.length)
        acculatePass += allValues[seed]
    }
    
    span.innerText = acculatePass
    copyToClip(acculatePass)
}

function copyToClip(pass) {        
    if (pass === '') return // si no hay mas de una linea se puede dejar la condicional sin llaves    
    //api del clipboard
    navigator.clipboard.writeText(pass)
}