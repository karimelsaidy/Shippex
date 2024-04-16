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

## Style Guidelines

- here we depend on design system tokens and figmagic
    (check from here "https://github.com/mikaelvesavuori/figmagic")
- This app using tailwind for style
- This app uses the popular Airbnb style guidelines which is enforced by Eslint.
- It also uses some additional rules from popular eslint configurations (see `.eslintrc.js`).
like Don't use default exports. [Read this.](https://basarat.gitbook.io/typescript/main-1/defaultisbad) and ...etc

## Validation before push to git

- here we use combination of husky and lint staged for be sure that every thing is ok 
  before push to git branch (typescript errors, and eslint rules that exist in eslintrc.js)
  (https://tech.groww.in/maintain-code-consistency-using-eslint-prettier-husky-and-lint-staged-a657083d461b)


## convert from Staging to Production
  - change variables value from staging to production in (./env)
  