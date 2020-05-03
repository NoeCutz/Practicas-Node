const argv = require('./config/yargs').argv;
var colors = require('colors');

//const multiplicar = require('./multiplicar/multiplicar');
//multiplicar.crearAchivo
const { crearAchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch ( comando ) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    crearAchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo.blue}`))
      .catch(e => console.log(e));
    break;
  default:
    console.log('Comando no reconocido');
}

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
