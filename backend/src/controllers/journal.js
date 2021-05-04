const Journal = require('../models/journal');
const Entry = require('../models/entry');

exports.createJournal = async (req, res, next) => {
	const newJournal = await Journal.create({
		title  : req.body.title,
		userId : req.user.id
	});

	//const saveResult = await newJournal.save();
	console.log('create result: ', newJournal);
	return res.json({ ...newJournal.toJSON(), entries: [] });
};

exports.getJournals = async (req, res, next) => {
	//const journals = await req.user.getJournals();
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
};

exports.getJournal = async (req, res, next) => {
	const { journalId } = req.params;

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
};

exports.createEntry = async (req, res, next) => {
	const { journalId } = req.params;
	const text = req.body.text;

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
};

exports.getEntry = async (req, res, next) => {
	const { journalId, entryId } = req.params;

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
	console.log('entry: ', entry);
	return res.json(journal.entries[index].toJSON());
};

exports.deleteJournal = async (req, res, next) => {
	const { journalId } = req.params;

	const journal = await Journal.findOne({
		where : { id: journalId, userId: req.user.id }
	});
	if (!journal) {
		return res.status(404).send('Not found');
	}

	await journal.destroy();

	res.json({ message: 'Journal successfully destroyed' });
};
