# About this Project

This project is submission 5 of the Udacity Frontend Developer Nanodegree course.

The application is a simple trip planner.
It contains a User Interface where the user can enter a destination city, a start date and a return date.
After submission, the user gets data about the weather at the given destination. Is the trip is planned to start during the next 16 day, he will get a weather forecast for the day of arrival, otherwise, he gets weather info from the current day at the given destination.
Additionally, the app displays an image of the given destination.

This is achieved by first getting the user input (destination city, start date, return date) at the client side, then sending a post request to the local express server, from where various apis are called to gather the needed information:

- http://api.geonames.org/
- https://api.weatherbit.io/
- https://pixabay.com/api

The gathered data is assembled in the server and then processed in the client again to update the UI.

Working on this project included:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Service workers
- Using APIs and creating requests to external urls
- Using environment variables
- Testing with Jest

## Environment variables

In order to avoid than personal API keys are available publicly when the project is pushed to Github, the access keys are stored as environment variables inside the file .env.
The .env file is prevented from beeing uploaded to github by adding '.env' to the .gitignore file.

## Get the project running

package.json contains four scripts: test, dev, start, and build.

- start starts the express server, which will run on port 5050
- dev will be so that you can take advantage of web dev server with its hotloading feature, running on port 8080
- running prod creates our dist folder
- test executes the included jest tests

To get webpack running:

1. run `npm run dev`,
2. run `npm run build` to get your dist folder created.

   Once that is created you can run `npm run dev` and `npm start` simultaneously to have hot loading of your project as well as a working express environment.

## author

Anna Magdalena Blöckner
