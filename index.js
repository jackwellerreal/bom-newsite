/*
This is a redesign concept made by @what-question-mark on Github
*/

setTodayWeather("brisbane"); // Make sure it is all in lower case
setTodayCities();

async function setTodayWeather(city) {
    const weatherres = await fetch(
        `https://what-question-mark.github.io/bom-newsite/data/${city}.json`
    );
    const weather = await weatherres.json();

    // const time = moment();
    const time = moment(weather.location.localtime, 'YYYY-MM-DD HH:ss');
    const currentTime = time.format("HH:mm, dddd D MMMM");

    document.getElementById("today-time").innerHTML = currentTime;
    document.getElementById("today-city").innerHTML = "Brisbane";

    document.getElementById(
        "today-temp"
    ).innerHTML = `${weather.current.temp_c}°C`;
    document.getElementById(
        "today-temp-feels"
    ).innerHTML = `Feels like ${weather.current.feelslike_c}°C`;

    document.getElementById(
        "today-wind"
    ).innerHTML = `${weather.current.wind_kph} kph (${weather.current.wind_dir})`;
    document.getElementById(
        "today-humidity"
    ).innerHTML = `${weather.current.humidity}%`;
    document.getElementById(
        "today-percipitation"
    ).innerHTML = `${weather.current.precip_mm}mm`;
    document.getElementById(
        "today-gust"
    ).innerHTML = `${weather.current.gust_kph} kph`;
    document.getElementById("today-uv").innerHTML = `${parseFloat(
        weather.current.uv
    )}`;
    document.getElementById(
        "today-pressure"
    ).innerHTML = `${weather.current.pressure_mb} mb`;
}

async function setTodayCities() {
    const cities = [
        "sydney",
        "melbourne",
        "brisbane",
        "perth",
        "adelaide",
        "hobart",
        "canberra",
        "darwin",
    ];

    for (let city of cities) {
        const weatherres = await fetch(
            `https://what-question-mark.github.io/bom-newsite/data/${city}.json`
        );
        const weather = await weatherres.json();

        document.getElementById(
            `today-other-${city}-temp`
        ).innerHTML = `${weather.current.temp_c}°C`;
        document.getElementById(
            `today-other-${city}-wind`
        ).innerHTML = `${weather.current.wind_kph}kph (${weather.current.wind_dir})`;
        document.getElementById(
            `today-other-${city}-condition`
        ).innerHTML = weather.current.condition.text;
        document.getElementById(
            `today-other-${city}-precipitation`
        ).innerHTML = `${weather.current.precip_mm}mm`;
    }
}
