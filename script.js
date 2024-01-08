const box = document.querySelectorAll('.box')
const Gbox = document.querySelectorAll('.Gbox')
const body = document.querySelector('body')

function randColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

for (let i = 0; i < box.length; i++) {
  box[i] = addEventListener('click', function () {
    box[i].style.background = randColor()
  })
    
}

function randGradient(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let r2 = Math.floor(Math.random() * 256)
    let g2 = Math.floor(Math.random() * 256)
    let b2 = Math.floor(Math.random() * 256)
    let r3 = Math.floor(Math.random() * 256)
    let g3 = Math.floor(Math.random() * 256)
    let b3 = Math.floor(Math.random() * 256)
    let a = 100
    let grad = Math.floor(Math.random() * 11)
    let grad2 = Math.floor(Math.random() * 51)
    let grad3 = Math.floor(Math.random() * 101)
    let deg = Math.floor(Math.random() * 358)
    return `linear-gradient(${deg}deg, rgba(${r}, ${g}, ${b}, ${a}) ${grad}%, rgba(${r2}, ${g2}, ${b2}, ${a}) ${grad2}%, rgba(${r3}, ${g3}, ${b3}, ${a}) ${grad3}% )`
}
for (let i = 0; i < Gbox.length; i++) {
    Gbox[i] = addEventListener('click', function () {
      Gbox[i].style.background = randGradient()
      body.style.background = randGradient()
    })
}


console.log(randGradient())