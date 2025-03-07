const express = require('express')
const route = express.Router();
const DBs = require('../models/ddustbins')
const {postDb, getDb } = require('../controllers/dbController')
route.post('/postdb', postDb)
route.get('/getdb', getDb)
route.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBin = await DBs.findByIdAndDelete(id);

        if (!deletedBin) {
            return res.status(404).json({ message: 'Bin not found' });
        }

        res.status(200).json({ message: 'Bin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting bin', error });
        console.log(error)
    }
});
module.exports = route