//Questão 1

let indice = 13;
let soma = 0;

for (let K = 1; K <= indice; K++) {
  soma = soma + K;
}
console.log("Questão 1")
console.log(soma); 

//---------------------------------------------------------------------

//Questão 2

let num = Number(prompt("Digite um número:"));

function fibonacci(num) {
  let a = 0, b = 1, c, i, fib = [0, 1];
  for (i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
    fib.push(c);
  }
  return fib;
}

let fib = fibonacci(num);

console.log("Questão 2")

if (fib.indexOf(num) !== -1) {
  console.log(num + " pertence à sequência de Fibonacci.");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}

//---------------------------------------

//Questão 3

fetch('faturamento.json')
  .then(response => response.json())
  .then(dados => {
   
const valoresValidos = dados.filter(d => d.valor !== 0 ).map(d => d.valor);
const menorValor = Math.min(...valoresValidos);
const maiorValor = Math.max(...valoresValidos);
const mediaValores = valoresValidos.reduce((acumulado, valor) => acumulado + valor, 0) / valoresValidos.length;
const valoresAcimaDaMedia = valoresValidos.filter(valor => valor > mediaValores);
const qtdDiasAcimaDaMedia = valoresAcimaDaMedia.length;

console.log("Questão 3")
console.log(`Menor valor: ${menorValor}\nMaior valor: ${maiorValor}\nDias acima da média: ${qtdDiasAcimaDaMedia}`);

})
.catch(error => console.error(error));


//-------------------------------------------------------------------------------

//Questão 4

fetch('faturamento2.json')
  .then(response => response.json())
  .then(dados => {
   
    const total = dados.reduce((acumulador, atual) => {
      return acumulador + atual.Valor;
    }, 0);
    
    const sp = dados[0].Valor;
    const percentualSP = (sp / total) * 100;
    const rj = dados[1].Valor;
    const percentualRJ = (rj / total) * 100;
    const mg = dados[2].Valor;
    const percentualMG = (mg / total) * 100;
    const es = dados[3].Valor;
    const percentualES = (es / total) * 100;
    const outros = dados[4].Valor;
    const percentualOutros = (outros / total) * 100;

    console.log("Questão 4")
    console.log(`O total é: ${total}`);
    console.log(`SP = ${percentualSP.toFixed(2)}% `);
    console.log(`RJ = ${percentualRJ.toFixed(2)}% `);
    console.log(`MG = ${percentualMG.toFixed(2)}% `);
    console.log(`ES = ${percentualES.toFixed(2)}% `);
    console.log(`Outros = ${percentualOutros.toFixed(2)}% `);

})
.catch(error => console.error(error));

//-----------------------------------------------------------------------------

//Questão 5

let abc = "abcdefghijklmnopqrstuvwxyz";
let abcInvertido = "";
for (let i = abc.length - 1; i >= 0; i--) {
  abcInvertido += abc[i];
}

console.log("Questão 5")
console.log(abcInvertido);
