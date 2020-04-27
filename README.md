# Webbpack Express Example App

The goal of this repo is be an example of a basic but functional app built on Express and Webpack.

If you want to follow along, start from master and look at the numbered branches of this project. Each one is a step along the path to creating a fully functional webpack setup. In each branch, there will be a documentation file that lists out the steps taken in that branch (each step should also match to a git commit if you look at the history) which you can use as a checklist when setting up your own projects.

## Get Up and Running

Fork this repo, then clone your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/webpack-express.git --
```

`cd` into your new folder and run:

- `npm install`
- `npm start` to start the app
- this app runs on localhost:3000, but you can of course edit that in server.js

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
