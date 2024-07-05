const express = require(`express`);
const router = express.Router();
const ProveedorController = require(`../controllers/proveedorController.js`);

// creamos las rutas del crud

router.post(`/`, ProveedorController.agregarProveedores);
router.get(`/`, ProveedorController.mostrarProveedores);
router.get(`/:id`, ProveedorController.buscarProveedores);
router.put(`/:id`, ProveedorController.actualizarProveedores);
router.patch(`/:id`, ProveedorController.modificarProveedores);
router.delete(`/:id`, ProveedorController.eliminarProveedores);



module.exports = router;