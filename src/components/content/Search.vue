<template>
  <div>
    <!-- CAMPO SEARCH DA TABELA DE DADOS COM FILTRO POR NOME E NACIONALIDADE !-->
    <el-input placeholder="Searching" v-model="search" size="large" style="margin-bottom:10px;" suffix-icon="el-icon-search"></el-input>
    <!-- TABELA DE DADOS !-->
    <el-table :data="userslist.filter(data => !search || data.name.first.toLowerCase().includes(search.toLowerCase()) || data.nat.toLowerCase().includes(search.toLowerCase()))" border stripe v-loading="loading" element-loading-text="Loading users..." element-loading-spinner="el-icon-loading" empty-text=" ">
      <el-table-column label="NAME">
        <template slot-scope="scope">
          {{ scope.row.name.title }} {{ scope.row.name.first }} {{ scope.row.name.last }}
        </template>
      </el-table-column>
      <el-table-column prop="gender" label="GENDER"></el-table-column>
      <el-table-column prop="dob.date" label="BIRTH"></el-table-column>
      <!-- BOTÕES EDITAR DADOS !-->
      <el-table-column label="ACTIONS" width="165">
        <template slot-scope="scope">
          <div style="display:flex;">
            <v-btn @click="getEditar(scope.row)" style="margin-right: 13px;"><i class="fas fa-edit" style="color: #9EADBA;"></i></v-btn>
            <v-btn @click="getNada(scope.row)" ><i class="far fa-trash-alt" style="color: #9EADBA;"></i></v-btn>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- CARREGAR MAIS DADOS ( + 50 ) !-->
    <div class="loading">
      <button @click="getFiltro()"><i class="fas fa-undo-alt fa-flip-vertical ico"></i><span style="color: #4B5C6B;">Loading more...</span></button>
    </div>
    <!-- MODAL EDIT !-->
    <el-dialog :visible.sync="dialogVisible" width="50%">
      <!-- AVATAR E ID DO USUARIO !-->
      <el-row style="display:flex; margin-bottom:15px;">
        <el-col :span="24" style="display:flex; align-items:center; flex-direction: column;">
          <v-avatar size="85" style="margin-bottom: 10px;">
            <v-img :src= "user.picture.large" />
          </v-avatar>
          <div style="display:flex; box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.1); padding:20px; width:100%; align-items:center;">
            <div style="width: 50px;">ID: </div>
            <el-input placeholder="ID" disabled v-model="user.userId" clearable style="margin-left: 10px;"></el-input>
          </div>
        </el-col>
      </el-row>
      <!-- DADOS DO USUARIO !-->
      <el-row >
        <div class="titulos" style="margin-bottom: 15px; color: #9EADBA;">EDIT</div>
      </el-row>
      <el-row style="margin-bottom: 10px;">
        <el-col :span="24" style="display: flex; align-items: center;">
          <div style="width: 80px;">Nome: </div>
          <el-input placeholder="Title" v-model="user.name.title" style="width: 170px; margin-right: 10px;"  clearable></el-input>
          <el-input placeholder="First" v-model="user.name.first" style="width: 170px; margin-right: 10px;"  clearable></el-input>
          <el-input placeholder="Last" v-model="user.name.last" style="width: 170px;"  clearable></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 10px;">
        <el-col :span="24" style="display: flex; align-items: center;">
          <div style="width: 90px;">Email: </div>
          <el-input placeholder="Email" v-model="user.email"  clearable></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 10px;">
        <el-col :span="12" style="display: flex; align-items: center;">
          <div style="width: 105px;">Gender: </div>
          <el-input placeholder="Gender" v-model="user.gender" clearable></el-input>
        </el-col>
        <el-col :span="12" style="display: flex; align-items: center;">
          <div style="width: 70px; margin-left:10px;">Birth: </div>
          <el-input placeholder="Birth" v-model="user.dob.date" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="display: flex; align-items: center;">
          <div style="width: 105px;">Nat: </div>
          <el-input placeholder="Nat" v-model="user.nat" clearable></el-input>
        </el-col>
        <el-col :span="12" style="display: flex; align-items: center;">
          <div style="width: 70px; margin-left:10px;">Phone: </div>
          <el-input placeholder="Phone" v-model="user.phone" clearable></el-input>
        </el-col>
        </el-row>
      <!-- DADOS DE ENDEREÇO !-->
      <el-row>
        <div class="titulos" style="margin-top: 10px; margin-bottom: 15px; color: #9EADBA;">LOCATION</div>
      </el-row>
      <el-row style="margin-bottom: 10px;">
        <el-col :span="24" style="display:flex; align-items:center;">
          <div style="width: 182px;">Street: </div>
          <el-input placeholder="Number" v-model="user.location.street.number" style="margin-right: 10px;" clearable></el-input>
          <el-input placeholder="Name" v-model="user.location.street.name" clearable></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 10px;">
        <el-col :span="24" style="display:flex; align-items:center;">
          <div style="width: 182px;">Coord: </div>
          <el-input placeholder="Latitude" v-model="user.location.coordinates.latitude" style="margin-right: 10px;" clearable></el-input>
          <el-input placeholder="Longitude" v-model="user.location.coordinates.longitude" clearable></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 10px;">
        <el-col style="display:flex; align-items:center;">
          <div style="width: 90px;">City:</div>
          <el-input placeholder="City" v-model="user.location.city" clearable></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 10px;">
        <el-col style="display:flex; align-items:center;">
          <div style="width: 90px;">State:</div>
          <el-input placeholder="State" v-model="user.location.state" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="display:flex; align-items:center;">
          <div style="width: 90px;">Postcode:</div>
          <el-input placeholder="Postcode" v-model="user.location.postcode" clearable></el-input>
        </el-col>
      </el-row>
      <!-- BOTOES DA MODEL (CANCELAR, CONFIRMAR) !-->
      <span slot="footer" class="dialog-footer">
        <v-btn @click="dialogVisible = false" style="margin-right: 10px; color:#9EADBA;">Cancel</v-btn>
        <v-btn @click="salvar" style="background-color:#9EADBA; color:#F7F9FA;">Confirm</v-btn>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiurl } from '@/global'
