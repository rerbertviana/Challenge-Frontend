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
    padding: 20px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
