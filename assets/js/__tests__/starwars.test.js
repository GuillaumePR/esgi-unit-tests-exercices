import {getLukesFilms} from "../starwars.js";
import {jest} from '@jest/globals'

test('real api values returned working', async () => {
  // arrange
  const expectedResult = ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "Revenge of the Sith", "The Force Awakens"];
  const responses = {
    "https://swapi.py4e.com/api/people/1": { "films": [
      "https://swapi.py4e.com/api/films/1/", 
      "https://swapi.py4e.com/api/films/2/", 
      "https://swapi.py4e.com/api/films/3/", 
      "https://swapi.py4e.com/api/films/6/", 
      "https://swapi.py4e.com/api/films/7/"], 
    },
    "https://swapi.py4e.com/api/films/1/": { "title": "A New Hope", },
    "https://swapi.py4e.com/api/films/2/": { "title": "The Empire Strikes Back", },
    "https://swapi.py4e.com/api/films/3/": { "title": "Return of the Jedi", },
    "https://swapi.py4e.com/api/films/6/": { "title": "Revenge of the Sith", },
    "https://swapi.py4e.com/api/films/7/": { "title": "The Force Awakens", }
  }

  global.fetch = jest.fn((url) =>
    Promise.resolve({
      json: () => Promise.resolve(responses[url]),
    })
  );

  // act
  const callResults = await getLukesFilms();

  // assert
  expect(callResults).toStrictEqual(expectedResult);
});
