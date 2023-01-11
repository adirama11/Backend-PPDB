const { Kartu } = require('../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const cekData = await Kartu.findByPk(id);

    if(!cekData){
        return res.status(404).json({msg : 'User not found'})
    }

    return res.status(200).json(cekData);
}