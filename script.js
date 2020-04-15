import { Weather } from "./js/Weather.js";
import {Api} from "./js/Api.js";

const formEdit = document.forms.edit;
const api = new Api({
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
    appid: 'ff88d64ac348fdb7708ad27b0fca6420',
});
const weather = new Weather(api, formEdit);
weather.getTemp('Москва');

formEdit.addEventListener('submit', (event) => {
    event.preventDefault();
    weather.getTemp(event.target.input.value);
});
