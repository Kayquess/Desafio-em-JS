// Dados de faturamento diário (representados como um vetor)
let faturamentoDiario = [
    67836.43, 0, 50000, 20000, 0, 10000, 0,
    36678.66, 0, 20000, 0, 15000, 8000, 10000,
    29229.88, 0, 15000, 7000, 0, 10000, 15000,
    27165.48, 0, 10000, 0, 8000, 5000, 7000,
    19849.53, 0, 0, 15000, 10000, 0, 0
];

// Remover dias sem faturamento
faturamentoDiario = faturamentoDiario.filter(valor => valor > 0);

// Calcular o menor e maior faturamento
let menorFaturamento = Math.min(...faturamentoDiario);
let maiorFaturamento = Math.max(...faturamentoDiario);

// Calcular a média mensal
let mediaFaturamento = faturamentoDiario.reduce((acc, valor) => acc + valor, 0) / faturamentoDiario.length;

// Contar os dias com faturamento superior à média
let diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaFaturamento).length;

// Exibindo os resultados
console.log(`Menor faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média: ${diasAcimaDaMedia}`);
