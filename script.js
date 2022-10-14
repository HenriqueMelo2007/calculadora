// Array que armazena os principais valores
let componentesDaOperacao = []

// Variável que armazena valores numéricos
let valorDaOperacao = ''

// Variável que armazena os operadores aritméticos
let operadorAritmeticoDaOperacao = ''

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

// Função para mostrar ao usuário o valor numérico digitado e também armazená-lo em uma variável
function addValor(valor) {
  visualizacaoDaOperacao.innerHTML += valor
  valorDaOperacao += valor
}

// Função que mostra ao usuário o operador aritmético digitado. Envia o valor anteriormente armazenado na variável para o array principal. Verifica se a quantidade de itens do array é igual a 3, e caso seja efetua um cálculo e o exibe no HTML interno do elemento 'operacao'. Armazena o operador aritmético em uma variável e 'limpa' a variável de valor numérico para que ela possa receber novos valores
function addOperador(operador) {
  visualizacaoDaOperacao.innerHTML += operador

  componentesDaOperacao.push(valorDaOperacao)

  if (componentesDaOperacao.length == 3) {
    let valor1 = componentesDaOperacao[0]
    let operadorAritmetico = componentesDaOperacao[1]
    let valor2 = componentesDaOperacao[2]
  
    let resultado = eval(valor1 + operadorAritmetico + valor2)
  
    componentesDaOperacao.splice(0, 3)
    componentesDaOperacao.push(resultado)

    operacao.innerHTML = resultado
  }

  componentesDaOperacao.push(operador)
  valorDaOperacao = ''
}

// Função que torna vazio o HTML interno da 'visualizacaoDaOperacao'. Envia o conteúdo da variável de valor para o array e a deixa vazia em seguida. Efetua um cálculo. Esvazia o array principal. Exibe o valor do cálculo no HTML interno de 'operacao'
function resultadoFinal() {
  visualizacaoDaOperacao.innerHTML = ''

  componentesDaOperacao.push(valorDaOperacao)
  valorDaOperacao = ''

  let valor1 = componentesDaOperacao[0]
  let operadorAritmetico = componentesDaOperacao[1]
  let valor2 = componentesDaOperacao[2]

  let resultado = eval(valor1 + operadorAritmetico + valor2)

  componentesDaOperacao = []
  valorDaOperacao = resultado
  operacao.innerHTML = valorDaOperacao
}

// Limpeza de variável, HTML interno e o array principal
const botaoLimpar = document.querySelector('#limpar')
botaoLimpar.addEventListener('click', limpeza)

function limpeza() {
  visualizacaoDaOperacao.innerHTML = ''
  operacao.innerHTML = ''
  valorDaOperacao = ''
  componentesDaOperacao = []
}