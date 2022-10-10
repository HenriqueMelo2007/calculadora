// Números
const zero = document.querySelector('#zero')
const um = document.querySelector('#um')
const dois = document.querySelector('#dois')
const tres = document.querySelector('#tres')
const quatro = document.querySelector('#quatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const sete = document.querySelector('#sete')
const oito = document.querySelector('#oito')
const nove = document.querySelector('#nove')


zero.addEventListener('click', addZero)
um.addEventListener('click', addUm)
dois.addEventListener('click', addDois)
tres.addEventListener('click', addTres)
quatro.addEventListener('click', addQuatro)
cinco.addEventListener('click', addCinco)
seis.addEventListener('click', addSeis)
sete.addEventListener('click', addSete)
oito.addEventListener('click', addOito)
nove.addEventListener('click', addNove)

// Resultado
const resultado = document.querySelector('#resultado')

function addZero() {
  resultado.innerHTML += `${zero.innerHTML}`
}
function addUm() {
  resultado.innerHTML += `${um.innerHTML}`
}
function addDois() {
  resultado.innerHTML += `${dois.innerHTML}`
}
function addTres() {
  resultado.innerHTML += `${tres.innerHTML}`
}
function addQuatro() {
  resultado.innerHTML += `${quatro.innerHTML}`
}
function addCinco() {
  resultado.innerHTML += `${cinco.innerHTML}`
}
function addSeis() {
  resultado.innerHTML += `${seis.innerHTML}`
}
function addSete() {
  resultado.innerHTML += `${sete.innerHTML}`
}
function addOito() {
  resultado.innerHTML += `${oito.innerHTML}`
}
function addNove() {
  resultado.innerHTML += `${nove.innerHTML}`
}