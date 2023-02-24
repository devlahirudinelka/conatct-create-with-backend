const express = require('express');
const router = express.Router();
// import controller
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controller/contactController");
// routes
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)
// router.route("/").post(createContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

module.exports = router;