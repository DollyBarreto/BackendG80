const express = require(`express`);
const ConectarBD = require(`../config/db`);
const cors = require (`cors`);

const app = express();
const port = process.env.PORT || 5000;

// enlazar conexion con la base de datos 
ConectarBD();
app.use(cors());

app.use(express.json());
app.use(`/api/clientes`, require(`../routes/cliente.js`));
app.use(`/api/proveedores`, require(`../routes/proveedor.js`));


app.get(`/`, (req, res) =>{
    res.send("Bienvenido, estamos desde el navegador");
})

app.listen(5000, () => {
    console.log(`el servidor esta conectado http:localhost:5000/ `)
})
