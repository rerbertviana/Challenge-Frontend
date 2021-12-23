<template>
    <div class="content">
        <Search/>
    </div>
</template>

<script>
import Search from "../content/Search.vue"

export default {
    name: 'Content',
    components: { Search }
}
</script>

<style>
   
    .content {
        padding: 30px;
        width: 100%;
        height: 100vh;
        background-color: #F7F9FA;
    }



</style>