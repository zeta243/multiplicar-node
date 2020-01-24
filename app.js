//requires
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicaar/multiplicar')
    //const fs = require('express');
    //const fs = require('./fs');
    //let base = '5';

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
//console.log(process.argv);
//let argv2 = process.argv;
console.log('Limite ', argv.limite);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);



//git init
//git status

//guardar todo menos la carpeta tablas y node_modules
//para eso se agrega un archivo de nombre .gitignore
//Colocamos dentro del archivo 
/*
    node_modules/
    tablas/*.txt


    Luego ponemos 
    git add .

    y se coloca en verde  para hacerle un commit

    git commit -m "Commit inicial"
 */