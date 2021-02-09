const router = require('express-promise-router')();
const costcenterController = require('../controllers/costcenter');

router.post('/costcenter', costcenterController.createCostCenter);
router.get('/costcenter', costcenterController.listAllCostCenter);
router.get('/costcenter/:id', costcenterController.findCostCenterById);
router.put('/costcenter/:id', costcenterController.updateCostCenterById);
router.delete('/costcenter/:id', costcenterController.deleteCostCenterById);

module.exports = router;