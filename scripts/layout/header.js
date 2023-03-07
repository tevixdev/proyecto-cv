const mainElement = document.getElementById('main')
const sectionElement = document.getElementById('section')

let headerElement = document.createElement('HEADER')
let navElement = document.createElement('NAV')
let ulElement = document.createElement('UL')
let h2Element = document.createElement('H2')

headerElement.setAttribute('class', 'header')
navElement.setAttribute('class', 'nav')
ulElement.setAttribute('class', 'ul')
h2Element.textContent = 'Argentina Programa 4.0'
h2Element.setAttribute('class', 'set-color-primary')



const elements = [
    {
        atributte: "home",
        value: "Inicio"
    },
    {
        atributte: "studies",
        value: "Estudios"
    },
    {
        atributte: "work-experience",
        value: "Experiencia laboral"
    },
    {
        atributte: "contact",
        value: "Contacto"
    },
]

elements.forEach(({atributte, value}) => {    
    ulElement.innerHTML += `<li><a class='anchor' href='${atributte}.html'>${value}</a></li>`
})


navElement.appendChild(ulElement)
headerElement.appendChild(h2Element)
headerElement.appendChild(navElement)
mainElement.insertBefore(headerElement, sectionElement)
