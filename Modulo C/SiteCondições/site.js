let corpo = window.document.querySelector('#corpo')
corpo.addEventListener('onload',carregar())

function carregar(){
let msg = window.document.querySelector('#msg')
let img = window.document.querySelector('#img')
let data = new Date()
let saudação = window.document.querySelector('#saudação')
let hora = data.getHours()
msg.innerHTML = `Agora são exatamente ${hora} horas.`
if (hora >= 0 && hora <12) {
    // bom dia
    saudação.innerHTML='Bom dia'
    img.src='Bomdia.png'
    document.body.style.backgroundColor='yellow'
}else if(hora >=12 && hora <=19){
    // boa tarde
    saudação.innerHTML='Boa tarde'
    img.src='Boatarde.png'
    document.body.style.backgroundColor='orange'

}else{
    // boa noite
    saudação.innerHTML='Boa noite'
    img.src = 'Boanoite.png'}

}