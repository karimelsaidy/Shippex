# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

# using Yarn
yarn android


### For iOS

#  using Yarn
yarn ios


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.


## Structure

This app is broken into different modules. Each module is broken into the following folders:
- env
- src
  - assets
    - animations
    - animationHooks
    - fonts
    - icons
    - images
    - translation
    - SvgComponents
  - components
  - config
  - hooks
  - i18n
  - navigation
  - screens
  - services
  - storage
  - store
  - types
  - utils
- tokens
- Here I am trying hard to separate the logic from the UI so that I can use the UI easily afterwards, whether in the same application or in another application so I try to separate one component into several separate components

## Style Guidelines

- here we depend on design system tokens and figmagic
    (check from here "https://github.com/mikaelvesavuori/figmagic")
- This app using tailwind for style
- This app uses the popular Airbnb style guidelines which is enforced by Eslint.
- It also uses some additional rules from popular eslint configurations (see `.eslintrc.js`).
like Don't use default exports. [Read this.](https://basarat.gitbook.io/typescript/main-1/defaultisbad) and ...etc
- here we prefer fonts than images because of perofrmance and simplicity and app bundle and for this we use icoomon 
to create a custom icons font [icoomoon](https://icomoon.io/app/#/select)
- for svg if it's a static files and will not be changed frequently we can use here native svg support rather than react-native-svg 
- for component and Dependability I prefer to build everything to reduce dependence on changing libraries and update problems after that, and then use that component in other projects, but depending on the time available for the project, whether this is allowed or not.
 

## Validation before push to git

- here we use combination of husky and lint staged for be sure that every thing is ok 
  before push to git branch (typescript errors, and eslint rules that exist in eslintrc.js)
  (https://tech.groww.in/maintain-code-consistency-using-eslint-prettier-husky-and-lint-staged-a657083d461b)


## convert from Staging to Production
  - change variables value from staging to production in (./env)
