//requireds tipos
const fs = require('fs'); //Libreria ya existente en Node
//const fs = require('express'); Librerias que otros usuario hicieron por nosotros 
//const fs = require('../fs'); Archvios locales
const colors = require('colors'); //para los colores en consola
//-----------------------------------
let listarTabla = (base, limite) => {
    console.log('=================='.red);
    console.log(`Tabla del ${base}`.red);
    console.log('=================='.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n `);
    }
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            console.log(`El numero introducido '${base}' no es un Numero`);
            return
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${base}-al-${limite}.txt ha sido creado!`.green);
        });
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}