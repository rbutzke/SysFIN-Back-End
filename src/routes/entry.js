const router = require('express-promise-router')();
const entryController = require('../controllers/entry');

router.post('/entry', entryController.createEntry);

router.get('/entry', entryController.listAllEntry);
router.get('/entry/:id', entryController.findEntryById);
router.put('/entry/:id', entryController.updateEntryById);
router.delete('/entry/:id', entryController.deleteEntryById);


module.exports = router;