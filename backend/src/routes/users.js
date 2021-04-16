const express = require('express');
const { OAuth2Client } = require('google-auth-library');

const router = express.Router();
const config = require('../../config');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const Authentication = require('../controllers/authentication');

router.get('/', requireAuth, (req, res) => {
	res.send({ hi: 'there' });
});

router.post('/signup', Authentication.signup);

router.post('/signin', requireSignin, Authentication.signin);

// const client = new OAuth2Client(config.CLIENT_ID);

// async function verify(idToken) {
// 	const ticket = await client.verifyIdToken({
// 		idToken,
// 		audience : config.CLIENT_ID
// 	});
// 	const payload = ticket.getPayload();
// 	return payload;
// }

// router.get('/user/:id', async (req, res) => {
// 	const result = await userRepo.getUser(req.params.id);
// 	res.json(result);
// 	console.log(`GET: /user/${req.params.id}, result: ${result}`);
// });

// router.post('/user/tokensignin', async (req, res) => {
// 	try {
// 		const payload = await verify(req.body.idToken);
// 		if (payload) {
// 			const userId = payload['sub'];
// 			const email = payload['email'];
// 			let user = await userRepo.getUser(userId);
// 			if (!user) {
// 				user = await userRepo.addUser({
// 					userId,
// 					email,
// 					settings : {}
// 				});
// 			}

// 			res.json(user);
// 		}
// 	} catch (err) {
// 		res.sendStatus(403);
// 	}
// });

module.exports = router;
