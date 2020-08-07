debugger
const API_URL = 'https://swapi.dev/api/';
const FILMS_URL = 'films/';

let eachFilms = data => {
    data.results.map(result => {
        titlesFilms(result);
        planetsFilms(result);
    })
}

let titlesFilms = titlesResults => {
    console.log(`Title: ${titlesResults.title}`);
}

/* let dataPlanets = async urlPlanet => {
    try {
        let allPlanetInfo = await fetch(urlPlanet);
        let allPlanetInfoJson = await allPlanetInfo.json()
        return allPlanetInfoJson;
    }catch(error) {
        console.error(error);
    }
}
let planetsFilms = planetsResults => {
    let arrayPlanetsPromise = planetsResults.planets.map(planets => dataPlanets(planets))
    let arrayPlanetsInfo = Promise.all(arrayPlanetsPromise);
    let lengthPlanets = arrayPlanetsInfo.length;
    for(let i = 0; i <= lengthPlanets; i++) {
        console.log(arrayPlanetsInfo[i].name);
    }
    console.log(arrayPlanetsInfo[0]);
} */
let dataPlanets = async urlPlanet => {
    await fetch(urlPlanet)
    .then(res => res.json())
    .then(planets => console.log(planets.name));
}

let planetsFilms = async planetsResults => {
    await planetsResults.planets.map(planets => dataPlanets(planets));
}

fetch(`${API_URL}${FILMS_URL}`)
.then(res => res.json())
.then(dataFilms => eachFilms(dataFilms))
.catch(error => console.log(error))