debugger
const API_URL = 'https://swapi.dev/api/';
const FILMS_URL = 'films/';

let eachFilms = data => {
    let numberFilms = data.count - 1;
    for(let i = 0; i <= numberFilms; i++) {
        let results = data.results[i];
        titlesFilms(results);
        planetsFilms(results);
    }
}

let titlesFilms = titlesResults => {
    console.log(`Title: ${titlesResults.title}`);
}

let planetsFilms = planetsResults => {
    let arrayPlanetsPromise = planetsResults.planets.map(planets => dataPlanets(planets))
    let arrayPlanetsInfo = Promise.all(arrayPlanetsPromise);
    console.log(arrayPlanetsInfo);
}

let dataPlanets = async urlPlanet => {
    let allPlanetInfo = await fetch(urlPlanet);
    let allPlanetInfoJson = await allPlanetInfo.json()
    return allPlanetInfoJson;

}

fetch(`${API_URL}${FILMS_URL}`)
.then(res => res.json())
.then(dataFilms => eachFilms(dataFilms))
.catch(err => console.log('ERRROR!1'))