const Journal = require('../models/journal');
const Entry = require('../models/entry');

exports.createJournal = async (req, res, next) => {
	try {
		const newJournal = await Journal.create({
			title  : req.body.title,
			userId : req.user.id
		});

		return res.json({ ...newJournal.toJSON(), entries: [] });
	} catch (error) {
		return res.status(422).send('Could not create journal');
	}
};

exports.getJournals = async (req, res, next) => {
	try {
		const journals = await Journal.findAll({
			where   : {
				userId : req.user.id
			},
			include : {
				model : Entry,
				as    : 'entries'
			}
		});
		console.log('retrieved journals: ', journals);
		return res.json(journals);
	} catch (error) {
		return res.status(422).send('Could not get journals');
	}
};

exports.getJournal = async (req, res, next) => {
	const { journalId } = req.params;

	try {
		const journal = await Journal.findOne({
			where   : {
				id     : journalId,
				userId : req.user.id
			},
			include : {
				model : Entry,
				as    : 'entries'
			}
		});

		if (!journal) {
			return res.status(404).send('Not found');
		}

		return res.json(journal.toJSON());
	} catch (error) {
		return res.status(422).send('Could not retrieve journal');
	}
};

exports.createEntry = async (req, res, next) => {
	const { journalId } = req.params;
	const text = req.body.text;

	try {
		// Verify journal owernship
		const journal = await Journal.findOne({
			where : { id: journalId, userId: req.user.id }
		});
		if (!journal) {
			return res.status(404).send('Not found');
		}

		const newEntry = await Entry.create({
			content   : text,
			journalId
		});

		return res.json(newEntry.toJSON());
	} catch (error) {
		return res.status(422).send('Could not create entry');
	}
};

exports.getEntry = async (req, res, next) => {
	const { journalId, entryId } = req.params;

	try {
		// Verify journal ownership
		const journal = await Journal.findOne({
			where : { id: journalId, userId: req.user.id }
		});
		if (!journal) {
			return res.status(404).send('Not found');
		}

		const index = journal.entries.findIndex((entry) => {
			return entry.id === entryId;
		});

		const entry = journal.entries[index];
		return res.json(journal.entries[index].toJSON());
	} catch (error) {
		return res.status(422).send('Could not get entry');
	}
};

exports.deleteJournal = async (req, res, next) => {
	const { journalId } = req.params;

	try {
		const journal = await Journal.findOne({
			where : { id: journalId, userId: req.user.id }
		});
		if (!journal) {
			return res.status(404).send('Not found');
		}

		await journal.destroy();

		res.json({ message: 'Journal successfully destroyed' });
	} catch (error) {
		return res.status(422).send('Could not delete journal');
	}
};
