import moment from 'moment';
class Extra{
    public generateRandomString=(num:number) => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result= '';
        const charactersLength = characters.length;
        for ( let i = 0; i < num; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    public diff_minute(date1:string,date2:string){
        var now = moment(new Date(date1));
       
        var end = moment(date2); // another date
        var duration = moment.duration(now.diff(end));
        var minute = duration.asMinutes();
        return minute;
    }
    public dateNow=()=>{
        var now = moment(new Date());
        return now.format("YYYY-MM-DD HH:mm:ss");
    }
    public dateTimeNow=(string:number)=>{
        var a = new Date(string * 1000);
        var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours()<=9 ? "0"+a.getHours():a.getHours();
        var min = a.getMinutes()<=9 ? "0"+a.getMinutes():a.getMinutes();
        var sec = a.getSeconds()<=9 ? "0"+a.getSeconds():a.getSeconds();
        var time = year+'-'+month+'-'+date+' '+hour+':'+min+':'+sec;
        return this.dateFormat(String(time));
    }
    public dateFormat=(date:string)=>{
        var now = moment(new Date(date));
        return now.format("YYYY-MM-DD HH:mm:ss");
    }
}
export const extra = new Extra;