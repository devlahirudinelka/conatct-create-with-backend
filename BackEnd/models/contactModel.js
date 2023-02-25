const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add the Contact Name"],
        },
        email: {
            type: String,
            required: [true, "Please add the Contact Email"],
        },
        phone: {
            type: String,
            required: [true, "Please add the Contact Phone Number"],
        },
        phone: {
            type: String,
            required: [true, "Please add the Contact Gender"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);
