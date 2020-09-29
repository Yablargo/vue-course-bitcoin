<template>
  <section class="section">
    <h1>Crypto prices</h1>
    <table class="">
      <thead>
        <tr class="">
          <th>#</th>
          <th>Name</th>
          <th>Market Cap</th>
          <th>Price</th>
          <th>Volume (24h)</th>
          <th>Circulating Supply</th>
          <th>Open (24h)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key, index) in coins" :key="key">
          <th>{{ index + 1 }}</th>
          <td>{{ key }}</td>
          <td>{{ value.USD.MKTCAP }}</td>
          <td>{{ value.USD.PRICE }}</td>
          <td>{{ value.USD.VOLUME24HOUR }}</td>
          <td>{{ value.USD.SUPPLY }}</td>
          <td>{{ value.USD.OPEN24HOUR }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      coins: (state) => state.price.coins,
    }),
  },
  async mounted() {
    await this.$store.dispatch("price/getCoins");
  },
};
</script>

<style></style>
