// @desc Get all contact
// @route GET /api/contacts
// @access public
const getContacts = (req, res) => {
    res.status(200).json(
        { massage: "Get All Contacts" }
    );
};

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
    res.status(201).json(
        { massage: `Get Contact for ${req.params.id}` }
    );
}

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
    console.log("The request body is :", req.body);
    res.status(202).json(
        { massage: "Create Contact" }
    );
};

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
    res.status(200).json(
        { massage: `Update Contact for ${req.params.id}` }
    );
};

// @desc delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
    res.status(200).json(
        { massage: `Delete Contact for ${req.params.id}` }
    );
};

module.exports = { getContacts, createContact , getContact, updateContact, deleteContact}