const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const model = require("../Models")


hashPassword = (password) => {
    return bcrypt.hash(password, 10);
  };

exports.createUser = async (req, res, next) => {
    const user = {
        username: req.body.username,
        firstname:req.body.firstname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }
    try {
      user.password = await hashPassword(req.body.password);
      const result = await user.save();
      res.status(201).json({
        message: 'User created',
        result: result
      });
    } catch (e) {
      res.status(500).json({
        message: 'Invalid authentification credendials',
      });
    }
  };

  exports.userLogin = async (req, res, next) => {

    try {
      const user = await model.users.findAll({
        email: req.body.email
      });
  
      if(!user) {
        return res.status(401).json({
            message: 'Auth failed'
        });
      }
  
      const result = bcrypt.compare(req.body.password, user.password);
  
      if (!result) {
        return res.status(401).json({
            message: 'Auth failed, wrong password'
        });
      }
  
      const token = jwtSign({ email: user.email, id: id });
  
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: user._id
      });
    } catch (e) {
      console.log(e);
      res.status(401).json({
        message: 'Invalid authentification credentials!', e: e
      });
    }
  };

  // (Encore une fois, ça équivaut a une requete UPDATE)
  exports.updateUser = async(req, res) => {
    const id = req.params.id
	  model.users.findById(id, function(err, user) {
		if (err)
			res.send(err);

        user.username = req.body.nom;
        user.firstname = req.body.prenom;
        user.email = req.body.email;
        user.password = req.body.password;
        user.role = req.body.role;

		user.save(function(err) {
			if (err)
				res.json(err)

			res.json({
				message: 'modified user',
				data: user
			});
		});
	});
};


// (Encore une fois, ça équivaut a une requete DELETE)
exports.deleteUser = async(req, res) => {
    var id = req.params.id;
    model.users.remove({id
    }, function(err, user) {
      if (err)
        res.send(err);

      res.json({
        message: "delete user success !!"
      });
    });
};


// (Ca équivaut a une requete SELECT ... WHERE ID = )
exports.getUser = async(req, res) => {
    const id = req.params.id;
  model.users.findByPk(id)
  .then(result => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(500).json({
      message: "user not found"
    })
  });

}
  
jwtSign = ({ email, userId }) => {
  return jwt.sign(
    { email: email, userId: userId },
    process.env.JWT_KEY,
    { expiresIn: '1h' },
  );
};