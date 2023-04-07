// variáveis
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imageCookie = document.querySelector("#imageCookie")
const body = document.querySelector("body")

// Funções

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  
}

function cookieClick(){
  toggleScreen()
  body.classList.toggle("bgReverse")
}

function handleResetClick(){
  toggleScreen()
  document.querySelector(".screen2 p").innerText = "Não importa a o tamanho da batalha, levente a cabeça porque você é capas"
  body.classList.toggle("bgReverse")
}


// Eventos

imageCookie.addEventListener('click', cookieClick)

btnReset.addEventListener('click', handleResetClick)