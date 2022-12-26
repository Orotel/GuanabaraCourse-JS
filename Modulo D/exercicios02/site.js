function verificar(){
    let data=new Date()
    let ano = data.getFullYear()
    let fAno = window.document.getElementById('txtano')
    let res = window.document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value >ano){
        window.alert('seu ano está errado')
    }
    else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')


         if(fsex[0].checked){
            genero='homem'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src','kid.png')
            }
            else if ( idade <=30){
                //jovem
                img.setAttribute('src','jovem.png')
            }
            else if ( idade <70){
                //velho
                img.setAttribute('src','velho.png')
            } 
            
        }
        else if (fsex[1].checked){
            genero='mulher'
        }
        res.innerHTML=`detectamos ${genero} com idade ${idade}`
        res.appendChild(img)
    }
}