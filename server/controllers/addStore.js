const { addStore } = require('../database/queries/postStore');

const postStoreHandler = (req, res) => {
  const { name, phone, link } = req.body;
  addStore(name, phone, link);
};

module.exports = { postStoreHandler };
