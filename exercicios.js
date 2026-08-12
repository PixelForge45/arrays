// tarefa numero 1
//const NumerosRepetdos = [1, 2, 2, 3, 4, 4, 4, 5];

//const meuSet = new Set(NumerosRepetdos);

//console .log(meuSet);

// tarefa numero 2
//const NumRepetidos = [1, 2, 2, 3, 4, 4, 4, 5];

//const meuSet = new Set(NumRepetidos);

//const array1 = Array.from(meuSet);
//const array2 = [...meuSet];

//console.log(meuSet);
//console.log(array1);
//console.log(array2);

// tarefa numero 3

//const nomesRepetidos = ["Ana", "Bruno", "Carlos", "Bruno", "Diana", "Ana"];
//const meuSet = new Set(nomesRepetidos);

//const array1 = Array.from(meuSet);
//const array2 = [...meuSet];

//console.log(meuSet);
//console.log(array1);
//console.log(array2);

// tarefa numero 4
const numerosNaoRepetidos = [100, 101, 102, 103];
const numerosRepetidos = [100, 101, 102, 103, 100, 101, 102, 103];

function temRepetido(array) {
    const meuSet = new Set(array);
    return array.length !== meuSet.size;
}

console.log(temRepetido([100, 101, 102, 103]));
console.log(temRepetido([100, 101, 102, 103, 100, 101, 102, 103]));