//Importar bibliotecas
const express = require('express');
const path = require('path');
const consoleRoutes = require('./routes/console');

const app = express();

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use('/api', consoleRoutes);

//Rutas

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/app', (request, response) => {
    response.send('API Correcta');
});

//Lanzar la app

app.listen(8080, () => {
    console.log('Servidor en línea');
});