import {UnixTimeConvert} from "./Time.js";
import {Forecaster} from "./Forecaster.js";

const unixTimeConvert = new UnixTimeConvert();
const forecaster = new Forecaster();


export class Weather {
    constructor (api, formEdit) {
        this.api = api;
        this.formEdit = formEdit
    }
    mainTemp() {
        this.api.getWeatherMain()
            .then(result =>{
                let timeUpSun = unixTimeConvert.getTime(result.sys.sunrise);
                let timeDownSun = unixTimeConvert.getTime(result.sys.sunset);
                let pres =  Math.round(result.main.pressure * 0.75006375541921);
                document.querySelector('.weather__city').textContent = 'Город    ' + `${result.name}`;
                document.querySelector('.weather__info_temp-value').textContent = Math.round(`${result.main.temp}`) + ' °C';
                document.querySelector('.weather__info_humidity-value').textContent = `${result.main.humidity}` + ' %';
                document.querySelector('.weather__info_wind-value').textContent = `${result.wind.speed}` + ' м/с';
                document.querySelector('.weather__info_pres-value').textContent = (pres) + ' мм.рт.ст';
                document.querySelector('.weather__info_sun').textContent = 'Восход солнца в ' + (timeUpSun) + '  Закат в ' + (timeDownSun);
                document.querySelector('.weather__info_img').src = 'https://openweathermap.org/img/wn/' + `${result.weather[0].icon}` + '.png';
                document.querySelector('.weather__info_description').textContent = `${result.weather[0].description}`[0].toUpperCase() + `${result.weather[0].description}`.slice(1);
                document.querySelector('.weather__forecaster').textContent = forecaster.getAdvice(result.weather[0].id, Math.round(result.main.temp));
            })
            .catch((err) => {
                console.log(err);
                alert('Сервис не доступен');
            })
    }
    getTemp(event) {
        event.preventDefault();
        this.api.getWeatherEdit(event.target.input.value)
            .then(result =>{
                let timeUpSun = unixTimeConvert.getTime(result.sys.sunrise);
                let timeDownSun = unixTimeConvert.getTime(result.sys.sunset);
                let pres =  Math.round(result.main.pressure * 0.75006375541921);
                document.querySelector('.weather__city').textContent = 'Город     ' + `${result.name}`;
                document.querySelector('.weather__info_temp-value').textContent = Math.round(result.main.temp) + ' °C';
                document.querySelector('.weather__info_humidity-value').textContent = `${result.main.humidity}` + ' %';
                document.querySelector('.weather__info_wind-value').textContent = `${result.wind.speed}` + ' м/с';
                document.querySelector('.weather__info_pres-value').textContent = (pres) + ' мм.рт.ст';
                document.querySelector('.weather__info_sun').textContent = 'Восход солнца в ' + (timeUpSun) + '  Закат в ' + (timeDownSun);
                document.querySelector('.weather__info_img').src = 'https://openweathermap.org/img/wn/' + `${result.weather[0].icon}` + '.png';
                document.querySelector('.weather__info_description').textContent = `${result.weather[0].description}`[0].toUpperCase() + `${result.weather[0].description}`.slice(1);
                document.querySelector('.weather__forecaster').textContent = forecaster.getAdvice(result.weather[0].id, Math.round(result.main.temp));
            })
            .catch((err) => {
                console.log(err);
                alert('Сервис не доступен');
            })
    }
}
