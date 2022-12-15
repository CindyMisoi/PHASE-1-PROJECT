# Movie App using HTML, CSS, and Javascript

Let's build a Trending Movies app using HTML, CSS, and Javascript 📽.The movie’s data used in the project is fetched from themoviedb.org API.

## Project setup

The movie’s data used in the project is fetched from themoviedb.org API.There are several steps that will enable one to use this API:

1. Go to the movie Database API site
2. Create an account on TMDB
3. Click the "API" link in the left hand side bar of your account page.
4. Add your link to the index.js for fetching resources purposes

### Folder Structure of the project

index.html — contains the HTML layout which defines the element structure that would be shown on the page.

style.css- contains CSS code for styling. Using CSS we can style the different portions to make them more visually appealing.

script.js — contains Javascript code to fetch the API data and to represent it on browser.

favicon.io — Browsers that provide favicon support typically display a page’s favicon in the browser’s address bar

### Deliverables

_Javascript logic_

Below functions are defined in the javascript code,

getMovies() — A function to fetch movies from API and returns the results using fetch function.The results will be passed to showMovies() function.

showMovies() — A function to showcase the results in the browser which basically inserts the HTML code dynamically.The data to this function is passed from the getMovies() function.
getClassByRate() — A function which returns the color based on movie rating obtained from API. This color is used in CSS to choose the color of the movie rating text.

getClassByRate() — A function which returns the color based on movie rating obtained from API. This color is used in CSS to choose the color of the movie rating text.

An EventListener for search of movies.Once you enter the movie name in the search bar and by clicking on enter will actually submit the form and this event listerner will be triggered.The movie matching the name entered in the search bar will be fetched from the API and it will automatically display all the related title on the list.

An EventListner to logout off you page.On clicking the logout page a blank page with only "You are logged out!" text is shown"

_css_
Here we are arranging the list of the movies obtained from the API using flex . The img tag which holds image of the movie,the movie-info div class which holds information of the movie like movie name and rating ,the div class overview which has overview of the movie is inserted in the javascript code dynamically and not defined in the HTML file.

Just hovering on the movie banner should actually show the overview.For that we are using transform: translateY(0);

```
Meta
----

Author:
   * **Cynthia Jepkosgei** - *Initial work* - https://git# Movie App using HTML, CSS, and Javascript

Let's build a Trending Movies app using HTML, CSS, and Javascript 📽.The movie’s data used in the project is fetched from themoviedb.org API.

## Project setup
The movie’s data used in the project is fetched from themoviedb.org API.There are several steps that will enable one to use this API:

1. Go to the movie Database API site
2. Create an account on TMDB
3. Click the "API" link in the left hand side bar of your account page.
4. Add your link to the index.js for fetching resources purposes

### Folder Structure of the project

index.html — contains the HTML layout which defines the element structure that would be shown on the page.

style.css- contains CSS code for styling. Using CSS we can style the different portions to make them more visually appealing.

script.js — contains Javascript code to fetch the API data and to represent it on browser.

favicon.io — Browsers that provide favicon support typically display a page’s favicon in the browser’s address bar

### Deliverables
*Javascript logic*

Below functions are defined in the javascript code,

getMovies() — A function to fetch movies from API and returns the results using fetch function.The results will be passed to showMovies() function.

showMovies() — A function to showcase the results in the browser which basically inserts the HTML code dynamically.The data to this function is passed from the getMovies() function.
getClassByRate() — A function which returns the color based on movie rating obtained from API. This color is used in CSS to choose the color of the movie rating text.

getClassByRate() — A function which returns the color based on movie rating obtained from API. This color is used in CSS to choose the color of the movie rating text.

An EventListener for search of movies.Once you enter the movie name in the search bar and by clicking on enter will actually submit the form and this event listerner will be triggered.The movie matching the name entered in the search bar will be fetched from the API and it will automatically display all the related title on the list.

An EventListner to logout off you page.On clicking the logout page a blank page with only "You are logged out!" text is shown"

*css*
Here we are arranging the list of the movies obtained from the API using flex . The img tag which holds image of the movie,the movie-info div class which holds information of the movie like movie name and rating ,the div class overview which has overview of the movie is inserted in the javascript code dynamically and not defined in the HTML file.

Just hovering on the movie banner should actually show the overview.For that we are using transform: translateY(0);

```

Meta

----

Author:

- **Cynthia Jepkosgei** - _Initial work_ - https://github.com/CindyMisoi/

Status:
maintained, and is currently in development

Usage

---

## License

This project is licensed under the MIT License

Documentation

---

Copyright © 2022 Cynthia Jepkosgei. All rights reserved.

