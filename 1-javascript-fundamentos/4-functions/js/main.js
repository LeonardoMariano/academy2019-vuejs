/*
  soma
  subtrai
  multiplica
  divide
  full-name
*/

const funcaoSoma = (n1,n2) => `Soma = ${n1+n2}`   

const funcaoSub = (n1,n2) => `Subtração = ${n1-n2}`  

const funcaoMult = (n1,n2) => `Multiplicação = ${n1*n2}`  

const funcaoDiv = (n1,n2) => `Divisão = ${n1/n2}`  

const funcaoFullName = (primeiroNome,segundoNome) => `Nome completo = ${primeiroNome +" "+ segundoNome}`  


console.log(funcaoSoma(1,2))

console.log(funcaoSub(10,2))

console.log(funcaoMult(10,5))

console.log(funcaoDiv(100,5))

console.log(funcaoFullName('Leonardo', 'Mariano'))


// function minhaFuncao(name) {
//   return `Olá, ${name}`
// }

// const minhaFuncao = function (name) {
//   return `Olá, ${name}`
// }

//const minhaFuncao = name => `Olá, ${name}`

