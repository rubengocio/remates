<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="close"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Buscar Remates</v-toolbar-title>
          <v-spacer></v-spacer>
          
        </v-toolbar>
        <v-divider></v-divider>
        <v-card>
            <v-data-table
              :headers="headers"
              :items="remates"
              :search="search"
              sort-by="id"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar
                  flat
                >
                <v-text-field
                  v-model="search"
                  label="Buscar"
                  class="mx-4"
                ></v-text-field>
                  <v-dialog v-model="dialogDelete" max-width="600px">
                    <v-card>
                      <v-card-title class="headline">¿Está seguro que desea eliminar el registro?</v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">Aceptar</v-btn>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon
                  class="mr-2"
                  @click="verRemate(item)"
                >
                  mdi-arrow-right-bold-circle
                </v-icon>
                <v-icon
                  color="red"
                  @click="eliminarRemate(item)"
                >
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table>
        </v-card>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import { getRemates, eliminarRemate} from "../models/remate";
import { eliminarItems, getItems } from "../models/item";

  export default {
    data () {
      return {
        search: '',
        remates: [],
        remate: null,
        dialogDelete: false,
        headers: [
          { text: 'ID', value: 'id'},
          {
            text: 'Comprador',
            align: 'start',
            sortable: false,
            value: 'comprador',
          },
          { text: 'CUIT', value: 'cuit' },
          { text: 'Localidad', value: 'localidad' },
          { text: 'Importe $', value: 'importe' },
          { text: 'Total $', value: 'total' },
          { text: 'Acciones', value: 'actions', sortable: false },
        ],
      }
    },
    
    props: {
        dialog: Boolean
    },

    mounted(){
      console.log("mounted search");
    },

    watch: {
      dialog: function(val, old){
        if(val){
          this.fillRemates();
        }else{
          this.remates = [];
        }
      }
    },

    methods: {
      verRemate (remate){
        getItems(remate.id).then((result) =>{
          remate.items = result;
          this.$emit("ver", remate);
          this.close();
        });
      },

      eliminarRemate (remate){
        this.remate = remate;
        this.dialogDelete = true;
      },

      close (){
        this.remate = null;
        this.$emit("close");
      },

      fillRemates (){
          getRemates().then((result)=>{
            console.log("result: ", result);
            this.remates = result;
          });
      },

      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },

      deleteItemConfirm () {
        if(this.remate != null && this.remate.id != null){
          const remateId = this.remate.id;
          eliminarItems(remateId).then((item) => {
            eliminarRemate(remateId).then((data) => {
              console.log("remate eliminado");
            }).catch((err) => {
              console.log("error al eliminar remate");
            });
          }).catch((err) => {
            console.log("error al eliminar items");
          }).finally(() => {
            this.remate = null;
            this.fillRemates();
          });
        }
        this.closeDelete();
      },

      closeDelete () {
        this.remate = null;
        this.dialogDelete = false;
        console.log("closeDelete: ", this.remate);
      },
    }
  }
</script>
