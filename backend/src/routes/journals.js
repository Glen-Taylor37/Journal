const express = require('express');
const router = express.Router();
const passport = require('passport');
const JournalController = require('../controllers/journal');

const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/journals', requireAuth, JournalController.createJournal);

router.get('/journals', requireAuth, JournalController.getJournals);

router.get('/journals/:journalId', requireAuth, JournalController.getJournal);

router.post(
	'/journals/:journalId/entries',
	requireAuth,
	JournalController.createEntry
);

router.patch('/journals/:id', async (req, res) => {
	// const result = await journalsClient.updateJournal(req.params.id, req.body);
	// res.json(result);
	// console.log(`PUT: /journals/${req.params.id}, response: ${result}`);
});

router.delete(
	'/journals/:journalId',
	requireAuth,
	JournalController.deleteJournal
);

module.exports = router;
