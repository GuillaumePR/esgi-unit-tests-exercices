import {getLukesFilms} from "../starwars.js";

function getFilms() {};
function getFilmTitle() {};

test('test1', () => {
  // arrange
  const expectedResult = ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "Revenge of the Sith", "The Force Awakens"];

  const getFilms = jest.fn(() => "https://swapi.py4e.com/api/films/1/");
  const getFilmTitle = jest.fn(() => "A New Hope");

  getFilms.mockImplementation(() => [
    "https://swapi.py4e.com/api/films/1/", 
    "https://swapi.py4e.com/api/films/2/", 
    "https://swapi.py4e.com/api/films/3/", 
    "https://swapi.py4e.com/api/films/6/", 
    "https://swapi.py4e.com/api/films/7/"]);

  getFilmTitle.mockImplementationOnce(() => "A New Hope")
  .mockImplementationOnce(() => "The Empire Strikes Back")
  .mockImplementationOnce(() => "Return of the Jedi")
  .mockImplementationOnce(() => "Revenge of the Sith")
  .mockImplementationOnce(() => "The Force Awakens");

  // act
  const callResults = getLukesFilms();

  // assert
  expect(callResults).toBe(expectedResult);
});
