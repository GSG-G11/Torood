const {addStore} = require('../database/queries/postStore');
const app = require('../app');
const {join} = require('path')

const postStoreHandler = (req, res) => {
    const {name,phone,link} = req.body
    addStore(name, phone ,link)
    .then(res.sendFile(join(__dirname, '..','..', 'client' ,'main.html')))
}

module.exports = {postStoreHandler};