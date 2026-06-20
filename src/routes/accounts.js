const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');

// Routes mirror the paths defined in index.yaml (the OpenAPI source of truth).
router.get('/:accountNumber/statement/latest', controller.getLatestStatement);
router.get('/:accountNumber/overview', controller.getOverview);
router.patch('/:accountNumber/update', controller.updateAccount);
router.delete('/:accountNumber/delete', controller.deleteAccount);
router.post('/:accountNumber/create', controller.createAccount);

module.exports = router;
