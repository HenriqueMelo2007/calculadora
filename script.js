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
multiplicacao.addEventListener('click', () => addOperador('*'))
subtracao.addEventListener('click', () => addOperador('-'))
soma.addEventListener('click', () => addOperador('+'))

const igualdade = document.querySelector('#igualdade')
igualdade.addEventListener('click', resultadoFinal)

// Resultado no HTML
const visualizacaoDaOperacao = document.querySelector('#visualizacao-da-operacao')
const operacao = document.querySelector('#operacao')

// Funções
function addValor(valor) {
  visualizacaoDaOperacao.innerHTML += valor
  operacao.innerHTML += valor
}

function addOperador(operador) {
  visualizacaoDaOperacao.innerHTML += operador

  componentesDaOperacao.push(operacao.innerHTML)

  if (componentesDaOperacao.length == 3) {
    let valor1 = componentesDaOperacao[0]
    let operadorAritmetico = componentesDaOperacao[1]
    let valor2 = componentesDaOperacao[2]
  
    let resultado = eval(valor1 + operadorAritmetico + valor2)
  
    componentesDaOperacao.splice(0, 3)
    componentesDaOperacao.push(resultado)
  }

  componentesDaOperacao.push(operador)
  operacao.innerHTML = ''
}

function resultadoFinal() {
  componentesDaOperacao.push(operacao.innerHTML)
  operacao.innerHTML = ''

  let valor1 = componentesDaOperacao[0]
  let operadorAritmetico = componentesDaOperacao[1]
  let valor2 = componentesDaOperacao[2]

  let resultado = eval(valor1 + operadorAritmetico + valor2)

  componentesDaOperacao = []
  operacao.innerHTML = resultado
}

// Limpar
const botaoLimpar = document.querySelector('#limpar')
botaoLimpar.addEventListener('click', limpeza)

function limpeza() {
  visualizacaoDaOperacao.innerHTML = ''
  operacao.innerHTML = ''
  componentesDaOperacao = []
}