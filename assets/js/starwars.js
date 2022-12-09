import fetch from 'node-fetch';

async function getFilms() {
    return await fetch("https://swapi.py4e.com/api/people/1").then((response) => {
        if(response.status <= 199 && response.status >= 300) 
            throw "Failed to fetch people ressource from SWAPI. Please try again later.";
        return response.json();
    }).then((json) => { return json.films; });
}

async function getFilmTitle(url) {
    return await fetch(url).then((response) => {
        if(response.status <= 199 && response.status >= 300) 
            throw "Failed to fetch film ressource from SWAPI. Please try again later.";
        return response.json();
    }).then((json) => { return json.title; });
}

export async function getLukesFilms() {
    const movieURLList = await getFilms();
    let movieList = [];
    for(const movie of movieURLList) {
        const film = await getFilmTitle(movie);
        movieList.push(film);
    }
    return movieList;
}

console.log(await getLukesFilms());