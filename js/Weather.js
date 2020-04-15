import {UnixTimeConvert} from "./Time.js";
import {Forecaster} from "./Forecaster.js";

const unixTimeConvert = new UnixTimeConvert();
const forecaster = new Forecaster();

const city = document.querySelector('.weather__city');
const temp_value =document.querySelector('.weather__info_temp-value');
const humidity_value = document.querySelector('.weather__info_humidity-value');
const wind_value = document.querySelector('.weather__info_wind-value');
const info_pres_value = document.querySelector('.weather__info_pres-value');
const info_sun = document.querySelector('.weather__info_sun');
const info_img = document.querySelector('.weather__info_img');
const info_description = document.querySelector('.weather__info_description');
const forecaster_value = document.querySelector('.weather__forecaster');

export class Weather {
    constructor (api, formEdit) {
        this.api = api;
        this.formEdit = formEdit
    }       
    getTemp(city) {
        this.api.getWeatherEdit(city)
            .then(result =>{
                this.getResult(result);
            })
            .catch((err) => {
                alert(err);
            })
    }
    getResult(result) {
        const timeUpSun = unixTimeConvert.getTime(result.sys.sunrise);
        const timeDownSun = unixTimeConvert.getTime(result.sys.sunset);
        const pres =  Math.round(result.main.pressure * 0.75006375541921);
        city.textContent = 'Город   ' + `${result.name}`;
        temp_value.textContent = Math.round(result.main.temp) + ' °C';
        humidity_value.textContent = `${result.main.humidity}` + ' %';
        wind_value.textContent = `${result.wind.speed}` + ' м/с';
        info_pres_value.textContent = (pres) + ' мм.рт.ст';
        info_sun.textContent = 'Восход солнца в ' + (timeUpSun) + '  Закат в ' + (timeDownSun);
        info_img.src = 'https://openweathermap.org/img/wn/' + `${result.weather[0].icon}` + '.png';
        info_description.textContent = `${result.weather[0].description}`[0].toUpperCase() + `${result.weather[0].description}`.slice(1);
        forecaster_value.textContent = forecaster.getAdvice(result.weather[0].id, Math.round(result.main.temp));
    }
}
