const nodemailer = require("nodemailer");

require('dotenv').config()
const { google } = require("googleapis");


const client_id = process.env.GMAIL_CLIENT_ID
const client_secret = process.env.GMAIL_CLIENT_SECRET
const redirect_url = process.env.GMAIL_REDIRECT_URL
const refresh_token = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret , redirect_url);
oAuth2Client.setCredentials({refresh_token: refresh_token});


async function sendMail(){
    try{
        const accessToken = await oAuth2Client.getAccessToken()
        
        const transport =  nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "work.bishalsamanta@gmail.com",
                clientId : process.env.GMAIL_CLIENT_ID,
                clientSecret: process.env.GMAIL_CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken,
            }
        })

        return transport;
        
    }
    catch(e){
        return e;
    }
}

//sendMail()


module.exports = sendMail;