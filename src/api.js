const weather = (() => {
    function convertData(data) {
        const {
            name: cityName,
            main: { temp: temperature, feels_like: feelsLike, humidity },
            wind: { speed: windSpeed },
        } = data;
        return { cityName, temperature, feelsLike, humidity, windSpeed }
    }

    async function getData(city) {
        const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=092ee1348dd5e84068aba00e5cf9264c`
        try {
            const response = await fetch(api, { mode: "cors" })
            const data = convertData(await response.json())
            return data
        } catch (error) {
            alert (error)
            return;
        }
        
    }
    
        return { getData }
})();

export default weather;



