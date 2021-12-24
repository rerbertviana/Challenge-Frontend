<template>
    <div>
        <div>
            <el-input placeholder="Searching" v-model="search" size="large" style="margin-bottom:10px;" suffix-icon="el-icon-search"></el-input>
            <v-data-table
                :headers="headers"
                :items="users"
                :items-per-page="50"
                class="elevation-1"
                :search="search"
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
        <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

<el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
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
            search: '',
            dialogVisible: false,
            headers: [
                {
                    text: 'Name (100g serving)',
                    align: 'start',
                    sortable: true,
                    value: 'name.first',
                },
                { text: 'Gender', value: 'gender' },
                { text: 'Birth', value: 'registered.date' },
                { 
                    text: 'Actions', 
                    value: 'actions', sortable: false,
                    align: 'center',
                },
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

        handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(()=> {
            done();
          })
          .catch(()=> {});
      }
    },

    mounted() {
        this.getUsers();
    }

};
  
</script>

<style >

</style>