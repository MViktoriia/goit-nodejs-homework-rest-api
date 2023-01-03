const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
