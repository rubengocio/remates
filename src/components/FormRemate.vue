<template>
  <v-form>
    <v-container>
      <v-row> 
        <v-col cols="12" sm="4">
          <v-text-field 
            v-model="remate.id" 
            label="Nro Orden" 
            required 
            outlined 
            dense 
            hide-details="auto" 
            filled disabled>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn color="primary" fab small dark @click="searchRemates = true">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <!--<v-combobox
            hide-details="auto"
            v-model="remate.comprador"
            :items="compradorList"
            dense
            required 
            outlined
            label="Comprador"
            :auto-select-first="true"
            :clearable="true">
          </v-combobox>-->
          <v-combobox
            hide-details="auto"
            :value="remate.comprador"
            :items="compradorList"
            dense
            outlined
            :auto-select-first="true"
            label="Comprador"
            required
            :clearable="true"
            :cache-items="true"
            @input="onUpdate"
          ></v-combobox>
        </v-col>
        <!-- remate.comprador = item;-->
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field 
            v-model="remate.calle" 
            label="Calle" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field 
            v-model="remate.numero" 
            label="Nro" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-combobox
            hide-details="auto"
            v-model="remate.localidad"
            :items="ciudadList"
            item-text="name"
            item-value="id"
            dense
            required 
            outlined
            label="Localidad/Ciudad"
            return-object
            :auto-select-first="true"
            :clearable="true">
          </v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field 
            v-model="remate.telefono" 
            label="Telefono" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field 
            v-model="remate.cuit" 
            label="C.U.I.T" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-combobox
            hide-details="auto"
            v-model="remate.ingresosBrutos"
            :items="ingresosBrutosList"
            item-text="name"
            item-value="id"
            dense
            required 
            outlined
            label="Ingresos Brutos"
            return-object
            :auto-select-first="true"
            :clearable="true">
          </v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field 
            v-model="remate.renspa" 
            label="RENSPA N°" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field 
            v-model="item.descripcion" 
            label="Descripcion" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-text-field 
            v-model="item.boleto" 
            label="Boleto" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-text-field 
            v-model="item.corr" 
            label="Corr." 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-text-field 
            v-model="item.lote" 
            label="Lote" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-text-field 
            v-model="item.cantidad" 
            label="Cant" 
            required 
            outlined 
            dense 
            hide-details="auto"
            @keypress="isDecimal($event, item.cantidad)" 
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-text-field 
            v-model="item.especie" 
            label="Especie" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-text-field 
            v-model="item.rp" 
            label="RP" 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-text-field 
            v-model="item.precioUnitario" 
            label="Prec. Unit." 
            required 
            outlined 
            dense 
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-text-field 
            v-model="item.importe" 
            @keypress="isDecimal($event, item.importe)" 
            label="IMPORTE" 
            required 
            outlined 
            dense 
            hide-details="auto"
          ></v-text-field>
        </v-col>
         <v-col cols="12" md="1">
          <v-btn color="success" class="mr-4" @click="addItem">Agregar</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
        <v-data-table
          dense
          :headers="headers"
          :items="remate.items"
          :items-per-page="5"
          class="elevation-1"
        >
        </v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-textarea 
            outlined name="input-7-4" 
            label="Forma de pago" 
            v-model="remate.formaPago" 
            rows="24">
          </v-textarea>
        </v-col>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.importe" 
                label="Importe $"
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                @keypress="isDecimal($event, remate.importe)" 
                disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.comisionPorcentaje" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.comisionPorcentaje)" 
                label="Comision %">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.comisionTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                @keypress="isDecimal($event, remate.comisionTotal)" 
                disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.fondoCompensatorioImporte" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                label="Fondo Compensatorio $"
                @keypress="isDecimal($event, remate.fondoCompensatorioImporte)" 
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.fondoCompensatorioTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                @keypress="isDecimal($event, remate.fondoCompensatorioTotal)"
                disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.atencionHaciendaImporte" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.atencionHaciendaImporte)"
                label="Atención Hacienda $">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.atencionHaciendaTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                @keypress="isDecimal($event, remate.atencionHaciendaTotal)"
                disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.movimientosImporte" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.movimientosImporte)"
                label="Movimientos $">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.movimientosTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.movimientosTotal)"
                filled disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.otrosImporte" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.otrosImporte)"
                label="Otros $">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.otrosTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                @keypress="isDecimal($event, remate.otrosTotal)"
                disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
           <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.tasaMunicipalImporte" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.tasaMunicipalImporte)"
                label="Tasa Municipal $">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.tasaMunicipalTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                @keypress="isDecimal($event, remate.tasaMunicipalTotal)"
                disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.senasaImporte" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.senasaImporte)"
                label="SENASA $">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.senasaTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.senasaTotal)"
                filled disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.subTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                disabled 
                @keypress="isDecimal($event, remate.subTotal)"
                label="Sub-Total $">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.ivaInscriptoPorcentaje" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.ivaInscriptoPorcentaje)"
                label="I.V.A Insc. %">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.ivaInscriptoImporte" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.ivaInscriptoImporte)"
                label="I.V.A Insc. $">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.ivaIinscriptoTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.ivaIinscriptoTotal)"
                filled disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.ivaNoInsciptoPorcentaje" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.ivaNoInsciptoPorcentaje)"
                label="I.V.A No Insc. %">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.ivaNoInscriptoImporte" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.ivaNoInscriptoImporte)"
                label="I.V.A No Insc. $">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.ivaNoInscriptoTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                @keypress="isDecimal($event, remate.ivaNoInscriptoTotal)"
                disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.resolPorcentaje" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.resolPorcentaje)"
                label="Resol %">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.resolImporte" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.resolImporte)"
                label="Resol $">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.resolTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                @keypress="isDecimal($event, remate.resolTotal)"
                disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.total" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                filled 
                disabled 
                @keypress="isDecimal($event, remate.total)"
                label="Total $">
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
            <v-btn color="secondary" class="mr-4" :disabled="btnNuevo" @click="nuevo">Nuevo</v-btn>
            <v-btn class="mr-4" :disabled="btnModificar" @click="modificar">Modificar</v-btn>
            <v-btn color="error" class="mr-4" :disabled="btnEliminar">Eliminar</v-btn>
        </v-col>  
        <v-col md="6" class="text-right">
            <v-btn color="primary" class="mr-4" :disabled="btnImprimir">Imprimir</v-btn>
            <v-btn color="success" class="mr-4" :disabled="btnGuardar" @click="saveRemate">Guardar</v-btn>
            <v-btn color="warning" class="mr-4" :disabled="btnCancelar" @click="cancelar" >Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <SearchRemate 
      @close="closeSearchRemates"
      @edit="editarRemate"
      :dialog="searchRemates">
    
    </SearchRemate>
  </v-form>
