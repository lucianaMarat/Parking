
const model = require("../Models")


exports.createSpace = async (req, res, next) => {
    const user = await model.users.findById({
        id: req.params.Id,
    });
    
    const space = {
        numberSpace: req.body.numberSpace,
        level:req.body.level,
        occupied: req.body.occupied ? req.body.occupied : false,
        timeOccupied: req.body.timeOccupied,
        userId: req.body.userId
    }
    if(user.role != null && user.role == "ADMIN"){
        try {
        
        const result = await space.save();
        res.status(201).json({
            message: 'User created',
            result: result
        });
        } catch (e) {
        res.status(500).json({
            message: 'Invalid authentification credendials',
        });
        }
    }
  };


