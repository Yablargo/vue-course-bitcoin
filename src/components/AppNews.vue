<template>
  <div>
    <h1>Crypto News</h1>
    <div
      class="card"
      v-for="(item, i) in news"
      :key="i"
      style="margin-bottom: 3em;"
    >
      <img class="card-img-top" :src="item.imageurl" />
      <div class="card-body">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">
          Date published: {{ item.published_on | unixToDate }}
        </p>
        <p class="card-text">
          {{ item.body }}
        </p>
        <a :href="item.url" class="btn btn-primary" target="_blank">Read</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      news: (state) => state.news.news,
    }),
  },
  async mounted() {
    await this.$store.dispatch("news/getNews");
  },
};
</script>
