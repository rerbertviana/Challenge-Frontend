<template>
    <div class="header">
        <!-- CABEÇALHO CINZA !-->
        <div class="header1">
            <div class="bolinha"></div>
            <div class="bolinha"></div>
            <div class="bolinha"></div>
        </div>
        <!-- CABEÇALHO COM AVATAR USER E DA EMPRESA !-->
        <b-row class="header2">
            <b-col style="display:flex; align-items:center;">
                <div style="width:40px; height: 40px;"><b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img></div>
                <span class="fonte" style="margin-left:8px;">Company</span>
            </b-col>
            <b-col class="col2"><div class="bolinha2"><i class="fas fa-user ico"></i></div></b-col>
        </b-row>
       
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
   
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .header1 {
        width: 100%;
        height: 50px;
        background-color: #9EADBA;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        display: flex;
        align-items: center;
        padding-left: 5px;
    }

    .header2 {
        width: 100%; 
        background-color: white; 
        height: 60px; 
        align-items: center;
    }

    .bolinha {
        width: 18px;
        height: 18px;
        background-color: #8F9EAC;
        border-radius: 100%;
        margin-left: 5px;
    }

    .bolinha2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin-right: 5px;
        border-radius: 100%;
        background-color: #DFE6ED;
    }

    .col2 {
        display: flex;
        justify-content: flex-end;
    }

    .ico {
        color: #9EADBA;
    }

    .fonte {
       font-weight: bold; 
    }

</style>