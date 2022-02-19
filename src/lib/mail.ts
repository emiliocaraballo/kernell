
import nodemailer from "nodemailer";

class Mailer{

    private hostname: string=String(process.env.MAIL_HOSTNAME);
    private port: number=Number(process.env.MAIL_PORT);
    private secure: boolean=Boolean(process.env.MAIL_SECURE);
    private requireTLS: boolean=Boolean(process.env.MAIL_REQUIRETLS);
    private logger: boolean=Boolean(process.env.MAIL_LOGGER);
    private username: string=String(process.env.MAIL_USERNAME);
    private password: string=String(process.env.MAIL_PASSWORD);
    private from:string=String(process.env.MAIL_FROM);

    public smart_main=async(name:string,subject:string,html:string="<strong>Hello world?</strong>",to:string | any[]="",replay:string | any[]="")=>{
        try {
            const transporter = nodemailer.createTransport({
              host: this.hostname,
              port: this.port,
              secure: this.secure,
              requireTLS: this.requireTLS,
              auth: {
                user: this.username,
                pass: this.password,
              },
              logger: this.logger
            });
    
            const info = await transporter.sendMail({
              from: '"'+name+'" <'+this.from+">",
              to: to,
              bcc: replay,
              subject:subject,
              html: html,
            });
            
            return info.messageId.length>0;
          } catch (error) {
            
          }
          return false;
    }
}
export const mailer = new Mailer;