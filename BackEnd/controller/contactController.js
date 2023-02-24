const asyncHandler = require("express-async-handler");
// @desc Get all contact
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json(
        { massage: "Get All Contacts" }
    );
});

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    res.status(201).json(
        { massage: `Get Contact for ${req.params.id}` }
    );
})

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    // error handling
    const { name, email, phone, gender } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All field are mandatory");
    }
    // 
    res.status(202).json(
        { massage: "Create Contact" }
    );
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json(
        { massage: `Update Contact for ${req.params.id}` }
    );
});

// @desc delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async  (req, res) => {
    res.status(200).json(
        { massage: `Delete Contact for ${req.params.id}` }
    );
});

module.exports = { getContacts, createContact , getContact, updateContact, deleteContact}