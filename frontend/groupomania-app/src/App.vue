<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Navigation.vue";
export default {
    name: "app",
    components: {
        Nav,
    },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  justify-content: center;
  
}

#nav {
  a {
    font-weight: bold;
    color: white;
    font-size: 1.2rem;

    &.router-link-exact-active {
      color: #FD2900;
    }
  }
}
</style>
