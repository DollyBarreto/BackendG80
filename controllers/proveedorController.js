const Proveedor = require ("../models/Proveedor.js");

// funcion agregar Proveedores
exports.agregarProveedores = async(req, res) => {

    try {

        let proveedor;
        proveedor = new Proveedor(req.body);
        await proveedor.save();
        res.send(proveedor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(`Hubo un error al agregar un Proveedor`);
    }
    
}

// funcion que nos va  mostrar todos los proveedor
exports.mostrarProveedores = async(req, res) => {

    try {

        const proveedor = await Proveedor.find();
        res.json(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send(`Hubo un error al mostrar los Proveedor`);
    }
    
}

// funtion para mostrar un proveedor
exports.buscarProveedores = async (req, res) => {
    
    try {

        let proveedor = await Proveedor.findById(req.params.id);

        if(!proveedor) {
            res.status(404).json({msg:`No se encontro al proveedor`});

        }else {

            res.send(proveedor);
        }
        

    } catch (error) {
        console.log(error);
        res.status(500).send(`Hubo un error al buscar el proveedor`)
        
    }
}

// funcion para actualizar un proveedor

exports.actualizarProveedores = async (req, res) => {
    try {
        const proveedor = await Proveedor.findOneAndUpdate({_id: req.params.id}, req.body);

        if(!proveedor) res.status(404).send(`proveedor no encontrado`);
        else
        res.json(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar el proveedor");
        
    }
}

// funcion para modificar proveedor

exports.modificarProveedores = async (req, res) => {

    try {
        const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!proveedor){
            return res.status(404).send(`proveedor no encontrado`);
        } 
        res.json(proveedor)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(`Hubo un error al modificar el proveedor`);
    }
}

exports.eliminarProveedores = async (req, res) => {

    try {

        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).send(`proveedor no encontrado`);
            
        }else{
            await Proveedor.findOneAndDelete({_id: req.params.id});
            res.json({msg:`El Proveedor ha sido eliminado`})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send(`Hubo un error al eliiminar el proveedor`);
    }
}

