const Contact = require("../../models/contact");
const { HttpError } = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  console.log(result);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "Delete success",
  });
};

module.exports = removeById;
