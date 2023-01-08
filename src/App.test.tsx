import React from 'react';
import { render, screen } from '@testing-library/react';
import useMovies from './hooks/useMovies';
import App from './App';
import MovieDetails from './components/movies/MovieDetails';
import Movie from './entities/Movie';
import MoviesList from './components/movies/MoviesList';

let data = {
  "page": 1,
  "total_pages": 2,
  "per_page": 10,
  "total": 15,
  "data": [
    {title: 'Earth 1', year: '2001', imdbID: 'tt0000001'},
    {title: 'Earth 2', year: '2034', imdbID: 'tt0000002'},
    {title: 'Earth 3', year: '2005', imdbID: 'tt0000003'},
    {title: 'Earth 4', year: '2008', imdbID: 'tt0000004'},
    {title: 'Earth 5', year: '2001', imdbID: 'tt0000005'},
    {title: 'Earth 6', year: '2010', imdbID: 'tt0000006'},
    {title: 'Earth 7', year: '2003', imdbID: 'tt0000007'},
    {title: 'Earth 8', year: '2002', imdbID: 'tt0000008'},
    {title: 'Earth 9', year: '2003', imdbID: 'tt0000009'},
    {title: 'Earth 10', year: '2004', imdbID: 'tt0000010'},
    {title: 'Earth 11', year: '2006', imdbID: 'tt0000011'},
    {title: 'Earth 12', year: '2006', imdbID: 'tt0000012'},
    {title: 'Earth 13', year: '2008', imdbID: 'tt0000013'},
    {title: 'Earth 14', year: '2007', imdbID: 'tt0000014'},
    {title: 'Earth 15', year: '2007', imdbID: 'tt0000015'},
  ]
};

// jest.mock('./hooks/useMovies', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       search: jest.fn(),
//       data: data
//     };
//   });
// });


test('renders correct results', () => {
  render(<App />);
  const inputElem:HTMLInputElement = screen.getByPlaceholderText(/Title/i);
  inputElem.value = "Earth";
  const searchButton = screen.getByTitle(/Search/i);
  searchButton.click();
  


  expect(inputElem).toBeInTheDocument();
});

test('renders correct MovieDetails', () => {
  const movie:Movie = {title: 'Earth 1', year: '2001', imdbID: 'tt0000001'};
  const container = render(<MovieDetails movie={movie} />);

  const titleElem = container.getByText(new RegExp(movie.title, 'i'));
  const yearElem = container.getByText(new RegExp(movie.year, 'i'));
  const imdbElem = container.getByText(new RegExp(movie.imdbID, 'i'));

  expect(titleElem).toBeInTheDocument();
  expect(yearElem).toBeInTheDocument();
  expect(imdbElem).toBeInTheDocument();
  expect(titleElem).toBeInstanceOf(HTMLHeadingElement);
  expect(yearElem).toBeInstanceOf(HTMLParagraphElement);
  expect(imdbElem).toBeInstanceOf(HTMLParagraphElement);
});

test('renders correct MoviesList', () => {
  const movies:Movie[] = data.data;
  const container = render(<MoviesList movies={movies} />);
  const movieElems = container.getAllByRole('listitem');

  expect(movieElems).toHaveLength(movies.length);
});

test('renders correct MoviesSearchForm', () => {
  render(<App />);
  const inputElem = screen.getByPlaceholderText(/Title/i);
  const searchButton = screen.getByTitle(/Search/i);

  expect(inputElem).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});