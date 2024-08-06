//@desc Re
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler (async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});