<template>
  <div id="app">
    <h1 class="app-title">Chronicle</h1>
    <h5 class="app-subtitle">The fully dynamic D&amp;D 5e Character Sheet</h5>
    <character></character>
  </div>
</template>

<script>
import Character from './components/Character'

export default {
  name: 'app',
  components: {
    Character
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input[type="text"], input[type="number"] {
    line-height: 20px;
    padding: 5px;
    font-size: 16px;
}


label {
  color: #333;
  text-transform: uppercase;
}

.app-title {
  text-align: left;
  margin: 0;
}

.app-subtitle {
  text-align: left;
  margin: 0;
}
</style>
