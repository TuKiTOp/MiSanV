const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnOpenElement.addEventListener('click', ()=> {
    const pestañaElement = document.querySelector('.pestaña')
    pestañaElement.classList.add('open-pestaña')

    setTimeout(()=>{
        pestañaElement.style.zIndex = -2

        const contenidoElement = document.querySelector('.contenido')
    contenidoElement.classList.add('open-contenido')

    //Animacion para el corazon
    const corazonElement = document.querySelector('.corazon')
    corazonElement.style.display = 'block'

    const corazon2Element = document.querySelector('.corazon2')
    corazon2Element.style.display = 'block'

    const corazon3Element = document.querySelector('.corazon3')
    corazon3Element.style.display = 'block'

    const corazon4Element = document.querySelector('.corazon4')
    corazon4Element.style.display = 'block'

    const corazon5Element = document.querySelector('.corazon5')
    corazon5Element.style.display = 'block'

    },500)
})

btnCloseElement.addEventListener('click', ()=> {
    const pestañaElement = document.querySelector('.pestaña')

    const contenidoElement = document.querySelector('.contenido')
    contenidoElement.classList.remove('open-contenido')
    contenidoElement.classList.add('close-contenido')

    setTimeout(()=>{
        pestañaElement.style.zIndex = 0
        pestañaElement.classList.remove('open-pestaña')
    },500)
})