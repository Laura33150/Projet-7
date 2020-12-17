<template>
  <div class="inscription">
    <img alt="Vue logo" src="../assets/icon-above-font.png">
    <h1>Inscription</h1>
    <form>
      <div class="form-group">
        <label for="prenom">Prenom</label>
        <input type="text" placeholder="prenom" id="prenom" class="champ">
        <br>
        <label for="nom">Nom</label>
        <input type="text" placeholder="nom" id="nom" class="champ">
        <br>
        <label for="email">Email</label>
        <input type="text" placeholder="email" id="email" class="champ">
        <br>
        <label for="password">Mot de passe</label>
        <input type="password" placeholder="password" id="password" class="champ">
        <br>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
h1 {
  display: flex;
  border-bottom: thin solid black;
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
