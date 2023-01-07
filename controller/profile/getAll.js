const { Profile } = require('../../models');

module.exports = async(req, res) => {
    const data = await Profile.findAll();

    if(data==null){
        return res.status(404).json({
            msg : 'Data not found'
        });
    }

    return res.status(200).json({
        msg : 'Sukses ambil semua data',
        data : data
    })
}