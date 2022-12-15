# Movie App using HTML, CSS, and Javascript

Let's build a Trending Movies app using HTML, CSS, and Javascript 📽.The movie’s data used in the project is fetched from themoviedb.org API.

## Project setup
The movie’s data used in the project is fetched from themoviedb.org API.There are several steps that will enable one to use this API:

1. Go to the movie Database API site
2. Create an account on TMDB
3. Click the "API" link in the left hand side bar of your account page.


### Deliverables
*Javascript logic*

Below functions are defined in the javascript code,

getMovies() — A function to fetch movies from API and returns the results using fetch function.The results will be passed to showMovies() function.

showMovies() — A function to showcase the results in the browser which basically inserts the HTML code dynamically.The data to this function is passed from the getMovies() function.
getClassByRate() — A function which returns the color based on movie rating obtained from API. This color is used in CSS to choose the color of the movie rating text.

An EventListener for search of movies.Once you enter the movie name in the search bar and by clicking on enter will actually submit the form and this event listerner will be triggered.The movie matching the name entered in the search bar will be fetched from the API and it will automatically display all the related title on the list.
