const express = require('express');
const router = express.Router();
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/journals', async (req, res) => {
	// const result = await journalsClient.addJournal(req.body);
	// res.json(result);
	// console.log(`POST: /journals, response: ${result}`);
});

router.get('/journals', requireAuth, async (req, res) => {
	console.log('hi');
	console.log(req.user);
	// const result = await journalsClient.getJournals();
	// res.json(result);
	// console.log(`GET: /journals, response: ${result.length} entries`);
});

router.get('/journals/:id', async (req, res) => {
	// const result = await journalsClient.getJournal(req.params.id);
	// res.json(result);
	// console.log(
	// 	`GET: /journals/${req.params
	// 		.id}, response: {_id: ${result._id}, title: ${result.title}}`
	// );
});

router.patch('/journals/:id', async (req, res) => {
	// const result = await journalsClient.updateJournal(req.params.id, req.body);
	// res.json(result);
	// console.log(`PUT: /journals/${req.params.id}, response: ${result}`);
});

router.delete('/journals/:id', async (req, res) => {
	// const result = await journalsClient.deleteJournal(req.params.id);
	// res.json(result);
	// console.log(`DELETE: /journals/${req.params.id}, response: ${result}`);
});

module.exports = router;
