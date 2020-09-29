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
        <!-- loop for coins and display the value -->
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
