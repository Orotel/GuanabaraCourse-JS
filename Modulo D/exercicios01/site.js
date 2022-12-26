function verificar(){
let tInicio = document.querySelector('#txtInicio');
let tFim    = document.querySelector('#txtFim');
let tPasso  = document.querySelector('#txtPasso');
let res     = document.querySelector('#res');

let inicio  = Number(tInicio.value);
let fim     = Number(tFim.value);
let passo   = Number(tPasso.value);

if(inicio ==0|fim==0|passo==0){
    window.alert('Digite novamente erro')
}else{
    if(passo <=0){
        window.alert('Passo invalido')
        p=1
    }
    else if(inicio<fim){
        // contagem crescente
        for(let positivo=inicio;positivo<=fim;positivo+=passo){
        res.innerHTML+=`${positivo}\u{1F449}`
        }
    }
    else if(inicio>fim){
        // contagem regressiva
        for(let negativo=inicio;negativo>fim;negativo-=passo){
            res.innerHTML+=`${negativo} \u{1F449}`
        }
     
    }res.innerHTML +=`\u{1F3C1}`

        
    }


}


