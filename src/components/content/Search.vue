<template>
    <div>
        <!-- <el-input placeholder="Searching..." v-model="search" size="large" style="margin-bottom: 30px;">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-table border stripe empty-text="Sem resultados">
            <el-table-column prop="name" label="Name" sortable></el-table-column>
            <el-table-column prop="gender" label="Gender"></el-table-column>
            <el-table-column prop="birth" label="Birth"></el-table-column>
            <el-table-column label="Actions">
                <template slot-scope="scope">
                    <div class="acoes">
                        <el-button @click="getCarrinho(scope.row)" class="botao">opa</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table> -->
    </div>
    
</template>

<script>

import axios from 'axios'
import { baseApiurl } from '@/global'

export default {
  
    name: 'Search',

    data: function() {
        return {
            users: [],
        }
    },

    methods: {
        async getProductUserCategory() {
            await axios
            .get(`${baseApiurl}/`)
            .then(res => this.users = res.data);
      },
    }

};
  
</script>

<style scoped>

    .acoes {
        display: flex;
    }

</style>