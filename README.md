# Weather Psychic

A simple weather app made using [neutralinojs](https://github.com/neutralinojs/neutralinojs).

## Setup

Obtain an [Open Weather Map API key](https://openweathermap.org/api).

Copy the _.env.example_ in the _weather-psychic_ subdirectory to _.env_ under the same directory.

```bash
cd weather-psychic
cp .env.example .env
```

Edit the **REACT_APP_OPEN_WEATHER_API_KEY** to match the key you obtained.

Install packages:

```bash
yarn install
```

## Building

Steps:

1. Ensure that the environment variables are well configured as per the _.env.example_.
2. Ensure that there is a _neutralino.js_ file in the _weather-psychic/public_.

Then execute:

```sh
yarn build
cd ..
```

This will compile the frontend code and assets to the resources folder.

## Running

```sh
cd ..
neu run
```
