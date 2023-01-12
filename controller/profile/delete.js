const { Profile } = require('../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const data = await Profile.findByPk(id);

    if(!data){
        return res.status(404).json({
            msg : 'User not found'
        })
    } else {
        await data.destroy();
    }

    const allData = await Profile.findAll()
    return res.status(200).json({
        msg : 'Sukses hapus data',
        data : allData
    });
}