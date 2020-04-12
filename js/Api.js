export class Api {
    constructor({baseUrl, baseCity, appid}){
        this.baseCity = baseCity;
        this.baseUrl = baseUrl;
        this.appid = appid;
    }
    getWeatherMain(){
        return fetch(`${this.baseUrl}?lang=ru&appid=${this.appid}&q=${this.baseCity}&units=metric`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
            throw new Error('Сервис не доступен');
        });
    }
    getWeatherEdit(city){
        return fetch(`${this.baseUrl}?lang=ru&appid=${this.appid}&q=${city}&units=metric`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
            throw new Error('Сервис не доступен');
        });
    }
}