</template>

<script>
import { getRemates, createRemate, getCompradores, updateRemate } from "../models/remate";
import SearchRemate from './SearchRemate';


export default {
  name: "Remate",
  components:{
    SearchRemate
  },
  data () {
    return {
      remate: {
        id: null,
        comprador: null,
        calle: null,
        numero: null,
        localidad: null,
        telefono: null,
        cuit: null,
        ingresosBrutos: null,
        renspa: null,
        formaPago: null,
        importe: null,
        comisionPorcentaje: null,
        comisionTotal: null,
        fondoCompensatorioImporte: null,
        fondoCompensatorioTotal: null,
        atencionHaciendaImporte: null,
        atencionHaciendaTotal: null,
        movimientosImporte: null,
        movimientosTotal: null,
        otrosImporte: null,
        otrosTotal: null,
        tasaMunicipalImporte: null,
        tasaMunicipalTotal: null,
        senasaImporte: null,
        subTotal: null,
        ivaInscriptoPorcentaje: null,
        ivaInscriptoImporte: null,
        ivaInscriptoTotal: null,
        ivaNoInscriptoPorcentaje: null,
        ivaNoInscriptoImporte: null,
        ivaNoInscriptoTotal: null,
        resolPorcentaje: null,
        resolImporte: null,
        resolTotal: null,
        total: null
      },

      item: {
        descripcion: null,
        boleto: null,
        corr: null,
        lote: null,
        cantidad: null,
        especie: null,
        rp: null,
        precioUnitario: null,
        importe: null
      },

      headers: [
        { text: "Descripcion", sortable: false, value: "descripcion" },
        { text: "Boleto", sortable: false, value: "boleto" },
        { text: "Corr", sortable: false, value: "corr" },
        { text: "Lote", sortable: false, value: "lote" },
        { text: "Cant", sortable: false, value: "cantidad" },
        { text: "Especie", sortable: false, value: "especie" },
        { text: "RP", sortable: false, value: "rp" },
        { text: "Prec. Unit.", sortable: false, value: "precioUnitario" },
        { text: "Importe", sortable: false, value: "importe" },
      ],

      btnNuevo: false,
      btnModificar: false,
      btnEliminar: false,
      btnImprimir: false,
      btnGuardar: false,
      btnCancelar: false,
      compradorList: [],
      ciudadList: [],
      ingresosBrutosList: [],
      searchRemates: false
    };
  },

  mounted(){
    this.nuevo();
    this.cargarCompradores();
  },

  methods: {
    closeSearchRemates: function(){
      this.searchRemates = false;
    },

    editarRemate (remate){
      console.log("editarRemate: ", remate);
      this.modificar();
      this.remate = remate;
    },

    btnDisabled: function(btnNuevo, btnModificar, btnEliminar, btnImprimir, btnGuardar, btnCancelar){
      this.btnNuevo = btnNuevo;
      this.btnModificar = btnModificar;
      this.btnEliminar = btnEliminar;
      this.btnImprimir = btnImprimir;
      this.btnGuardar = btnGuardar;
      this.btnCancelar = btnCancelar;
    },

    nuevo: function(){
      this.btnDisabled(true, true, true, true, false, false);
      this.clearRemate();
    },

    modificar (){
      this.btnDisabled(true, true, true, false, false, false);
    },

    cancelar: function(){
      this.btnDisabled(false, true, true, true, true, true);
      this.clearRemate();
    },

    addItem: function(){
      if(this.item != null) {
        this.remate.items.push(this.item);
      }
      this.clearItem();
      console.log(this.remate);
    },

    clearRemate: function(){
      this.remate = {
        id: null,
        comprador: null,
        calle: null,
        numero: null,
        localidad: null,
        telefono: null,
        cuit: null,
        ingresosBrutos: null,
        renspa: null,
        formaPago: null,
        importe: null,
        comisionPorcentaje: null,
        comisionTotal: null,
        fondoCompensatorioImporte: null,
        fondoCompensatorioTotal: null,
        atencionHaciendaImporte: null,
        atencionHaciendaTotal: null,
        movimientosImporte: null,
        movimientosTotal: null,
        otrosImporte: null,
        otrosTotal: null,
        tasaMunicipalImporte: null,
        tasaMunicipalTotal: null,
        senasaImporte: null,
        subTotal: null,
        ivaInscriptoPorcentaje: null,
        ivaInscriptoImporte: null,
        ivaInscriptoTotal: null,
        ivaNoInscriptoPorcentaje: null,
        ivaNoInscriptoImporte: null,
        ivaNoInscriptoTotal: null,
        resolPorcentaje: null,
        resolImporte: null,
        resolTotal: null,
        total: null
      }
    },

    clearItem: function(){
      this.item = {
        descripcion: null,
        boleto: null,
        corr: null,
        lote: null,
        cantidad: null,
        especie: null,
        rp: null,
        precioUnitario: null,
        importe: null
      };
    },

    cargarCompradores: function(){
      this.compradorList = [];
      getCompradores().then((data) => {
        data.forEach(remate => {
          if(remate.comprador != null){
            this.compradorList.push(remate.comprador)
          }
        });
      });
      console.log("cargarCompradores: ", this.compradorList);
    },

    addComprador: function(comprador){
      console.log("addComprador: ", comprador);
      this.compradorList.push(comprador);
    },

    saveRemate (){
      console.log("saveRemate: ", this.remate);
      this.btnGuardar = true;
      if(this.remate != null && this.remate.id != null){
        updateRemate(this.remate).then((result) => {
          console.log("updateRemate: ", result);
        });
      }else{
        createRemate(this.remate).then((result) => {
          this.remate.id = result.id;
          console.log("createRemate: ", result);
        });
      }
      this.btnDisabled(true, false, false, false, true, true);
      //this.cancelar();
      //this.cargarCompradores();
    },

    addCompradorList: function(item, i, e){
      console.log("addCompradorList: ", item);
      this.$nextTick(() => {
        this.$nextTick(() => {
          console.log('complete ', item, e)
        })
      });
    },

    onUpdate($event) {
      console.info('updated combo:', $event);
      this.remate.comprador = $event;
    },

   
    isDecimal: function(evt, text) {
      evt = evt ? evt : window.event;
      const charCode = evt.which ? evt.which : evt.keyCode;
      console.log("isDecimal: ", charCode);
      if( text != null && text.indexOf('.') >= 0 && charCode === 46){
        evt.preventDefault();
      }
      if(text != null && text.indexOf('.') >= 0 && (text.length - text.indexOf('.')) > 2){
        evt.preventDefault();
      }
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    }

  }
};
</script>
