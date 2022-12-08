async function getFilms() {
    const response = await fetch("https://swapi.py4e.com/api/people/1");
    const luke = await response.json();
    return luke.films;
}

async function getFilmTitle(url) {
    const response = await fetch(url);
    const movieObject = await response.json();
    return movieObject.title;
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
