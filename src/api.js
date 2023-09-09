async function getData(city) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5384bb69bc2a4cf2878214847230809`
    try {
        const response = await fetch(api, { mode: "cors"})
        const data = convertData(await response.json())
        return data
    } catch (error) {
        alert (error)
        return;
    }
    
}

    return { getData };

