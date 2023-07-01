let button = document.getElementById('no')
let buttony = document.getElementById('yes')
let height = window.innerHeight - 50
let width = window.innerWidth - 50

button.addEventListener('mouseover' , function() {
    button.style.position = "absolute"
    button.style.top = Math.random() * height + 'px'
    button.style.left = Math.random() * width + 'px'
})

function yes(){
    buttony.innerHTML = 'Resposta registrada!'
    buttony.style.width = '100px'
    buttony.style.height = '70px'
}