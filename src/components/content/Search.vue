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
                <v-avatar size="30" style="background-color:#9EADBA; border-radius:100%;" ><v-icon small class="mr-2" @click="editItem(item)" style="color:white;"> mdi-pencil </v-icon></v-avatar>
                <v-avatar size="30" style="background-color:#9EADBA; border-radius:100%; margin-left:10px;" ><v-icon small class="mr-2" @click="editItem(item)" style="color:white;"> mdi-delete </v-icon></v-avatar>
            </template>
            </v-data-table>
        </div>
        
        <div>
            {{editedItem.name.first}}
        </div>
        <el-dialog :visible.sync="dialogVisible" width="50%" >
            <v-row>
                <v-col style="display:flex; align-items:center;">
                    <span style="margin-right:10px; width:100px;">Name:</span>
                    <el-input placeholder="Title" v-model="editedItem.name.title" clearable style="width:170px; margin-right:10px;"></el-input>
                    <el-input placeholder="First" v-model="editedItem.name.first" clearable style="width:170px; margin-right:10px;"></el-input>
                    <el-input placeholder="Last" v-model="editedItem.name.last" clearable style="width:170px;"></el-input>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="display:flex; align-items:center;">
                    <span style="margin-right:20px; width:100px;">Email:</span>
                    <el-input placeholder="Email" v-model="editedItem.email" clearable ></el-input>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="display:flex; align-items:center;">
                    <span style="margin-right:20px; width:100px;">Gender:</span>
                    <el-input placeholder="Email" v-model="editedItem.gender" clearable ></el-input>
                    <span style="margin-right:20px; width:100px;">Bir</span>
                    <el-input placeholder="Email" v-model="editedItem.gender" clearable ></el-input>
                </v-col>
            </v-row>
            
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
            this.dialogVisible = true;
        },

    },

    mounted() {
        this.getUsers();
    }

};
  
</script>

<style >

</style>