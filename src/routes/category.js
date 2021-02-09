const router = require('express-promise-router')();
const categoryController = require('../controllers/category');

router.post('/category', categoryController.createCategory);
router.get('/category', categoryController.listAllCategory);
router.get('/category/:id', categoryController.findCategoryById);
router.put('/category/:id', categoryController.updateCategoryById);
router.delete('/category/:id', categoryController.deleteCategoryById);

module.exports = router;