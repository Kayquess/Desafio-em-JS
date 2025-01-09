function fibonacci(n) {
    let fibSequence = [0, 1];
    while (fibSequence[fibSequence.length - 1] < n) {
        let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextFib);
    }
    return fibSequence;
}

function verificaFibonacci(n) {
    let fibSequence = fibonacci(n);
    if (fibSequence.includes(n)) {
        console.log(`O número ${n} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${n} não pertence à sequência de Fibonacci.`);
    }
}

// Exemplo de entrada
let numero = parseInt(prompt("Digite um número:"));
verificaFibonacci(numero);
