<template>
    <div>
        <div>
            <v-data-table
                :headers="headers"
                :items="users"
                :items-per-page="50"
                class="elevation-1"
                loading
            >
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
            </template>
            </v-data-table>
        </div>
        
        <div>
            {{editedItem.name.first}}
        </div>
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
            headers: [
                {
                    text: 'Name (100g serving)',
                    align: 'start',
                    sortable: true,
                    value: 'name.first',
                },
                { text: 'Gender', value: 'gender' },
                { text: 'Birth', value: 'registered.date' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            editedIndex: -1,
            editedItem: {
                name: 'oi',
                gender: '',
                birth: 0
            },
        }
    },

    methods: {
        async getUsers() {
            await axios
            .get(`${baseApiurl}/users`)
            .then(res => this.users = res.data);
        },

        editItem (item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
        },
    },

    mounted() {
        this.getUsers();
    }

};
  
</script>

<style scoped>

    .acoes {
        display: flex;
    }

</style>