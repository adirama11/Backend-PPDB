const { Profile } = require('../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const dataId = await Profile.findByPk(id);

    if(!dataId){
        return res.status(404).json({
            msg : 'User not found'
        });
    }

    return res.status(200).json({
        data : dataId
    });
}