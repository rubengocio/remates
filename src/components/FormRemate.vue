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
            :disabled="readOnly"
            :filled="readOnly"
            @input="onUpdateComprador"
          ></v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field 
            v-model="remate.calle" 
            label="Calle" 
            required 
            outlined 
            dense 
            :filled="readOnly"
            :disabled="readOnly"
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
            :filled="readOnly"
            :disabled="readOnly"
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-combobox
            hide-details="auto"
            :value="remate.localidad"
            :items="ciudadList"
            dense
            required 
            outlined
            label="Localidad/Ciudad"
            :auto-select-first="true"
            :filled="readOnly"
            :disabled="readOnly"
            :cache-items="true"
            @input="onUpdateLocalidad"
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
            :filled="readOnly"
            :disabled="readOnly"
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
            :filled="readOnly"
            :disabled="readOnly"
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
            :disabled="readOnly"
            :filled="readOnly"
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
            :filled="readOnly"
            :disabled="readOnly"
            hide-details="auto">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2">
          <v-text-field 
            v-model="item.descripcion" 
            label="Descripcion" 
            required 
            outlined 
            dense 
            :disabled="readOnly"
            :filled="readOnly"
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
            :disabled="readOnly"
            :filled="readOnly"
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
            :disabled="readOnly"
            :filled="readOnly"
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
            :disabled="readOnly"
            :filled="readOnly"
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
            :disabled="readOnly"
            :filled="readOnly"
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
            :disabled="readOnly"
            :filled="readOnly"
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
            :disabled="readOnly"
            :filled="readOnly"
            @keypress="isDecimal($event, item.rp)"
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
            :disabled="readOnly"
            :filled="readOnly"
            @keypress="isDecimal($event, item.precioUnitario)"
            hide-details="auto">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field 
            v-model="item.importe" 
            @keypress="isDecimal($event, item.importe)" 
            label="Importe" 
            required 
            outlined 
            dense 
            :disabled="readOnly"
            :filled="readOnly"
            hide-details="auto"
          ></v-text-field>
        </v-col>
         <v-col cols="12" md="1">
          <!--<v-btn color="success" class="mr-4" @click="addItem">Agregar</v-btn>-->
          <v-btn 
            color="success" 
            fab 
            small 
            dark 
            :disabled="readOnly"
            :filled="readOnly"
            @click="addItem">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
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
          :disabled="readOnly"
          :filled="readOnly"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon
              color="red"
              :disabled="readOnly"
              @click="eliminarItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-textarea 
            outlined 
            name="input-7-4" 
            label="Forma de pago" 
            v-model="remate.formaPago" 
            :disabled="readOnly"
            :filled="readOnly"
            :maxlength="650"
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
                :disabled="readOnly"
                :filled="readOnly"
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
                :disabled="readOnly"
                :filled="readOnly"
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
                :disabled="readOnly"
                :filled="readOnly"
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
                :disabled="readOnly"
                :filled="readOnly"
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
                filled 
                disabled>
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
                :disabled="readOnly"
                :filled="readOnly"
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
                :disabled="readOnly"
                :filled="readOnly"
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
                :disabled="readOnly"
                :filled="readOnly"
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
                :disabled="readOnly"
                :filled="readOnly"
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
                :disabled="readOnly"
                :filled="readOnly"
                @keypress="isDecimal($event, remate.ivaInscriptoImporte)"
                label="I.V.A Insc. $">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.ivaInscriptoTotal" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                @keypress="isDecimal($event, remate.ivaInscriptoTotal)"
                filled disabled>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field 
                v-model="remate.ivaNoInscriptoPorcentaje" 
                required 
                outlined 
                dense 
                hide-details="auto" 
                :disabled="readOnly"
                :filled="readOnly"
                @keypress="isDecimal($event, remate.ivaNoInscriptoPorcentaje)"
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
                :disabled="readOnly"
                :filled="readOnly"
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
                :disabled="readOnly"
                :filled="readOnly"
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
                :disabled="readOnly"
                :filled="readOnly"
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
            <v-btn color="error" class="mr-4" :disabled="btnEliminar || remate == null || remate.id == null" @click="eliminar">Eliminar</v-btn>
        </v-col>  
        <v-col md="6" class="text-right">
            <v-btn color="primary" class="mr-4" :disabled="btnImprimir" @click="imprimir">Imprimir</v-btn>
            <v-btn color="success" class="mr-4" :disabled="btnGuardar" @click="saveRemate">Guardar</v-btn>
            <v-btn color="warning" class="mr-4" :disabled="btnCancelar" @click="cancelar" >Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <SearchRemate 
      @close="closeSearchRemates"
      @ver="verRemate"
      :dialog="searchRemates">
    
    </SearchRemate>
    <v-dialog v-model="dialogDelete" max-width="600px">
      <v-card>
        <v-card-title class="headline">¿Está seguro que desea eliminar el registro?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteConfirm">Aceptar</v-btn>
          <v-btn color="blue darken-1" text @click="cancelConfirm">Cancelar</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <PdfContent :remate="remate" ref="pdfPrinter"></PdfContent>

    <v-row justify="center">
      <v-dialog
        v-model="dialogError"
        persistent
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">
            Ocurrió un Error
          </v-card-title>
          <v-card-text>{{messageDialogError}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialogError = false"
            >
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script>
import { createRemate, eliminarRemate, getCompradores, getRemates, updateRemate } from "../models/remate";
import { createItems, getItems, eliminarItems } from "../models/item";
import SearchRemate from './SearchRemate';
import PdfContent from "./PdfContent";

export default {
  name: "Remate",
  components:{
    SearchRemate,
    PdfContent
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
        total: null,
        items: []
      },

      item: {
        id: null,
        hash: null,
        descripcion: null,
        boleto: null,
        corr: null,
        lote: null,
        cantidad: null,
        especie: null,
        rp: null,
        precioUnitario: null,
        importe: null,
        remateId: null
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
        { text: 'Acciones', value: 'actions', sortable: false },
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
      searchRemates: false,
      readOnly: true,
      dialogDelete: false,
      dialogError: false,
      messageDialogError: ""
    };
  },

  watch: {
    'item.cantidad': function(val, old){
      this.calcularImporteItem();
    },

    'item.precioUnitario': function(val, old){
      this.calcularImporteItem();
    },

    'remate.importe': function(val){
      this.calcularTotales();
    },

    'remate.comisionPorcentaje': function(val){
      this.calcularTotales();
    },

    'remate.fondoCompensatorioImporte': function(val){
      this.calcularTotales();
    },

    'remate.atencionHaciendaImporte': function(val){
      this.calcularTotales();
    },

    'remate.movimientosImporte': function(val){
      this.calcularTotales();
    },

    'remate.otrosImporte': function(val){
      this.calcularTotales();
    },

    'remate.tasaMunicipalImporte': function(val){
      this.calcularTotales();
    },

    'remate.senasaImporte': function(val){
      this.calcularTotales();
    },

    'remate.ivaInscriptoPorcentaje': function(val){
      this.calcularTotales();
    },

    'remate.ivaInscriptoImporte': function(val){
      this.calcularTotales();
    },

    'remate.ivaNoInscriptoPorcentaje': function(val){
      this.calcularTotales();
    },

    'remate.ivaNoInscriptoImporte': function(val){
      this.calcularTotales();
    },

    'remate.resolPorcentaje': function(val){
      this.calcularTotales();
    },

    'remate.resolImporte': function(val){
      this.calcularTotales();
    },
  },

  mounted(){
    this.nuevo();
    this.cargarCombos();
  },

  methods: {
    onProgress(progress) {
      this.progress = progress;
      console.log(`PDF generation progress: ${progress}%`)
    },
    startPagination() {
      console.log(`PDF has started pagination`)
    },
    hasPaginated () {
      console.log(`PDF has been paginated`)
    },
    hasDownloaded (blobPdf) {
      console.log(`PDF has downloaded yehey`)
      this.pdfDownloaded = true
    },
    
    closeSearchRemates: function(){
      this.searchRemates = false;
    },

    verRemate (remate){
      console.log("verRemate: ", remate);
      this.remate = remate;
      this.readOnly = true;
      this.btnDisabled(false, false, false, false, true, true);
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
      this.readOnly = false;
      this.btnDisabled(true, true, true, true, false, false);
      this.clearRemate();
    },

    modificar (){
      this.readOnly = false;
      this.btnDisabled(true, true, true, false, false, false);
    },

    cancelar: function(){
      this.readOnly = true;
      this.btnDisabled(false, true, true, true, true, true);
      this.clearRemate();
    },

    eliminar (){
      this.dialogDelete = true;
    },

    imprimir (){
      this.$refs.pdfPrinter.generatePDF();
    },

    deleteConfirm (){
      this.dialogDelete = false;
      this.removerRemate();
      this.nuevo();
    },

    cancelConfirm (){
      this.dialogDelete = false;
    },
   
    getId(){
      return Math.random().toString(36);
    },

    addItem: function(){
      if(this.item != null) {
        if(this.remate.items == null){
          this.remate.items = [];
        }
        this.item.hash = this.getId();
        this.remate.items.push(this.item);
        console.log("this.remate.items: ", this.remate.items);
      }
      this.clearItem();
      console.log(this.remate);
      this.calcularImporte();
    },

    eliminarItem (item){
      console.log("eliminarItem: ", item);
      for( let i = 0; i < this.remate.items.length; i++){ 
          if(this.remate.items[i].hash == item.hash) { 
              this.remate.items.splice(i, 1); 
              break;
          }
      };
      this.calcularImporte();
    },

    modificarItem (item){
      this.item = item;
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
        total: null,
        items: []
      }
    },

    clearItem: function(){
      this.item = {
        id: null,
        hash: null,
        descripcion: null,
        boleto: null,
        corr: null,
        lote: null,
        cantidad: null,
        especie: null,
        rp: null,
        precioUnitario: null,
        importe: null,
        remateId: null
      };
    },

    cargarCombos (){
      this.compradorList = [];
      this.ciudadList = [];
      this.ingresosBrutosList = [];

      getRemates().then((data) => {
        data.forEach(remate => {
          if(remate.comprador != null && !this.existsObject(this.compradorList, remate.comprador)){
            this.compradorList.push(remate.comprador);
          }

          if(remate.localidad != null && !this.existsObject(this.ciudadList, remate.localidad)){
            this.ciudadList.push(remate.localidad);
          }

          if(remate.ingresosBrutos != null && !this.existsObject(this.ingresosBrutosList, remate.ingresosBrutos)){
            this.ingresosBrutosList.push(remate.ingresosBrutos);
          }
        });
      });
    },

    existsObject(list, object){
      for(let i=0; i < list.length; i++){
        if(list[i] == object){
          return true;
        }
      }
      return false;
    },

    saveRemate (){
      console.log("saveRemate: ", this.remate);
      this.btnGuardar = true;
      const items = this.remate.items;
      if(this.remate != null && this.remate.id != null){
        updateRemate(this.remate).then((result) => {
          console.log("updateRemate: ", result);
          createItems(this.remate.id, items).then((result) => {
            this.remate.items = result;
            console.log("createItems: ", result);
          }).catch((error) => {
            this.btnDisabled(true, true, true, true, true, false);
            console.log("error - createItems: ", error);
            this.showDialogError(error);
          });
        }).catch((error) => {
          this.btnDisabled(true, true, true, true, true, false);
          console.log("error - updateRemate: ", error);
          this.showDialogError(error);
        });
      }else{
        createRemate(this.remate).then((result) => {
          this.remate.id = result.id;
          console.log("createRemate: ", result);
          createItems(this.remate.id, items).then((result) => {
            this.remate.items = result;
            console.log("createItems: ", result);
          }).catch((error) => {
            this.btnDisabled(true, true, true, true, true, false);
            console.log("error - createItems: ", error);
            this.showDialogError(error);
          });
        }).catch((error) => {
          this.btnDisabled(true, true, true, true, true, false);
          console.log("error - createRemate: ", error);
          this.showDialogError(error);
        });
      }
      this.readOnly = true;
      this.btnDisabled(false, false, false, false, true, true);
      this.cargarCombos();
    },

    showDialogError(message){
      this.messageDialogError = message;
      this.dialogError = true;
    },

    removerRemate (){
      if(this.remate != null && this.remate.id != null){
        const remateId = this.remate.id; 
        eliminarItems(remateId).then((item) => {
          console.log("items eliminados");
          eliminarRemate(remateId).then((remate) => {
            console.log("remate eliminardo");
          }).catch((err) => {
            console.log("error al eliminar remate");
          });
        }).catch((err) => {
          console.log("error al eliminar items");
        });
      }
    },

    onUpdateComprador($event) {
      console.info('updated combo:', $event);
      this.remate.comprador = $event;
    },

    onUpdateLocalidad($event) {
      console.info('updated combo:', $event);
      this.remate.localidad = $event;
    },
   
    isDecimal: function(evt, text) {
      evt = evt ? evt : window.event;
      const charCode = evt.which ? evt.which : evt.keyCode;
      console.log("isDecimal: ", charCode);

      if(text != null){
        text = text.toString();
      }

      if( text != null 
        && text.indexOf(".") >= 0 
        && charCode === 46){
        evt.preventDefault();
      }
      if(text != null 
          && text.indexOf(".") >= 0 
          && (text.length - text.indexOf(".")) > 2){
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
    },

    calcularImporteItem(){
      this.item.importe = this.getNumber(this.item.precioUnitario) * this.getNumber(this.item.cantidad);
    },

    getNumber(number){
      try {
        if (Number.isNaN(Number.parseFloat(number))) {
          return 0.0;
        }else{
          return Number.parseFloat(number); 
        }
      } catch (error) {
        return 0.0;
      }
    },

    calcularImporte (){
      this.remate.importe = 0.0;
      this.remate.items.forEach(item => {
        this.remate.importe += this.getNumber(item.importe); 
      });
    },

    roundTo (n, digits) {
        let negative = false;
        if (digits === undefined) {
            digits = 0;
        }
        if (n < 0) {
            negative = true;
            n = n * -1;
        }
        const multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        n = (Math.round(n) / multiplicator).toFixed(digits);
        if (negative) {
            n = (n * -1).toFixed(digits);
        }
        return n;
    },

    calcularTotales(){
      const decimal = 2;
      const importe =  this.getNumber(this.remate.importe);
      const comisionPorcentaje = this.getNumber(this.remate.comisionPorcentaje);
      const fondoCompensatorioImporte = this.getNumber(this.remate.fondoCompensatorioImporte);
      const atencionHaciendaImporte = this.getNumber(this.remate.atencionHaciendaImporte);
      const movimientosImporte =  this.getNumber(this.remate.movimientosImporte);
      const otrosImporte =  this.getNumber(this.remate.otrosImporte);
      const tasaMunicipalImporte =  this.getNumber(this.remate.tasaMunicipalImporte);
      const senasaImporte =  this.getNumber(this.remate.senasaImporte);
      
      const ivaInscriptoPorcentaje = this.getNumber(this.remate.ivaInscriptoPorcentaje);
      const ivaInscriptoImporte = this.getNumber(this.remate.ivaInscriptoImporte);
      const ivaNoInscriptoPorcentaje = this.getNumber(this.remate.ivaNoInscriptoPorcentaje);
      const ivaNoInscriptoImporte = this.getNumber(this.remate.ivaNoInscriptoImporte);
      const resolPorcentaje = this.getNumber(this.remate.resolPorcentaje);
      const resolImporte = this.getNumber(this.remate.resolImporte);


      if(comisionPorcentaje != null && comisionPorcentaje > 0){
        this.remate.comisionTotal = this.roundTo((comisionPorcentaje * importe) / 100, decimal);
      }

      if(fondoCompensatorioImporte != null && fondoCompensatorioImporte > 0){
        this.remate.fondoCompensatorioTotal = this.roundTo(fondoCompensatorioImporte, decimal);
      }

      if(atencionHaciendaImporte != null && atencionHaciendaImporte > 0){
        this.remate.atencionHaciendaTotal = this.roundTo(atencionHaciendaImporte, decimal);
      }

      if(movimientosImporte != null && movimientosImporte > 0){
        this.remate.movimientosTotal = this.roundTo(movimientosImporte, decimal);
      }

      if(otrosImporte != null && otrosImporte > 0){
        this.remate.otrosTotal = this.roundTo(otrosImporte, decimal);
      }

      if(tasaMunicipalImporte != null && tasaMunicipalImporte > 0){
        this.remate.tasaMunicipalTotal = this.roundTo(tasaMunicipalImporte, decimal);
      }

      if(senasaImporte != null && senasaImporte > 0){
        this.remate.senasaTotal = this.roundTo(senasaImporte, decimal);
      }

      let subTotal = this.getNumber(this.remate.importe);
      subTotal += this.getNumber(this.remate.comisionTotal);
      subTotal += this.getNumber(this.remate.fondoCompensatorioTotal);
      subTotal += this.getNumber(this.remate.atencionHaciendaTotal);
      subTotal += this.getNumber(this.remate.movimientosTotal);
      subTotal += this.getNumber(this.remate.otrosTotal);
      subTotal += this.getNumber(this.remate.tasaMunicipalTotal);
      subTotal += this.getNumber(this.remate.senasaTotal);

      this.remate.subTotal = this.roundTo(subTotal, decimal);

      if(ivaInscriptoPorcentaje != null 
        && ivaInscriptoPorcentaje > 0 
        && ivaInscriptoImporte != null 
        && ivaInscriptoImporte > 0){
        this.remate.ivaInscriptoTotal = this.roundTo((ivaInscriptoPorcentaje * ivaInscriptoImporte) / 100, decimal);
      }

      if(ivaNoInscriptoPorcentaje != null 
        && ivaNoInscriptoPorcentaje > 0 
        && ivaNoInscriptoImporte != null 
        && ivaNoInscriptoImporte > 0){
        this.remate.ivaNoInscriptoTotal = this.roundTo((ivaNoInscriptoPorcentaje * ivaNoInscriptoImporte) / 100, decimal);
      }

      if(resolPorcentaje != null 
        && resolPorcentaje > 0 
        && resolImporte != null 
        && resolImporte > 0){
        this.remate.resolTotal = this.roundTo((resolPorcentaje * resolImporte) / 100, decimal);
      }

      let total = this.getNumber(this.remate.subTotal);
      total += this.getNumber(this.remate.ivaInscriptoTotal);
      total += this.getNumber(this.remate.ivaNoInscriptoTotal);
      total += this.getNumber(this.remate.resolTotal);

      this.remate.total = this.roundTo(total, decimal);
    }
  }
};
</script>
