# Intro

1. check this branch [before-render-optimization](https://github.com/boostup/react-hooks-mui-todo-app/tree/before-render-optimization) : it is a functionning Todos App, but rendering isn't optimized. So this branch is just a snapshot for being able to quickly go back to that state of the app developpment, to ease comparing with the final code on the master branch.

Tutorial : [The Modern React Bootcamp (Hooks, Context, NextJS, Router) | Udemy](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14541216) (Videos #280 and up)

   There are multiple factors for which 'useless' rendering can be happening, but in essence, if what you pass to a component (via a context or not, it does not matter) changes, it triggers a re-render with the new values passed. So concretely, make sure that the objects or functions passed are not changing, ie: passing `<MyContext value={{someFunc}}>` will cause for the value of the context to be a different object everytime the context is re-rendered. Whereas `<MyContext value={someFunc}>` will be the same object (or function, in this example) being passed everytime, therefore not triggering any re-renders.

   Also, this is where React.memo finally makes sense. It is the equivalent of React.PureComponent, the later being for class-based components, while React.memo is for function-based components. They both avoid triggering re-renders when the values of the props passed don't change. This way, passing same props with same values do not trigger re-rendering. Again, only when the values of the props change will there be a re-render.

   As per the [React doc](https://reactjs.org/docs/react-api.html#reactmemo) : `« If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result.»`

   The branch master includes a version of the app where the optimizations have been implemented.

2. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
