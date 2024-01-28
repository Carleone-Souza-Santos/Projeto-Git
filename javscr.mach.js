function typeMachineText(e) {
    const textoArray = e.innerHTML.split('')
    e.innerHTML = ''
    textoArray.forEach((letra, i) => {
           setTimeout(() => e.innerHTML += letra, 100 * i)});
           
 }
 const paragraf = document.querySelector('p')
 const texto = document.querySelector('h1')

 typeMachineText(paragraf)
 typeMachineText(texto)




// retorna ao inicio
