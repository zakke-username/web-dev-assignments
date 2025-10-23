let numMovies = parseInt(prompt('Enter the number of movies you want to rate:'));
let movies = [];

for (let i = 1; i <= numMovies; i++) {
  movies.push({
    title: prompt(`Enter title of movie #${i}:`),
    rating: parseFloat(prompt(`Enter rating (1-5) of movie #${i}`)),
  });
}

movies.sort((a, b) => b.rating - a.rating);

document.querySelector('#highest-rated').innerText = `Highest rated movie: ${movies[0].title} (${movies[0].rating}/5)`;

let list = document.querySelector('#list');
for (let movie of movies) {
  let item = document.createElement('li');
  item.innerText = `${movie.title} (${movie.rating}/5)`;
  list.appendChild(item);
}
