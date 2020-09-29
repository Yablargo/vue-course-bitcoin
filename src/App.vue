<template>
  <div id="app">Coins: {{ coins }}</div>
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
