import { remote } from "electron";
import path from 'path';
import { DataTypes, Model, Sequelize } from 'sequelize';
declare const __static: string;
// todo try loading db from userData

const isBuild = process.env.NODE_ENV === 'production';

let locDb = '';

if(isBuild){
    locDb = path.join('', './data.db');
}else{
    locDb = path.join(__static, '../src/data.db');
}

console.log("locDb: ", locDb);

// setup the connection to make sure it works
const sequelize = new Sequelize({
    dialect: 'sqlite',
    // todo change this to locDb for using db inside src/data.db
    storage: locDb,
    // ** db event logging true in dev and false in production
    define: {
        timestamps: false,
        underscored: true,
    },
});

class Item extends Model {
    public id!: number | null;
    public hash!: string | null;
    public descripcion!: string | null;
    public boleto!: string | null;
    public corr!: string | null;
    public lote!: string | null;
    public cantidad!: string | null;
    public especie!: string | null;
    public rp!: string | null;
    public precioUnitario!: string | null;
    public importe!: string | null;
    public remateId!: number | null;
}
Item.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    hash: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    boleto: {
        type: DataTypes.STRING,
        allowNull: true
    },
    corr: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cantidad: {
        type: DataTypes.STRING,
        allowNull: true
    },
    especie: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rp: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precioUnitario: {
        type: DataTypes.STRING,
        allowNull: true
    },
    importe: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "item",
    sequelize
});

class Remate extends Model {
    public id!: number | null;
    public comprador!: string| null;
    public calle!: string| null;
    public numero!: string| null;
    public localidad!: string| null;
    public telefono!: string| null;
    public cuit!: string| null;
    public ingresosBrutos!: string| null;
    public renspa!: string| null;
    public formaPago!: string| null;
    public importe!: string| null;
    public comisionPorcentaje!: string| null;
    public comisionTotal!: string| null;
    public fondoCompensatorioImporte!: string| null;
    public fondoCompensatorioTotal!: string| null;
    public atencionHaciendaImporte!: string| null;
    public atencionHaciendaTotal!: string| null;
    public movimientosImporte!: string| null;
    public movimientosTotal!: string| null;
    public otrosImporte!: string| null;
    public otrosTotal!: string| null;
    public tasaMunicipalImporte!: string| null;
    public tasaMunicipalTotal!: string| null;
    public senasaImporte!: string| null;
    public subTotal!: string| null;
    public ivaInscriptoPorcentaje!: string| null;
    public ivaInscriptoImporte!: string| null;
    public ivaInscriptoTotal!: string| null;
    public ivaNoInscriptoPorcentaje!: string| null;
    public ivaNoInscriptoImporte!: string| null;
    public ivaNoInscriptoTotal!: string| null;
    public resolPorcentaje!: string| null;
    public resolImporte!: string| null;
    public resolTotal!: string| null;
    public total!: string| null;
}
Remate.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    comprador: {
        type: DataTypes.STRING,
        allowNull: true
    },
    calle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: true
    },
    localidad: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cuit: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingresosBrutos: {
        type: DataTypes.STRING,
        allowNull: true
    },
    renspa: {
        type: DataTypes.STRING,
        allowNull: true
    },
    formaPago: {
        type: DataTypes.STRING,
        allowNull: true
    },
    importe: {
        type: DataTypes.STRING,
        allowNull: true
    },

    comisionPorcentaje: {
        type: DataTypes.STRING,
        allowNull: true
    },
    comisionTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fondoCompensatorioImporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fondoCompensatorioTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    atencionHaciendaImporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    atencionHaciendaTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    movimientosImporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    movimientosTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    otrosImporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    otrosTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tasaMunicipalImporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tasaMunicipalTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    senasaImporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    subTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ivaInscriptoPorcentaje: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ivaInscriptoImporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ivaInscriptoTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ivaNoInscriptoPorcentaje: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ivaNoInscriptoImporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ivaNoInscriptoTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resolPorcentaje: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resolImporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resolTotal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    total: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "remate",
    sequelize
});

Remate.hasMany(Item, {as: 'items'});
Item.belongsTo(Remate, {foreignKey: 'remateId'});

Item.sync();
Remate.sync();

export { sequelize, Remate, Item };