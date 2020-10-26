const router = require("express").Router();

const spaceController = require("../Controllers/space-controller");


router.get('/', function (req, res) {
	res.json({
		
		message: 'Bienvenu reservez votre place de parking !'
	});
});

router.post('/reservation/create', spaceController.createSpace);

router.put('/users/:userId/reservation', spaceController.assignSpace);

router.put('/users/:userId/annule', spaceController.deAssignSpace);

router.get('/users/:userId/get', spaceController.getAllSpacesOfUser);

router.get('/reservation/free',spaceController.getAllSpacesFree);


    
module.exports = router;
