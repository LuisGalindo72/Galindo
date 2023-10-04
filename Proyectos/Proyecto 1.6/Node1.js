const fs = require('fs');

// Escribir de manera asincrónica en 'archivo2.txt'
fs.writeFile('archivo2.txt', "Hola, este es un archivo nuevo, creado de manera asincrónica", (err) => {
    if (err) {
        console.error(err); // Manejar el error, por ejemplo, imprimirlo en la consola
    } else {
        console.log('archivo2.txt se ha creado correctamente');
    }
});

// Intentar leer 'info.txt' de manera sincrónica
try {
    let informacion = fs.readFileSync('info.txt', 'utf8');
    console.log(informacion);
} catch (error) {
    console.error('Error al leer el archivo info.txt:', error.message);
}

// Eliminar 'archivo.txt'
try {
    fs.unlinkSync('archivo.txt');
    console.log('archivo.txt se ha eliminado correctamente');
} catch (error) {
    console.error('Error al eliminar el archivo archivo.txt:', error.message);
}