const express = require('express');
const path = require('path');
const app = express();
const routeMain = require('./routes/mainRoute')

const publicPath = path.resolve (__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', routeMain)

app.listen(process.env.PORT || 3020, () => console.log('Servidor  corriendo, http://localhost:3020'));