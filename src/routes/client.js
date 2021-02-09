const router = require('express-promise-router')();
const clientController = require('../controllers/client');

router.post('/client', clientController.createClient);
router.get('/client', clientController.listAllClient);
router.get('/client/:id', clientController.findClientById);
router.put('/client/:id', clientController.updateClientById);
router.delete('/client/:id', clientController.deleteClientById);

module.exports = router;