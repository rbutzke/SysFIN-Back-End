const router = require('express-promise-router')();
const companyController = require('../controllers/company');

router.post('/company', companyController.createCompany);
router.get('/company', companyController.listAllCompany);
router.get('/company/:id', companyController.findCompanyById);
router.put('/company/:id', companyController.updateCompanyById);
router.delete('/company/:id', companyController.deleteCompanyById);

module.exports = router;