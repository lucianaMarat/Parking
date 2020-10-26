const model = require("../Models/spaces")


exports.createSpace = async (req, res, next) => {
    const space = {
        numberSpace: req.body.numberSpace,
        level:req.body.level,
        occupied: req.body.occupied ? req.body.occupied : false,
        timeOccupied: req.body.timeOccupied,
        userId: req.body.userId
    }
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
  };

  exports.assignSpace =  async (req, res) => {
    try {
      const user = await model.users.findById({
        id: req.params.Id,
      })
      if (user) {
        const space = await model.spaces.find({
          userId: req.params.id,
          occupied: false
        })
        res.status(201).json({
            message: ' reservation delete',
            result: space
          });
      } else {
        re.status(404).send("not delete")
      }
    } catch (e) {
      res.status(500).json({
        message: 'Invalid authentification credendials',
      });
    }
};

 exports.deAssignSpace =  async (req, res) => {
    try {
      const user = await model.users.findById({
        id: req.params.Id,
      })
      if (user) {
        const space = await model.spaces.find({
          userId:"" ,
          occupied: true
        })
        res.status(201).json({
            message: 'reserved Space',
            result: space
          });
      } else {
        re.status(404).send("not reserved space")
      }
    } catch (e) {
      res.status(500).json({
        message: 'Invalid authentification credendials',
      });
    }
};

exports.getAllSpacesOfUser = async(req, res) => {
    try {
      const user = await model.users.find({
        id: req.params.id,
      })
        if (user) {
            const space = await model.spaces.findAll({
            userId: req.params.id,
            })
            res.status(201).json({
                message: 'reservation of user',
                result: space
            });
        } else {
            re.status(404).json({
            message: 'error',
        });
        }
    } catch (e) {
            res.status(500).json({
            message: 'Invalid authentification credendials',
        });
    }
}
    


 exports.getAllSpacesFree = async(req, res) => {
     
    try {
      const spaceFree = await spaces.find({where:{occupied: true}})
       res.status(201).json({
            message: 'yess free space',
            result: spaceFree
          });
    } catch (e) {
      res.status(500).json({
            message: 'Invalid authentification credendials',
        });
    }
}