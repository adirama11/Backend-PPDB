const { User } = require('../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const data = await User.findByPk(id);

    if(!data){
        return res.status(404).json({
            msg : 'User not found'
        })
    } else {
        await data.destroy();
    }

    const allData = await User.findAll()
    return res.status(200).json({
        msg : 'Sukses hapus data',
        data : allData
    });
}