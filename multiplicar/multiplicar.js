//requireds

const fs = require('fs');
var colors = require('colors');
let listarTabla = (base, limite = 10) => {

    console.log('============'.blue);
    console.log(`tabla del ${base}`.blue);
    console.log('============'.blue);
    for (let i = 1; i <= limite; i++) {

        let resultado = base * i;
        console.log(`${base} * ${i} = ${resultado} \n`);
    }


}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introdicido ${base} no es un numero`);

            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            let resultado = base * i;
            data += `${base} * ${i} = ${resultado} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}