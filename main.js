onload = () =>{
    document.body.classList.remove("container");
};

const change = document.querySelector('#change')
const titulo = document.querySelector('#titulo')

let fontSize = 2

let messages = [
  'Hoy estas tan conservadora como siempre ;)',
  'Me encantas Vanessa',
  'Que tengas un excelente dia mi guapa lic ;)',
  'Hablando de fisicos...',
  'Mira el otro botón'
]

change.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  change.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})