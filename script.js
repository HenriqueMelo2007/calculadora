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


zero.addEventListener('click', ex)
um.addEventListener('click', ex)
dois.addEventListener('click', ex)
tres.addEventListener('click', ex)
quatro.addEventListener('click', ex)
cinco.addEventListener('click', ex)
seis.addEventListener('click', ex)
sete.addEventListener('click', ex)
oito.addEventListener('click', ex)
nove.addEventListener('click', ex)

// Resultado
const resultado = document.querySelector('#resultado')

function ex () {
  resultado.innerHTML += 'isso'
}