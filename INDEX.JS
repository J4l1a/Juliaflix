
import {movies} from './movies.js';
document.getElementById('filmForm').addEventListener('submit', function (event) {
  event.preventDefault(); 
  let age = parseInt(document.getElementById('age').value);
  let categories =document.querySelectorAll('input[name="category"]:checked");
  let selected Categories = [];
  for (let i=0; i<categories.length; i++) {
    selected Categories.push(categories[i].value);

  let filteredMovies;
  if (age >= 1 && age <= 9){
    filtered Movies = movies.filter(
);
(movie) =>
  movie.ageRating <= 9 && selected Categories.includes(movie.genre)
} else {
  filteredMovies = movies.filter(
    (movie) =>
      selected Categories.includes(movie.genre) && movie.ageRating <= age
 );
}
let movieResults = document.getElementById('movieResults');
movieResults.innerHTML = ";

for (let i = 0; i < filtered Movies.length; i++) {
  let movie = filteredMovies[i];
  let movieDiv = document.createElement('div');
  movieDiv.classList.add('movie');
  movieDiv.innerHTML =
    <h3>${movie.title}</h3>
    <p><strong>Gênero:</strong> ${movie.genre}</p>
    <p><strong>Sinopse:</strong> ${movie.synopsis}</p>
    <iframe width="560" height="315" src="${movie.trailer}"
   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media
picture-in-picture" allowfullscreen></iframe>
 `;
  movieResults.appendChild(movie Div);
}
if (filteredMovies.length === 0) {
   movieResults.innerHTML = '<p>Nenhum filme encontrado para as categorias
selecionadas.</p>';
}
});
