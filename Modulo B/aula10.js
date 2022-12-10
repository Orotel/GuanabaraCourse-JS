let area = window.document.getElementById('area')//Variavel global

// Nós podemos usar o addEventListner como DOM e não precisar coloca-lo no HTML
area.addEventListener('click',clicar)
area.addEventListener('mouseenter',entrar)
area.addEventListener('mouseout',sair)


function clicar(){
    area.innerText='voce clicko'
    area.style.backgroundColor='red'
}
function entrar(){
    area.innerText='entrou'
    area.style.backgroundColor='purple'
}
function sair (){
    area.innerText='saiu safado'
    area.style.backgroundColor='yellow'
}