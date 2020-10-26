const router = require("express").Router();

const adminController = require('../Controllers/admin-controller');


router.get('/', function (req, res) {
	res.json({
		message: 'Bienvenu a Admin !'
	});
});

router.post('/users/:id/Authorized', adminController.createSpace);
    
module.exports = router;