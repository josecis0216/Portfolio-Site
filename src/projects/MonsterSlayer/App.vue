<template>
    <v-img :src="require('./assets/logo.png')" aspect-ratio="1" max-height="135px" />
  <monster-slayer />
</template>

<script>
import MonsterSlayer from './components/MonsterSlayer.vue'

export default {
  name: 'App',
  components: {
    MonsterSlayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-logo {
  max-height: 10%;
}
</style>
