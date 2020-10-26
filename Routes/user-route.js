const router = require("express").Router();

const userController = require('../Controllers/user-controller');


router.get('/', function (req, res) {
	res.json({
		status : 'API is working!',
		message: 'Bienvenu a mon API Restful !'
	});
});

router.post('/users/register', userController.createUser);

router.post('/users/login', userController.userLogin);

router.get('/users/:id', userController.getUser);

router.put('/users/:id',userController.updateUser);

router.delete('/users/:id',userController.deleteUser);
    
module.exports = router;
