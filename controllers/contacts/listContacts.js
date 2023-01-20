const Contact = require("../../models/contact");

const listContacts = async (req, res, next) => {
	const { _id: owner } = req.user;
	const { page = 1, limit = 10, favorite } = req.query;
	const skip = (page - 1) * limit;
	const filter = favorite === undefined ? {} : {favorite};
	const result = await Contact.find({ owner, ...filter }, null, { skip, limit })
                              .populate("owner", "email subscription")

	res.json(result);
};

module.exports = listContacts;
