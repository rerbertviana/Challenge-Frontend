import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        storeusers: [],
        userslist: [],
        filtro: 50,
    },

    mutations: {

        getUsers(state, users) {
            state.storeusers = []
            state.storeusers = users;
        },

        getUsersList(state) {

            state.userslist = [];

            for (let i = 0; i < state.filtro; i++) {
                state.userslist.push(state.storeusers[i])
            }
            
        },

        getFiltro(state, filtro){
            if(filtro <= 500) {
                state.filtro = filtro;
            }
        }
       
       
    }
})