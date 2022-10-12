let componentesDaOperacao = []

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

// Operadores aritméticos
const divisao = document.querySelector('#divisao')
const multiplicacao = document.querySelector('#multiplicacao')
const subtracao = document.querySelector('#subtracao')
const soma = document.querySelector('#soma')

divisao.addEventListener('click', () => addOperador('/'))

// Resultado
const conta = document.querySelector('#conta')
const resultado = document.querySelector('#resultado')

function addValor(valor) {
  Number(valor)
  conta.innerHTML += valor
}

function addOperador(operador) {
  componentesDaOperacao.push(conta.innerHTML)
  conta.innerHTML += operador
  componentesDaOperacao.push(operador)
}

console.log(componentesDaOperacao)




// Limpar
const botaoLimpar = document.querySelector('#limpar')

botaoLimpar.addEventListener('click', limpeza)

function limpeza() {
  conta.innerHTML = ''
  resultado.innerHTML = ''
}