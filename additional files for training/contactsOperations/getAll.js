// const fs = require("fs/promises");
// const path = require("path");

// const contactsPath = path.join(__dirname, "contacts.json");

// const getAll = async () => {
//     const data = await fs.readFile(contactsPath);
//     const contacts = JSON.parse(data);
//     return contacts;
// }

// module.exports = getAll;

const contacts = require("./contacts.json");

const getAll = async () => contacts;

module.exports = getAll;