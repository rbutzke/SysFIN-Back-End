const router = require('express-promise-router')();
const userController = require('../controllers/user');

router.post('/user', userController.createUser);

router.get('/user', userController.listAllUser);
router.get('/user/:id', userController.findUserById);
router.put('/user/:id', userController.updateUserById);
router.delete('/user/:id', userController.deleteUserById);

module.exports = router;