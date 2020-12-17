<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Bienvenue',
  props: {
    msg: String
  }

}
</script>

<style scoped lang="scss">
h1 {
  display: flex;
  border-bottom: thin solid black;
}
</style>
