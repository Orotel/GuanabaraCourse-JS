/*

<data>.length       = tamanho da str
<data>.toUperCase() = tudo maiuscula
<data>.toLoweCase() = tudo minusculo

*/
let Name = window.prompt('Qual seu nome')
document.write(`seu nome tem ${Name.length} letras .<br>`)
document.write(`seu nome em maiuscula e ${Name.toUpperCase()} <br>`)
document.write(`seu nome em minusculo e ${Name.toLowerCase()}`)

