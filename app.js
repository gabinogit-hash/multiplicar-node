const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}



//console.log(process.argv)
// let argv = process.argv; //tiene 2 argumentos
// console.log('base',argv.base);
// let parametro = argv[2]; //obtiene la posicion 2 --base=algo
// let base = parametro.split('=')[1] //obtiene solo el valor de lo que se ingreso en este caso 'algo'