const transporter = require("../configs/nodemailer");


//Send mail 
const sendEmail = async ({from, to, subject , text , html }) =>{
  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html
  })
}




const contactusMail = async ({ from, to, message}) => {
  await sendEmail({
    from,
    to,
    subject: `New query recived from ${message.name}`,
    text: `Name: ${message.name} , Mobile Number: ${message.mobileNumber} , Email: ${message.email} , Message: ${message.message}`,
    html: `<h2>Name: ${message.name} </br> Mobile Number: ${message.mobileNumber}  </br>  Email: ${message.email}  </br> Message: ${message.message}</h2>`,
    
  });
};




const welcomeMail = async ({ from, to, user}) => {
  await sendEmail({
    from,
    to,
    subject: `Welcome Email for first registration`,
    text: `Hello ${user.firstName} Welcome to our Website`,
    html: `<h1>Hello ${user.firstName} Welcome to our Website</h1>`,
    
  });
};


module.exports = { contactusMail , welcomeMail }