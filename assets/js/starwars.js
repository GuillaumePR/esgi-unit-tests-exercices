async function getFilms() {
    let response = await fetch("https://swapi.py4e.com/api/people/1");
    let luke = await response.json();
    return luke.films;
}

async function getFilmTitle(url) {
    let response = await fetch(url).json()
    return response.title;
}

export async function getLukesFilms() {
    let movieURLList = await getFilms();
    let movieList = [];
    for(movie in movieURLList) {
        let film = await getFilmTitle(movie);
        movieList.push(film);
    }
    return movieList;
}
