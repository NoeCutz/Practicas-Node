//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

  console.log('========================='.blue);
  console.log(`Tabla de ${base}`.blue);
  console.log('========================='.blue);

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}\n`);
  }
}

let crearAchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if(!Number(base)){
      reject(`El valor introducido ${ base } no es un número`);
      return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err);
      else
        resolve(`tabla-${base}.txt`);
    });
  })
}

module.exports = {
  crearAchivo,
  listarTabla
}
