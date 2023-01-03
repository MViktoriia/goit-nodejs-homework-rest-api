const express = require("express");

const ctrl = require("../../controllers/contacts");
const removeById = require("../../controllers/contacts/removeById");
const { ctrlWrapper } = require("../../helpers");
const validateBody = require("../../middlewares/validateBody");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.list));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.delete("/:contactId", ctrlWrapper(removeById));

module.exports = router;
