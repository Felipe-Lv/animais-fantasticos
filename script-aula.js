const animais = document.getElementById('animais')
console.log('animais', animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log("gridSection", gridSection)

const primeiraLi = document.querySelector('li')
console.log("primeiraLi", primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log("primeiraUl", primeiraUl)

const linkInterno = document.querySelector('[href^="#"]')
console.log("linkInterno", linkInterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log("animaisImg", animaisImg)

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')
primeiraUl.classList.add('grid-section')

console.log("gridSectionHTML", gridSectionHTML)

console.log("gridSectionNode", gridSectionNode)


gridSectionNode.forEach(function(item, index){
    console.log('item', item)
    console.log('index', index)
})

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item){
    console.log("item arrayGrid", item)
})