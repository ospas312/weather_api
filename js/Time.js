export class UnixTimeConvert {

    getTime(unixTime){
        let date = new Date(unixTime * 1000);
        let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(); 
        let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let time =  hour + ':' + min + ':' + sec;
        return time;
    }
}
