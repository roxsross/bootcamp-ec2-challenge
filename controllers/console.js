const path = require('path');

//Proceso cuando se llame la ruta
exports.getAltaConsola = (request, response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'forms.html'));
};

exports.postAltaConsola = (request, response) => {
    console.log(request.body);
    response.json({ message: "Received data" });
};

exports.getConsultaConsola = (request, response) => {
    response.send('<h1>Datos de la consola</h1>');
};