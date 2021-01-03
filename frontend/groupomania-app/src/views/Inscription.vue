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
       <input @click.prevent="sendSignup" class="styled" type="submit" value="Inscription" />
      </div>
    </form>
  </div>
</template>

<script>


</script>

<style lang="scss">
.inscription {
   display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
}
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

.styled {
    cursor: pointer;
    width: 130px;
    border: 0;
    line-height: 2.3;
    padding: 0 10px;
    margin-top: 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: #FD2900;
    background-image: linear-gradient(to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
      inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  }

  .styled:hover {
    background-color: rgba(255, 0, 0, 1);
  }
</style>
