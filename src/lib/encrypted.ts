import bcrypt from 'bcryptjs';
class Encrypted{
    // cifrado
    public encriptarBcrypt=async(dato:string)=>{
        var BCRYPT_SALT_ROUNDS = 10;
        return  bcrypt.hash(dato, BCRYPT_SALT_ROUNDS);
    }

    public compareBcrypt=async(clave:string,hash:string)=>{
        return  bcrypt.compare(clave, hash);
    }
    // fin cifrado
}
export const encrypted = new Encrypted;