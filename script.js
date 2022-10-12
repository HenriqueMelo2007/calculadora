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

zero.addEventListener('click', () => addValor(0))
um.addEventListener('click', () => addValor(1))
dois.addEventListener('click', () => addValor(2))
tres.addEventListener('click', () => addValor(3))
quatro.addEventListener('click', () => addValor(4))
cinco.addEventListener('click', () => addValor(5))
seis.addEventListener('click', () => addValor(6))
sete.addEventListener('click', () => addValor(7))
oito.addEventListener('click', () => addValor(8))
nove.addEventListener('click', () => addValor(9))

const ponto = document.querySelector('#ponto')

ponto.addEventListener('click', () => addValor('.'))

// Resultado
const conta = document.querySelector('#conta')
const resultado = document.querySelector('#resultado')

function addValor(value) {
  Number(value)
  conta.innerHTML += value
}

// Limpar
const botaoLimpar = document.querySelector('#limpar')

botaoLimpar.addEventListener('click', limpeza)

function limpeza() {
  conta.innerHTML = ''
  resultado.innerHTML = ''
}