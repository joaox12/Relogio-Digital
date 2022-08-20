const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
  let dateToday = new Date()
  let hr = dateToday.getHours()
  let min = dateToday.getMinutes()
  let s = dateToday.getSeconds()

  if (hr < 10) hr = '0' + hr

  if (min < 10) min = '0' + min

  if (s < 10) s = '0' + s

  horas.textContent = hr
  minutos.textContent = min
  segundos.textContent = s

  if (hr >= 0 && hr < 12) {
    //Bom dia!
    document.body.style.background = '#e2cd9f'
  } else if (hr >= 12 && hr <= 18) {
    //Bom Tarde!
    document.body.style.background = '#b9846f'
  } else {
    //Boa Noite!
    document.body.style.background = '#515154'
  }
})
