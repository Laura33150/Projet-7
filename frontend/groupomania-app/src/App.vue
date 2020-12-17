<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Connexion</router-link> |
      <router-link to="/about">Inscription</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  margin-right: 300px;
}

#nav {
  padding: 30px;
  height: 40px;
  margin-right: 50px;
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #FD2900;
    }
  }
}
</style>
