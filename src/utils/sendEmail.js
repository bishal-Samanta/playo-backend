//const oAuth2Client = require("../configs/gmailoauth");
const transpoter = require("../configs/nodemailer");
console.log(transpoter())

//const { gmail } = require("googleapis/build/src/apis/gmail");


//Send mail 
const sendMail = async ({
    from,
    to,
    subject,
    text,
    html,
    attachments,
    alternatives,
  }) => {
    await transpoter().then((res)=>{
        res.sendMail({
            from,
            to,
            subject,
            text,
            html,
            attachments,
            alternatives,
          })
    });
  };


  //Welcome Email

  const welcomeMail = async ({ from, to, user}) => {
    await sendMail({
      from,
      to,
      subject: `Welcome Email for first registration`,
      text: `Hello ${user.firstName} Welcome to our Website`,
      html: `<h1>Hello ${user.firstName} Welcome to our Website</h1>`,
      
    });
  };


  module.exports = { welcomeMail }