# React Ad Dashboard SPA Challenge

The Ad Dashboard is a simple SPA challenge completed in around 3.5 hours for the bare bone of the project. I spend some extra time on refactoring the code, testing the app and add responsive styling to some sections. I bootstraped the app with [Create React App](https://github.com/facebook/create-react-app), becasue it is a recommendation from the react docs and facilitates the initialization of a bare bone project.


## Project Structure

I initially drew a quick wireframe as a visual guide to pre-plan a layout and facilitate a mental roadmap of which react hooks and features I would use in the process.

![The initial Wireframe](./docs/images/ux-wireframe.jpg)

I refactored and organized the code in to the following structure:

- root
    - public
    - src
        - api: consists of the api service provided for the challenge
        - components: three main components of the layout with each of their child components
            -   Line Chart
            -   Navbar
        - store: The global state of our application, functional logics, and where api calls merge into state.
        - layout: The folder that would consist different application layout, only consisting a singe default layout in this project.
        - types: global manually written giphy typescript type modules.
        - views: page components
        - utils: utility functions for string manipulation

### Demo

please run install by `npm install` or `yarn install`, and then look into the `available scripts` section to launch a dev server for preview. 

### Notes

* Overall, I tried to include intention-revealing names for all variables to keep the code undestandable for others.
* I tested the app for responsiveness on 14 development device screens, expecting it be functionally responsive. 


## Available Scripts

In the project directory, you can run:

### `npm run start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test` or `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).