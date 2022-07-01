const canvas = document.getElementById('canvas')

const context = canvas.getContext('2d') //используется для получения контекста визуализации и её функции рисования
const rect = canvas.getBoundingClientRect() //возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
const scale = window.devicePixelRatio  // для коректного обозначения размерности пикселей

canvas.width = rect.width * scale
canvas.height = rect.height * scale
context.scale(scale, scale)

let draw_color = 'black'
let draw_width = 1

change_color = (element) => {
    draw_color = element.style.backgroundColor
}
change_width = (element) => {
    draw_width = element
}

document.addEventListener('mousemove', draw )
document.addEventListener('mouseup', stopDraw )
document.addEventListener('mousedown', startDraw )
document.addEventListener('mouseout', stopMouse )

let paint = false

    function startDraw(event){
        paint = true
        draw(event)
    }
    function stopMouse(){
        paint = false
        context.beginPath() //запускает новый путь. Вызовите этот метод, когда хотите создать новый путь.
    }
    function stopDraw(){
        paint = false
        context.beginPath()
    }
    function draw(event) {
        if(!paint) {
            return
        }
        context.strokeStyle = draw_color
        context.lineWidth = draw_width
        const x = event.offsetX
        const y = event.offsetY
        context.lineTo(x, y);
        context.stroke();

    }




