
//       str > number
// number(n)     = float e int
// parseInt   = int
// parseFloat = float

/*       number > str
  String(n)
  N.ToString()
*/


let n1 = Number(window.prompt('digite um numero'))// o Problema de usar o windowpromt é que ele trata o dado comom uma STR.
let n2 = Number(window.prompt('digite outro n'))
let s = n1 +n2
window.alert('digite o resultado ' + s)