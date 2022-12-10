
function somar(){
    let tn1 =window.document.getElementById('txtn1')
    let tn2 =window.document.getElementById('txtn2')
    let res = window.document.getElementById('result')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let soma = n1+n2
    res.innerHTML= `a soma entre ${n1} e ${n2}  é igual a ${soma}`

}