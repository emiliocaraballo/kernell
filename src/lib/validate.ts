
export class Validate{

    public validateData=(type:string,str:any,lengthmin=0,lengthmax=0,status=false)=>{
        var message="";
        var regExp;
        var res=true;
        switch(type) {
            case 'string': {
                if(!(typeof str=="string")){str="";}
                regExp = new RegExp(/^[a-zA-Z0-9ñÑáàäâÁÀÂÄéèëêÉÈÊËÊíìïîÍÌÏÎóòöôÓÒÖÔÓúùüûÚÙÛÜç°,;()Ç?:@+-_#.~"' \s]+$/g);
                res = regExp.test(str);
               break; 
            }
            case 'mail': { 
                if(!(typeof str=="string")){str="";}
                regExp = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
                res = regExp.test(str);
               break; 
            } 
            case 'number': { 
                if(!(typeof str=="number")){str="";}
                regExp = new RegExp(/^[0-9]+$/g);
                res = regExp.test(str);
               break; 
            } 
            case 'url': { 
                if(!(typeof str=="string")){str="";}
                regExp =  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                res = regExp.test(str);
               break; 
            } 
            case 'real': { 
                if(!(typeof str=="number")){str="";}
                regExp =  /^[0-9]+([.][0-9]+)?$/g;
                res = regExp.test(str);
               break; 
            } 
            case 'password': { 
                if(!(typeof str=="string")){str="";}
                regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                res = regExp.test(str);
               break; 
            } 
            case 'date': { 
                if(!(typeof str=="string")){str="";}
                var regEx = /^\d{4}-\d{2}-\d{2}$/;
                if(!str.match(regEx)){
                    res=false;
                }
                if(res){
                    var d = new Date(str);
                    if(Number.isNaN(d.getTime())) {
                        res=false;
                    }else{
                        res=d.toISOString().slice(0,10) === str;
                    }
                }
               break; 
            } 
            case 'datetime': { 
                if(!(typeof str=="string")){str="";}
                var regEx = /^\d\d\d\d-([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01])) (20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d$/g;
                if(!str.match(regEx)){
                    res=false;
                }
                if(res){
                    var date=str.split(" ")[0];
                    var hora=str.split(" ")[1];
                    var d = new Date(date);    
                    if(Number.isNaN(d.getTime())){
                        res=false;
                    }else{
                        res=d.toISOString().slice(0,10) === date;
                    }

                    if(res){
                        var regEx = /(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/;
                        if(!hora.match(regEx)){
                            res=false;
                        }
                    }

                }
               break; 
            } 
            case 'time': { 
                if(!(typeof str=="string")){str="";}
                var regEx = /(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/;
                if(!str.match(regEx)){
                    res=false;
                }
            }
        }
        if(!(str.length>=lengthmin) && lengthmin>0){
            message="minimo tiene que ser de "+lengthmin+" caracteres.";
         }
         if(!(str.length<=lengthmax) && lengthmax>0){
            message="maximo tiene que ser de "+lengthmax+" caracteres.";
         }
         if(!res){
            message="dato invalido.";
         }

         if(!status){
            return res;
         }else{
            return {
             ok:res,
             message:message
            };
         }
    }
}