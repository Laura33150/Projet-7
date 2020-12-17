<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-above-font.png">
    <Welcome msg="Bienvenue sur Groupomania Forum"/>
     <div class="form-group">
       <label for="email">Email</label>
        <input type="text" placeholder="email" id="email" class="champ">
        <br>
        <label for="password">Mot de passe</label>
        <input type="password" placeholder="password" id="password" class="champ">
        <br>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}
</style>