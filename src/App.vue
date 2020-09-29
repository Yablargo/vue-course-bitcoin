<template>
  <div id="app" class="container">
    <ul class="nav nav-pills">
      <router-link tag="li" to="/" exact active-class="active"
        ><a>Home</a></router-link
      >

      <router-link
        class="nav-item"
        tag="li"
        to="/news"
        exact
        active-class="active"
        ><a>News</a></router-link
      >
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
