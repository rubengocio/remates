<template>
    <div>

    </div>
</template>

<script>
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "pdf-content",
  data() {
    return {
    }
  },

  props: {
    remate: Object
  },

  methods: {
    getString(value){
      if(value == null) return "";
      return value;
    },

    generatePDF(){
      const alto = 15;
      const marginTop = 40;
      const saltoDeLinea = 5;
      const doc = new jsPDF('p', 'pt');
      doc.setFontSize(10);

      let finalY = alto + marginTop;
      doc.text('Nro Orden: ' + this.getString(this.remate.id), 40, finalY);
      finalY += alto + saltoDeLinea;
      doc.text('Comprador: ' + this.getString(this.remate.comprador), 40, finalY);
      finalY += alto + saltoDeLinea;
      doc.text('Calle: ' + this.getString(this.remate.calle), 40, finalY);
      doc.text('Nro: ' + this.getString(this.remate.numero), 250, finalY);
      doc.text('Localidad: ' + this.getString(this.remate.localidad), 350, finalY);
      finalY += alto + saltoDeLinea;
      doc.text('Telefono: ' + this.getString(this.remate.telefono), 40, finalY);
      doc.text('C.U.I.T.: ' + this.getString(this.remate.cuit), 200, finalY);
      doc.text('Ingresos Brutos: ' + this.getString(this.remate.ingresosBrutos), 350, finalY);
      finalY += alto + saltoDeLinea;
      doc.text('RENSPA N°: ' + this.getString(this.remate.renspa), 40, finalY);
      finalY += alto;
      
      doc.autoTable({
        head: [['Descripcion', 'Boleto', 'Corr.', 'Cant', 'Especie', 'RP', 'Prec. Unit.', 'Importe']],
        body: this.getItems(this.remate),
        startY: finalY ,
      });

      finalY = doc.lastAutoTable.finalY + 10; // The y position on the page
      
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Forma de pago', 40, finalY);
      doc.text('Importe $', 500, finalY);
      
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      const formaDePago = this.setFormaDePago(doc, this.getString(this.remate.formaPago), 40, finalY);
      doc.text('' + this.getString(this.remate.importe), 500, finalY);
      
      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Comision %', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.comisionPorcentaje), 350, finalY);
      doc.text('' + this.getString(this.remate.comisionTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Fondo Compensatorio $', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.fondoCompensatorioImporte), 350, finalY);
      doc.text('' + this.getString(this.remate.fondoCompensatorioTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Atención Hacienda $', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.atencionHaciendaImporte), 350, finalY);
      doc.text('' + this.getString(this.remate.atencionHaciendaTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Movimientos $', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.movimientosImporte), 350, finalY);
      doc.text('' + this.getString(this.remate.movimientosTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Otros $', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.otrosImporte), 350, finalY);
      doc.text('' + this.getString(this.remate.otrosTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Tasa Municipal $', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.tasaMunicipalImporte), 350, finalY);
      doc.text('' + this.getString(this.remate.tasaMunicipalTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('SENASA $', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.senasaImporte), 350, finalY);
      doc.text('' + this.getString(this.remate.senasaTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Sub-Total $', 500, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.subTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('I.V.A Insc. %', 250, finalY);
      doc.text('I.V.A Insc. $', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.ivaInscriptoPorcentaje), 250, finalY);
      doc.text('' + this.getString(this.remate.ivaInscriptoImporte), 350, finalY);
      doc.text('' + this.getString(this.remate.ivaInscriptoTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('I.V.A No Insc. %', 250, finalY);
      doc.text('I.V.A No Insc. $', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.ivaNoInscriptoPorcentaje), 250, finalY);
      doc.text('' + this.getString(this.remate.ivaNoInscriptoImporte), 350, finalY);
      doc.text('' + this.getString(this.remate.ivaNoInscriptoTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Resol %', 250, finalY);
      doc.text('Resol $', 350, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.resolPorcentaje), 250, finalY);
      doc.text('' + this.getString(this.remate.resolImporte), 350, finalY);
      doc.text('' + this.getString(this.remate.resolTotal), 500, finalY);

      finalY += alto + saltoDeLinea;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('Total $', 500, finalY);
      finalY += alto;
      finalY = this.addPage(doc, finalY, alto, marginTop);
      doc.text('' + this.getString(this.remate.total), 500, finalY);

      doc.save('download.pdf');
    },

    addPage(doc, finalY, alto, marginTop){
      if(finalY > 750){
        doc.addPage();
        return alto + marginTop;
      }
      return finalY;
    },

    setFormaDePago(doc, formaPago, x, y){
      if(formaPago == null) return;
      const array = formaPago.split(" ");
      let finalY = y;
      const maxLength = 40;
      const saltoDeLinea = 15;
      let row = "";

      array.forEach(item => {
        if((row + item).length > maxLength){
          doc.text(row, x, finalY);
          row = "";
          finalY += saltoDeLinea;
        }else{
          row += item + " ";
        }
      });
      doc.text(row, x, finalY);
      
    },

    getItems(remate){
      const items = [];
      if(remate == null || remate.items == null) return items;

      remate.items.forEach(element => {
        items.push([
          element.descripcion,
          element.boleto,
          element.corr,
          element.lote,
          element.cantidad,
          element.especie,
          element.rp,
          element.precioUnitario,
          element.importe 
        ])
      });
      return items;
    }
	}
};
</script>

<style>
  
</style>