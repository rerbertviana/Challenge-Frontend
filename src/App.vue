<template>
  <div id="app">
    <!-- ESTRUTURA DO SISTEMA -->
    <div class="sistema">
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
  components: { Header, Content}
}
</script>

<style scoped>

  body {
    margin:0;
  }

  #app {
    width: 100%;
    height: 100vh;
    background-color:#E5E5E5;
  }

  .sistema {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
  }

</style>
