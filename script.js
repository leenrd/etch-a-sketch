const slider = document.getElementById("slider");
const output = document.getElementById("value");
const colorBtn = document.getElementById('colormode')
const rainbowBtn = document.getElementById('rainbow')
const eraser = document.getElementById('eraser')
const clear = document.getElementById('clear')
const canvasDiv = document.getElementById('canvasDiv')
const colorInput = document.getElementById('colorInput')

const addNew = (events, div) => {
    canvasDiv.setAttribute('style', `grid-template-columns:repeat(${events}, 1fr) ;grid-template-rows:repeat(${events}, 1fr);`)
    canvasDiv.appendChild(div)
}   

let currentColor ='black'
colorInput.addEventListener('input', (color) => {
    currentColor = color.target.value
})
const getColor = () => {
    return currentColor
}

const randomColor = () => { 
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;    
}


let cells = document.querySelectorAll('.cell')
const btnClicks = () => {
    colorBtn.addEventListener('click', () => {
        cells = document.querySelectorAll('.cell')
        cells.forEach(cell => {
            cell.addEventListener('mousedown', () => {
                cell.style.backgroundColor = getColor()
                document.addEventListener('mouseover', (event) => {
                    if (event.target.classList.contains('cell')) {
                        event.target.style.backgroundColor = getColor()
                      }
                })
            })
        });
    })

    rainbowBtn.addEventListener('click', () => {
        cells = document.querySelectorAll('.cell')
        cells.forEach(cell => {
            cell.addEventListener('mousedown', () => {
                cell.style.backgroundColor = randomColor()
                document.addEventListener('mouseover', (event) => {
                    if (event.target.classList.contains('cell')) {
                        event.target.style.backgroundColor = randomColor()
                      }
                })
            })
        });
    })

    eraser.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.addEventListener('mousedown', () => {
                cell.style.backgroundColor = 'white'
                document.addEventListener('mouseover', (event) => {
                    if (event.target.classList.contains('cell')) {
                        event.target.style.backgroundColor = 'white'
                      }
                })
            })
        });
    })

    clear.addEventListener('click', () => {
        cells = document.querySelectorAll('.cell')
        cells.forEach(cell => {
            cell.style.backgroundColor = ''
        });
    })
}

slider.addEventListener('input', (event) => {
    output.innerText = `${event.target.value} x ${event.target.value}`;
    for (let row = 0; row <= event.target.value; row++) {
        for (let col = 1; col <= event.target.value; col++) { 
            const newDiv = document.createElement('div') 
            addNew(event.target.value, newDiv)
            newDiv.classList.add('cell')
        }
    }
})


btnClicks()