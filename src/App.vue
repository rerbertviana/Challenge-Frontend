<template>
  <div id="app">
    <div class="challenge">
      <Header/>
      <Content/>
    </div>
  </div>
</template>

<script>

import Header from "./components/template/Header.vue"
import Content from "./components/template/Content.vue"


export default {
  name: 'App',
  components: { Header, Content }
}
</script>

<style>

/* * {
  font-family: '';
} */

#app {
  background-color: #E5E5E5;
}

body {
  margin:0;
}

.challenge {
  height: 100vh;
  display: grid;
  grid-template-rows: 120px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "header"
    "content"
}

</style>