import { mapState } from 'vuex'

export default {
    name: 'Search',

    computed: mapState([ 'userslist']),

    data() {
        return {
            users: [],
            loading: true,
            filtro: 50,
            search: '',
            dialogVisible: false,
            user2: {},
            user: { 
              userId: '',
              gender: '',
              name: {
                title: '',
                first: '',
                last: ''
              },
              location: {
                street: {
                  number: '',
                  name: '',
                },
                city: '',
                state: '',
                country: '',
                postcode: '',
                coordinates: {
                  latitude: '',
                  longitude: ''
                },
                timezone: {
                  offset: '',
                  description: ''
                }
              },
              email: '',
              login: {
                uuid: '',
                username: '',
                password: '',
                salt: '',
                md5: '',
                sha1: '',
                sha256: ''
              },
              dob: {
                  date: '',
                  age: ''
              },
              registered: {
                date: '',
                age: ''
              },
              phone: '',
              cell: '',
              id: {
                name: '',
                value: null
              },
              picture: {
                larg: '',
                medium: '',
                thumbnail: ''
              }, 
              nat: '',
            },
        }
    },

    watch: {
      //MONITORAR USERS (SAIR DO LOOPING) E CARREGAMENTO DE DADOS DE USUARIO (+ 50)
      users() {
          this.loading = false;
      },
      pageUsers() {
          this.$store.commit('getUsersList', this.pageUsers);
      }
    },

    methods: {

      //CARREGAR USUARIOS DA API VIA AXIOS
      async getUser() {
          await axios
              .get(`${baseApiurl}/users`)
              .then(res => this.users = res.data);

          this.$store.commit('getUsers', this.users);
          this.$store.commit('getUsersList');
      },

      //VERIFICAR SE OS CAMPOS ESTÃO INDO VAZIOS 
      verificar() {
     
        if(!this.user.name.title || !this.user.name.first || !this.user.name.last || !this.user.email || !this.user.gender || !this.user.dob.date || !this.user.nat || !this.user.phone || !this.user.location.street.number || !this.user.location.street.name || !this.user.location.coordinates.latitude || !this.user.location.coordinates.longitude || !this.user.location.city || !this.user.location.state || !this.user.location.postcode ) {
          this.campovazio();
          return false;
        }
        return true;
      },

      //MENSAGEM DE SUCESSO
      sucesso() {
        this.$message({
          showClose: true,
          message:'Alterado com sucesso!  ',
          type: 'success',
        });
      },

      //MENSAGEM VALIDAÇÃO 
      campovazio() {
        this.$message({
          showClose: true,
          message:'Oops, existem campos vazios. ',
          type: 'error',
        });
      },

      //SALVAR ALTERAÇÕES DOS USUARIOS
      salvar() {
        if (this.verificar()) {
          this.user2 = {
            gender: this.user.gender,
            name: {
              title: this.user.name.title,
              first: this.user.name.first,
              last: this.user.name.last,
            },
            location: {
              street: {
                number: this.user.location.street.number,
                name: this.user.location.street.name
              },
              city: this.user.location.city,
              state: this.user.location.state,
              country: this.user.location.country,
              postcode: this.user.location.postcode,
              coordinates: {
                latitude: this.user.location.coordinates.latitude,
                longitude: this.user.location.coordinates.longitude
              },
              timezone: {
                offset: this.user.location.timezone.offset,
                description: this.user.location.timezone.description
              }
            },
            email: this.user.email,
            login: {
              uuid: this.user.login.uuid,
              username: this.user.login.username,
              password: this.user.login.password,
              salt: this.user.login.salt,
              md5: this.user.login.md5,
              sha1: this.user.login.sha1,
              sha256: this.user.login.sha256
            },
            dob: {
              date: this.user.dob.date,
              age: this.user.dob.age
            },
            registered: {
              date: this.user.registered.date,
              age: this.user.registered.age
            },
            phone: this.user.phone,
            cell: this.user.cell,
            id: {
              name: this.user.id.name,
              value: this.user.id.value
            },
            picture: {
              large: this.user.picture.large,
              medium: this.user.picture.medium,
              thumbnail: this.user.picture.thumbnail
            },
            nat: this.user.nat
          }
          //REQUISISÇÃO API VIA AXIOS
          axios.put(`${baseApiurl}/users/${this.user.userId}`, this.user2)
          .then(() => {
            this.sucesso()
            this.getUser()
          })
          this.dialogVisible = false;
        }
    },

      //CARREGAR PAGINAÇÃO
      getFiltro(){
          this.filtro = this.filtro + 50
          this.$store.commit('getFiltro', this.filtro);
          this.$store.commit('getUsersList', this.pageUsers);
      },

      //EDITAR - CARREGAR DADOS DA LINHA EM USER
      async getEditar(row){
        this.user = {
          userId: row.userId,
          gender: row.gender,
          name: {
            title: row.name.title,
            first: row.name.first,
            last: row.name.last,
          },
          location: {
            street: {
              number: row.location.street.number,
              name: row.location.street.name
            },
            city: row.location.city,
            state: row.location.state,
            country: row.location.country,
            postcode: row.location.postcode,
            coordinates: {
              latitude: row.location.coordinates.latitude,
              longitude: row.location.coordinates.longitude
            },
            timezone: {
              offset: row.location.timezone.offset,
              description: row.location.timezone.description
            }
          },
          email: row.email,
          login: {
            uuid: row.login.uuid,
            username: row.login.username,
            password: row.login.password,
            salt: row.login.salt,
            md5: row.login.md5,
            sha1: row.login.sha1,
            sha256: row.login.sha256
          },
          dob: {
            date: row.dob.date,
            age: row.dob.age,
          },
          registered: {
            date: row.registered.date,
            age: row.registered.age
          },
          phone: row.phone,
          cell: row.cell,
          id: {
            name: row.id.name,
            value: row.id.value
          },
          picture: {
            large: row.picture.large,
            medium: row.picture.medium,
            thumbnail: row.picture.thumbnail
          },
          nat: row.nat,
        }
        this.dialogVisible = true;
      }
    },

    mounted() {
      this.getUser();
    }
    
}
</script>

<style scoped>

  .loading {
      display:flex; 
      justify-content:center; 
      margin-top:20px; 
      align-items: center;
  }

  .ico {
      margin-right: 10px;
      font-size: 1.5rem;
      color: #4B5C6B;
  }

  .titulos {
    display: flex;
    background-color: #DFE6ED; 
    height: 30px; 
    align-items:center; 
    justify-content: center;
  }

</style>