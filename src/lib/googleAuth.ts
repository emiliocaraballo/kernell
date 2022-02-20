import speakeasy from 'speakeasy';
import qrcode from 'qrcode';
class GoogleAuth{
     // google autenticador

     public checkGoogleAuth=(code:string,secret:string)=>{
        const check=speakeasy.totp.verify({
            secret:secret,
            encoding:'ascii',
            token:code
        });
        return check;
    }

    public generateGoogleAuth=async(text:string)=>{
        var secret = speakeasy.generateSecret({
            name:process.env.NAME_PROYECT+"("+text+")"
        });
        var token=secret.ascii;
        var otpauth_url=secret.otpauth_url;
        var tex=secret.otpauth_url as string;
        var imagen=await qrcode.toDataURL(tex);
        return {token:token,otpauth_url:otpauth_url,imagen:imagen};
    }
    // fin google autenticador
}
export const googleAuth = new GoogleAuth;