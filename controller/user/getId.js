const { User } = require('../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const dataUser = await User.findByPk(id, {
        
    });
     if(!dataUser){
        return res.status(404).json({
            msg : 'User not found'
        });
     }

     return res.status(200).json({
        data : {
            dataUser
        }
     })
}