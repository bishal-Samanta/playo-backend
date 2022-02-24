const nodemailer = require("nodemailer");
module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
     user: "932253604e5ecc",
     pass: "dd7198cb336802"
   }
})