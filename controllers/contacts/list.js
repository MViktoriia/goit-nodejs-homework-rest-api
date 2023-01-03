const Contact = require("../../models/contact");

const list = async (req, res, next) => {
  const result = await Contact.find();

  res.json(result);
};

module.exports = list;
