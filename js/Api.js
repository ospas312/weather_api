export class Api {
    constructor({baseUrl, appid}){
        this.baseUrl = baseUrl;
        this.appid = appid;
    }
    getWeatherEdit(city){
        return fetch(`${this.baseUrl}?lang=ru&appid=${this.appid}&q=${city}&units=metric`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
        .catch(() => {
            throw new Error('Сервис не доступен');
        });
    }
}