getCity();

const date = moment();
const currentDate = date.format("dddd D MMMM");

document.getElementById("today").innerHTML = currentDate;

async function getCity() {
    const cityres = await fetch(
        "https://geolocation-db.com/json/"
    );
    const city = await cityres.json();

    document.getElementById("today-temp").innerHTML = city.city;
}

