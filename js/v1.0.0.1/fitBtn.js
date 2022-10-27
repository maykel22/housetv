var root = document.documentElement
var button = document.querySelector('.fit-btn')
button.addEventListener('click', () => {

  root.classList.toggle('fit')

  if (root.classList.contains('fit')) {
    localStorage.setItem('isFit', '1')
  } else {
    localStorage.removeItem('isFit')
  }
})
