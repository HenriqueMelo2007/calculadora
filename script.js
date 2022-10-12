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

zero.addEventListener('click', () => add(0))
um.addEventListener('click', () => add(1))
dois.addEventListener('click', () => add(2))
tres.addEventListener('click', () => add(3))
quatro.addEventListener('click', () => add(4))
cinco.addEventListener('click', () => add(5))
seis.addEventListener('click', () => add(6))
sete.addEventListener('click', () => add(7))
oito.addEventListener('click', () => add(8))
nove.addEventListener('click', () => add(9))

const ponto = document.querySelector('#ponto')

ponto.addEventListener('click', () => add('.'))



// Resultado
const conta = document.querySelector('#conta')

function add(value) {
  conta.innerHTML += value
}