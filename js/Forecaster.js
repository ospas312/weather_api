export class Forecaster {

    getAdvice(id, temp){
        switch (true){
            case ((id => 200) && (id <= 232)):
                return 'Будет гроза захватите зонт, а лучше сидите дома';
            case ((id => 300) && (id <= 321)):
                return 'Ожидается дождь захватите зонт'
            case ((id => 500) && (id <= 531)):
                return 'Возможен дождь не забудте зонт'
            case ((id == 600) || (id == 601)):
                return 'Небольшой снег'
            case(id == 602):
                return 'сильный снегопад, одевайтесь теплее'
            case ((id => 611) && (id <= 622)):
                return 'дождь со снегом, одевайтесь теплее'
            case ((id == 701) || (id <= 711)):
                return 'Возможен туман, соблюдайте дистацию за рулем'
            case ((id == 803) || (id == 804)):
                return 'Облачно, солнечные очки можно не брать'
            case((id => 800) && (id <= 802)&&(temp > 23)):
                return 'Ожидается хорошая погода не забудте очки'
            case((id => 800) && (id <= 802)&&(temp > 5)):
                return 'Ожидается хорошая погода'
        };
    }
}