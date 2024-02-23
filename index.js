const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cargar archivo de rutas
app.use(require('./routes/media'));
app.use(require('./routes/media_tags'));
app.use(require('./routes/role'));
app.use(require('./routes/tags'));
app.use(require('./routes/user'));

const PORT = process.env.PORT;

app.listen(PORT,() => {
  console.log(`El servidor escucha en el puerto `+ PORT);
});

module.exports = app;