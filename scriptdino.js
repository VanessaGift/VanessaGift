const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
    'Estas segurx?',
    'Piensalo bien',
    'Piensalo muy bien',
    'Piensalo',
    'Mira el otro botón',
    'No te apresures',
    'Segura de esto?',
    'Tómate tu tiempo',
    'No hay vuelta atrás',
    'Piénsalo dos veces',
    '¿Realmente quieres hacerlo?',
    'Aún estás a tiempo de cambiar',
    'Hazlo con calma',
    'Evalúa tus opciones',
    'No hay prisa'
  ];
  


buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
    window.location.href = 'flower.html';
})