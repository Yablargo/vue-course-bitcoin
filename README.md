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
