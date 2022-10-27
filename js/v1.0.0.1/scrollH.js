const prev = document.querySelector('.prev2')
const next = document.querySelector('.next2')
const slider = document.querySelector('.slider2')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 300
})

next.addEventListener('click', () => {
    slider.scrollLeft += 300
})
