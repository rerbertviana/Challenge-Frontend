<template>
    <div class="header">
        <div class="linha">
            <div class="bolinha"></div>
            <div class="bolinha"></div>
            <div class="bolinha"></div>
        </div>
        <div class="linha2">
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
   
    .header {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        grid-area: header;
        
        
    }

    .linha {
        height: 45px;
        background-color: #9EADBA;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        display: flex;
        align-items: center;
        padding-left: 5px;
    }

    .linha2 {
        height: 100%;
        background-color: white;
    }

    .bolinha {
        width: 18px;
        height: 18px;
        background-color: #8F9EAC;
        border-radius: 100%;
        margin-left: 5px;
    }

    .bolinha2 {
        width: 45px;
        height: 45px;
        border-radius: 100%;
        background-color: #DFE6ED;
    }

</style>