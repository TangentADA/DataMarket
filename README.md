# Cryptocurrency App
Consolidating RESTFUL calls from the CoinGecko API into a React application. I'll be using v3 of the API (the most recent version at the time of starting this project) This app will be using ant design for UI. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Structure 
Generated with `tree` command.
```
.
├── API
│   └── index.js
├── ChartConfig
│   └── index.js
├── components
│   ├── App.css
│   ├── App.js
│   ├── Coins
│   │   ├── ReactCoinCommunityStats.js
│   │   ├── ReactCoinDetailSummary.js
│   │   ├── ReactCoinDeveloperStats.js
│   │   ├── ReactCoinMarketDetailedStats.js
│   │   ├── ReactCoinMarketStats.js
│   │   ├── ReactCoinScores.js
│   │   ├── ReactCoinsDetail.js
│   │   └── ReactCoinsList.js
│   ├── Empty
│   │   └── ReactEmpty.js
│   ├── Events
│   │   └── ReactEvents.js
│   ├── ExchangeRates
│   │   └── ReactExchangeRates.js
│   ├── Exchanges
│   │   └── ReactExchangesList.js
│   ├── General
│   │   ├── ReactAbout.js
│   │   └── ReactHome.js
│   ├── Global
│   │   └── ReactGlobal.js
│   ├── Navigation
│   │   ├── ReactFooter.js
│   │   ├── ReactHeader.js
│   │   └── ReactSider.js
│   └── StatusUpdates
│       └── ReactStatusUpdates.js
├── constants
│   └── index.js
├── images
│   ├── branding
│   │   └── CoinGecko.png
│   ├── flaticon
│   │   ├── 001-bitcoin.svg
│   │   ├── 001-chat.svg
│   │   ├── 002-bitcoin-1.svg
│   │   ├── 002-bitcoin.svg
│   │   ├── 003-bitcoin-2.svg
│   │   ├── 003-smartphone.svg
│   │   ├── 004-exchange.svg
│   │   ├── 005-idea.svg
│   │   ├── 006-binary.svg
│   │   └── worldwide.svg
│   └── logo
│       └── logo.png
├── index.js
├── redux_actions
│   └── index.js
├── redux_reducers
│   └── index.js
└── styles
    └── index.js
```

# Themes
The themes for this app will directly correlate to the api endpoints provided by the CoinGecko API. I want to split up the app into digestible React components in the following areas, which will most likely form part of a larger dashboard interface.

- Coins
- Exchanges
- Status Updates
- Exchange Rates
- Events
- Global

# Requirements (npm)
Requirements for this project can be found in the package.json. And can be installed with `npm install` from root of the project directory.

I aim to use the following packages:
**must have packages**
- antd (ui framework for react)
- react (front-end)
- react-router-dom (routing for react)
- chartjs (charting library)
- axios (graceful api calls)

**optional packages**
- redux (may need redux for state management if number of components grows)
- ant motion (animations for ant design ui)


# Tests

# Sources
- [The CoinGecko API](https://www.coingecko.com/en/api#)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)

# Steps to reproduce

```sh

git clone https://github.com/TangentADA/DataMarket.git

# install dependencies and start local server (make sure you have nvm and yarn installed beforehand)
nvm use
yarn
yarn start

# building
yarn build
```

## Preview

<a href="https://data-market-pipeline.herokuapp.com/" >Heroku Deployment</a>


## To Do

<ul>
  <li>[ ] login/signup authentication</li>
  <li>[ ] Watchlist</li>
  <li>[ ] Binding Server-Side</li>
  <li>[ ] Add total market information</li>
  <li>[ ] Search UI alignment & Functionality</li>
  <li>[ ] Move coin details to full page</li>
</ul>

