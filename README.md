# mapapps-custom-nls

This project demonstrates how to build a custom language bundle.

## Build Status
[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-custom-nls/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-custom-nls/actions/workflows/devnet-bundle-snapshot.yml)

## Installation Guide
⚠️**Requirement: map.apps 4.18.1**

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```

## Preparation

### Preparation of map.apps

Prepare `application.properties` for the additionl language
```properties
client.config.supportedLocales=en,de,<your language code>
```

To set the map.apps default language change the following property accordingly:
```properties
client.config.defaultLocale=<your language code>
```

In order to apply the new bundle add the following property:
```properties
appservice.default.bundles=system,templatelayout,language-pack
```
Thus the bundle will be loaded with every app automatically.

### Preparation of language-pack project

* Rename folder `mapapps-custom-nls\src\main\js\bundles\language-pack\nls\en` with your country code, e.g. `mapapps-custom-nls\src\main\js\bundles\language-pack\nls\fr`
* Edit file `mapapps-custom-nls\src\main\js\bundles\language-pack\nls\bundle.js` and replace `en` with your country code (here: `fr`)
```js
module.exports = {
    root: {},
    "fr": true
};
```
* Add your translations to file `mapapps-custom-nls\src\main\js\bundles\language-pack\nls\fr\bundle.js`
