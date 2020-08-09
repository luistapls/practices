const fetch = require('node-fetch');
const fs = require('fs');

const basicInfo = async urlMaster => {
    const cle = await fetch(urlMaster);
    const cleJson = await cle.json();

    const episodesURL1 = cleJson.episodes;
    const infoEpisodes1 = await fetch(episodesURL1);
    const infoEpisodes1Json = await infoEpisodes1.json();
    const array1 = infoEpisodes1Json.results;

    const episodesURL2 = infoEpisodes1Json.info.next;
    const infoEpisodes2 = await fetch(episodesURL2);
    const infoEpisodes2Json = await infoEpisodes2.json();
    const array2 = infoEpisodes2Json.results;

    const arrayEpisodes = array1.concat(array2);

    const results = await allEpisodes(arrayEpisodes)
    fs.writeFile(`${__dirname}/example.json`, JSON.stringify(results), (err) => console.log(err))
}

const allEpisodes = results => {
    const arrayData = results.map(episode => {
        const data = {
            name: episode.name,
            air_date: episode.air_date,
            characters: episode.characters 
        }
        return data;
    })
    return arrayData;
}

/* const allCharacters = arrayURLCharacter => {
    const arrayCharacters = arrayURLCharacter.map(async urlCharacter => {
        const infoCharacter = await fetch(urlCharacter);
        const infoCharacterJson = await infoCharacter.json(); 
        const dataCharacter = {
            nameCharacter: infoCharacterJson.name
        }
        return dataCharacter; 
    })
    return arrayCharacters;
    
} */

basicInfo('https://rickandmortyapi.com/api/');