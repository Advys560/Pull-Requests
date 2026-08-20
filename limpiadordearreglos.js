let arreglo = "94325434567198";
let sinDuplicados = [];

for (let i = 0; i < arreglo.length; i++) {
    if (!sinDuplicados.includes(arreglo[i])) {
        sinDuplicados.push(arreglo[i]);
    } 
    else {
    }
}

for (let i = 0; i < sinDuplicados.length; i++) {
    for (let j = 0; j < sinDuplicados.length - 1; j++) {
        if (sinDuplicados[j] > sinDuplicados[j + 1]) {
            let temporal = sinDuplicados[j];
            sinDuplicados[j] = sinDuplicados[j + 1];
            sinDuplicados[j + 1] = temporal;
        }
    }
}

console.log(sinDuplicados)
