const notas = [10, 6.5, 8, 7.5]

//const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

let somaDaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDaNotas += notas [i];
}
console.log(somaDaNotas / notas.length);

console.log('A Média das notas é ${media}.');