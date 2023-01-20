const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", authenticate, isValidId, ctrlWrapper(ctrl.getById));

router.post(
	"/",
	authenticate,
	validateBody(schemas.addSchema),
	ctrlWrapper(ctrl.addContact)
);

router.put(
	"/:contactId",
	authenticate,
	isValidId,
	validateBody(schemas.addSchema),
	ctrlWrapper(ctrl.updateContact)
);

router.delete(
	"/:contactId",
	authenticate,
	isValidId,
	ctrlWrapper(ctrl.removeContact)
);

router.patch(
	"/:contactId/favorite",
	authenticate,
	isValidId,
	validateBody(schemas.updateFavoriteSchema),
	ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
