import { Remate } from "../getdb";

interface NewRemate{
    id?: number | null;
    comprador: string| null;
    calle: string| null;
    numero: string| null;
    localidad: string| null;
    telefono: string| null;
    cuit: string| null;
    ingresosBrutos: string| null;
    renspa: string| null;
    formaPago: string| null;
    importe: string| null;
    comisionPorcentaje: string| null;
    comisionTotal: string| null;
    fondoCompensatorioImporte: string| null;
    fondoCompensatorioTotal: string| null;
    atencionHaciendaImporte: string| null;
    atencionHaciendaTotal: string| null;
    movimientosImporte: string| null;
    movimientosTotal: string| null;
    otrosImporte: string| null;
    otrosTotal: string| null;
    tasaMunicipalImporte: string| null;
    tasaMunicipalTotal: string| null;
    senasaImporte: string| null;
    subTotal: string| null;
    ivaInscriptoPorcentaje: string| null;
    ivaInscriptoImporte: string| null;
    ivaInscriptoTotal: string| null;
    ivaNoInscriptoPorcentaje: string| null;
    ivaNoInscriptoImporte: string| null;
    ivaNoInscriptoTotal: string| null;
    resolPorcentaje: string| null;
    resolImporte: string| null;
    resolTotal: string| null;
    total: string| null;
}

const getRemates = async () => {
    const remates = await Remate.findAll();
    return remates;
}

const eliminarRemate = async (id: number) => {
    const result = await Remate.destroy({
        where: {
            id: id
        },
        force: true
    });
    return result; 
}

const getCompradores = async () => {
    const compradores = await Remate.findAll({
        group: 'comprador',
        order: [['comprador', 'DESC']] 
    });
    return compradores;
}

const createRemate = async (remate: NewRemate) => {
    const retData = await Remate.create(remate);
    console.log("createRemate: ", retData.toJSON());
    const addedRemate: NewRemate = {
        id: retData.id,
        comprador: retData.comprador,
        calle: retData.calle,
        numero: retData.numero,
        localidad: retData.localidad,
        telefono: retData.telefono,
        cuit: retData.cuit,
        ingresosBrutos: retData.ingresosBrutos,
        renspa: retData.renspa,
        formaPago: retData.formaPago,
        importe: retData.importe,
        comisionPorcentaje: retData.comisionPorcentaje,
        comisionTotal: retData.comisionTotal,
        fondoCompensatorioImporte: retData.fondoCompensatorioImporte,
        fondoCompensatorioTotal: retData.fondoCompensatorioTotal,
        atencionHaciendaImporte: retData.atencionHaciendaImporte,
        atencionHaciendaTotal: retData.atencionHaciendaTotal,
        movimientosImporte: retData.movimientosImporte,
        movimientosTotal: retData.movimientosTotal,
        otrosImporte: retData.otrosImporte,
        otrosTotal: retData.otrosTotal,
        tasaMunicipalImporte: retData.tasaMunicipalImporte,
        tasaMunicipalTotal: retData.tasaMunicipalTotal,
        senasaImporte: retData.senasaImporte,
        subTotal: retData.subTotal,
        ivaInscriptoPorcentaje: retData.ivaInscriptoPorcentaje,
        ivaInscriptoImporte: retData.ivaInscriptoImporte,
        ivaInscriptoTotal: retData.ivaInscriptoTotal,
        ivaNoInscriptoPorcentaje: retData.ivaNoInscriptoPorcentaje,
        ivaNoInscriptoImporte: retData.ivaNoInscriptoImporte,
        ivaNoInscriptoTotal: retData.ivaNoInscriptoTotal,
        resolPorcentaje: retData.resolPorcentaje,
        resolImporte: retData.resolImporte,
        resolTotal: retData.resolTotal,
        total: retData.total
    }
    return addedRemate;
}

const updateRemate = async (remate: NewRemate) => {
    console.log("updateRemate: ", remate);
    const updated = await Remate.update({
        comprador: remate.comprador,
        calle: remate.calle,
        numero: remate.numero,
        localidad: remate.localidad,
        telefono: remate.telefono,
        cuit: remate.cuit,
        ingresosBrutos: remate.ingresosBrutos,
        renspa: remate.renspa,
        formaPago: remate.formaPago,
        importe: remate.importe,
        comisionPorcentaje: remate.comisionPorcentaje,
        comisionTotal: remate.comisionTotal,
        fondoCompensatorioImporte: remate.fondoCompensatorioImporte,
        fondoCompensatorioTotal: remate.fondoCompensatorioTotal,
        atencionHaciendaImporte: remate.atencionHaciendaImporte,
        atencionHaciendaTotal: remate.atencionHaciendaTotal,
        movimientosImporte: remate.movimientosImporte,
        movimientosTotal: remate.movimientosTotal,
        otrosImporte: remate.otrosImporte,
        otrosTotal: remate.otrosTotal,
        tasaMunicipalImporte: remate.tasaMunicipalImporte,
        tasaMunicipalTotal: remate.tasaMunicipalTotal,
        senasaImporte: remate.senasaImporte,
        subTotal: remate.subTotal,
        ivaInscriptoPorcentaje: remate.ivaInscriptoPorcentaje,
        ivaInscriptoImporte: remate.ivaInscriptoImporte,
        ivaInscriptoTotal: remate.ivaInscriptoTotal,
        ivaNoInscriptoPorcentaje: remate.ivaNoInscriptoPorcentaje,
        ivaNoInscriptoImporte: remate.ivaNoInscriptoImporte,
        ivaNoInscriptoTotal: remate.ivaNoInscriptoTotal,
        resolPorcentaje: remate.resolPorcentaje,
        resolImporte: remate.resolImporte,
        resolTotal: remate.resolTotal,
        total: remate.total
    }, 
    {
        where: {id: remate.id}
    });

    return updated;
}

export { getRemates, createRemate, getCompradores, eliminarRemate, updateRemate }