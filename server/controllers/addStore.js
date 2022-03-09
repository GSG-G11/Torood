const { addStore } = require('../database/queries/postStore');

const postStoreHandler = (req, res) => {
  const { name, phone, link } = req.body;
  addStore(name, phone, link).then(res.redirect('/'));
};

module.exports = { postStoreHandler };
