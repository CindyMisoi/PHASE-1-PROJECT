//url specifying the pages
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";

//this url is combined with the poster_path to give the path to the poster image
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

//url for searching movies
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const logout = document.getElementById("logout")
const search = document.getElementById("search");
const login = document.getElementById("login--form");
const header = document.getElementById("header");
header.style.visibility = "hidden";

//fetch fav movies function

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

//login form event listener
login.addEventListener("submit", loginFilmland);

//login function
function loginFilmland(e) {
  e.preventDefault();
  getMovies(API_URL);
  login.remove();
  header.style.visibility = "visible";
}

//render movies to the DOM
function showMovies(data) {
  main.innerHTML = "";

  //movie iteration
  data.forEach((movie) => {
    //destructuring results object
    const { poster_path, vote_average, title, overview } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    <img
      src="${IMGPATH + poster_path}"
      alt="${title}"
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview:</h3>
      ${overview}
    <div>`;
    main.appendChild(movieElement);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
// search form event listner 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }

});

//logout event listener
logout.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(`You are logged out`);
  main.remove()
  header.remove()
});

