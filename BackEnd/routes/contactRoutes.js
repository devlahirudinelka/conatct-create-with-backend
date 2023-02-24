const express = require('express');
const router = express.Router();
// routes
router.route("/").get((req, res) => {
    res.status(200).json(
        { massage: "Get All Contacts" }
    );
});

router.route("/:id").get((req, res) => {
    res.status(200).json(
        { massage: `Get Contact for ${req.params.id}` }
    );
});

router.route("/").post((req, res) => {
    res.status(200).json(
        { massage: "Create Contact" }
    );
});

router.route("/:id").put((req, res) => {
    res.status(200).json(
        { massage: `Update Contact for ${req.params.id}` }
    );
});

router.route("/:id").delete((req, res) => {
    res.status(200).json(
        { massage: `Delete Contact for ${req.params.id}` }
    );
});

module.exports = router;