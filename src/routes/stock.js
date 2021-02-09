const router = require('express-promise-router')();
const stockController = require('../controllers/stock');

router.post('/stock', stockController.createStock);
router.get('/stock', stockController.listAllStock);
router.get('/stock/:id', stockController.findStockById);
router.put('/stock/:id', stockController.updateStockById);
router.delete('/stock/:id', stockController.deleteStockById);

module.exports = router;