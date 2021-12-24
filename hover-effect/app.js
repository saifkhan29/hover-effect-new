const imgHover1 = document.querySelector('.img-hover-1')
const imgHover2 = document.querySelector('.img-hover-2')
const img1 = document.querySelector('.img-1')
const img2 = document.querySelector('.img-2')
const text_change = document.querySelector('.right-cont h2')
const outerBox = document.querySelector('.left-inner-main')


imgHover1.addEventListener('mouseenter', () => {
    text_change.innerText = 'Switches Sensor'
    img1.classList.add('show-img')
})
imgHover1.addEventListener('mouseleave', () => {
    img1.classList.remove('show-img')
})
imgHover2.addEventListener('mouseenter', () => {
    text_change.innerText = 'Curtain Sensor'
    img2.classList.add('show-img')
})
imgHover2.addEventListener('mouseleave', () => {
    img2.classList.remove('show-img')
})





