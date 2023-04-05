const url = 'http://api.openweathermap.org/data/2.5/weather?q=DNIPRO&units=metric&APPID=5d066958a60d315387d9492393935c19';

const response = fetch(url);
response.then(data => {
    return data.json();
})
    .then(data => {

        document.querySelector('.js--form').addEventListener('input', (event) => {

            if (event.target.value != 0) {
                const searchParams = new URLSearchParams(url.split('?')[1]);
                searchParams.set('q', event.target.value);
                const newUrl = `${url.split('?')[0]}?${searchParams.toString()}`;

                const newResponse = fetch(newUrl);
                newResponse.then(data => {
                    return data.json();
                }).then(data => {
                    const city = data.name;
                    const description = data.weather[0].description;
                    const iconId = data.weather[0].icon;

                    const options = {
                        temp: data.main.temp,
                        tempMax: data.main.temp_max,
                        tempMin: data.main.temp_min,
                        pressure: data.main.pressure,
                        speed: data.wind.speed,
                        deg: data.wind.deg
                    }


                    _city.innerHTML = city;
                    _description.innerHTML = description;
                    showIcon(_icon, iconId);
                    _weatherBody.innerHTML = showOptions(options).innerHTML;
                })
            }
        })

        const _weatherWrapper = document.querySelector('.js--weather');
        const _city = _weatherWrapper.querySelector('.js--weather-city');
        const _description = _weatherWrapper.querySelector('.js--weather-description');
        const _weatherBody = _weatherWrapper.querySelector('.js--weather-body');
        const _icon = _weatherWrapper.querySelector('.js--weather-icon');

        const city = data.name;
        const description = data.weather[0].description;
        const iconId = data.weather[0].icon;

        const options = {
            temp: data.main.temp,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            pressure: data.main.pressure,
            speed: data.wind.speed,
            deg: data.wind.deg
        }


        _city.innerHTML = city;
        _description.innerHTML = description;
        showIcon(_icon, iconId);
        _weatherBody.innerHTML = showOptions(options).innerHTML;

        function showIcon(_icon, iconId) {
            const urlIcon = 'https://openweathermap.org/img/w/'
            _icon.setAttribute('src', urlIcon + iconId + '.png');
        }

        function showOptions(options) {
            const _optionsItem = document.createElement('div');
            for (let optionsKey in options) {
                const _newItem = document.createElement('div');
                _newItem.innerHTML = `${optionsKey} : ${options[optionsKey]}`;

                _optionsItem.append(_newItem);
            }
            return _optionsItem
        }
    });
