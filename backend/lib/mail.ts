import { createTransport, getTestMessageUrl } from "nodemailer";

const transport = createTransport({
    host: process.env.MAIL_HOST,
    //port can't be a string, but must be a Number
    port: Number(process.env.MAIL_PORT) || 0,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
});

function writeSomethingFriendly(text: string) : string {
    return `
        <div style=" 
            border: 1px solid black;
            padding: 20px;
            font-family: sans-serif;
            line-height: 2;
            font-size: 20px;
        ">
            <h2>Hey There!</h2>
            <p>${text}</p>
            <p>Chur, Sick Fits</p>

        </div>
    `;
};

//got this from JSON.stringify(response) copied to www.http://jvilk.com/MakeTypes/
export interface MailResponse {
  accepted?: (string)[] | null;
  rejected?: (null)[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}
export interface Envelope {
  from: string;
  to?: (null)[] | null;
}


export async function sendPasswordResetEmail(
    resetToken: string, 
    to: string
    ) : Promise<void>{
    //email user the token
    const info = (await transport.sendMail({
        to,
        from: 'test@example.com',
        subject: 'Your Sick Fits password reset token',
        html: writeSomethingFriendly(`Your Sick Fits password reset token is here.
            <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click here to reset.</a>
        `)
    })) as MailResponse;
    if(process.env.MAIL_USER.includes('ethereal.email')) {
        console.log(`📧 Message Sent! Preview it at ${getTestMessageUrl(info)}`);
        
    }   
}