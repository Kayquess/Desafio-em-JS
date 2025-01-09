function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

// Entrada de string
let entrada = prompt("Digite uma string para inverter:");
console.log(`String invertida: ${inverterString(entrada)}`);
