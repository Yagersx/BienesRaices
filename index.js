import express from 'express';
import usuarioRoutes from  './routes/usuarioRoutes.js';

const app = express();

//Template engine
app.set('view engine', 'pug');
app.set('views', './views');

//Public folder and static files
app.use( express.static('public'));

//Routing
app.use('/auth', usuarioRoutes);

//Running app
const port = 3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});