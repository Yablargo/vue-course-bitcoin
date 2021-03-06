# 1. Development setup using vue-cli

```
vue create vue-course-bitcoin
cd vue-course-bitcoin
npm run serve
```

- Delete components and App.vue template to start fresh.
- Install axios `npm install --save axios`
- Install vue-router and vuex `npm install --save vue-router vuex`

## Project architecture

We're going to build 2 components:

- A component to display our current price and trading info.
- A component to display latest news on cryptocurrencies.

## 2. Vuex store to get API response and save to data

- We'll use this API: https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,USDT,DASH&tsyms=USD
- Open this in your browser and study the output

### 2.1 Create price Vuex store

- Create a store module for price
- Use `mapState` to load the coins data into the App.vue

### 2.2 Display data in a table

- create a new component 'AppPrice.vue'
- move the code from App.vue into AppPrice.vue
- setup vue-router

In this component, we’re going to display:

- price
- the market cap
- the volume
- the open for the last 24 hours
- the circulating supply for the five different currencies

The 5 currencies are:

1. Bitcoin (BTC).
2. Ethereum (ETH).
3. Dash (DASH).
4. Dogecoin (DOGE).
5. Theter (USDT).

- Create a `<table>` to display the coins data.

## 3. CSS styling

- Include Bootstrap CDN.
- Format the table to display properly
- Add container class in App.vue

## 4. Navigation bar

- Create a new component 'AppNews.vue'
- Update routes.js
- Create nav bar to switch routes

## 5. News component

- Create a new News store first to download the latest news.
- API URL: https://min-api.cryptocompare.com/data/v2/news/?lang=EN
- Study the response of this API.
- Create a card to display title, body and date published (published_on)
- Create a button to navigate to the URL source.
- Create a `unixToDate` filter to format the date published from unix to datetime.

## 6. Realtime data visualization with Socket

`npm install --save chart.js express socket.io socket.io-client vue-chartjs`

- Copy server.js
- run `node server.js` to start socket io server.

Create a server.js code for a socket.io app.
