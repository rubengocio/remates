import { remote } from "electron";
import path from 'path';
import { DataTypes, Model, Sequelize } from 'sequelize';
declare const __static: string;

// todo try loading db from userData

const isBuild = process.env.NODE_ENV === 'production';
const locDb = path.join(
    // eslint-disable-next-line
    isBuild ? __dirname : __static,
    '../src/data.db',
);

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

// todo define models here, or use a separate file for defining models and import them here!!!
class User extends Model {
    public firstName!: string | null;
    public lastName!: string | null;
    public id!: number | null
}
User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    tableName: "users",
    sequelize
});

// todo use sync to create tables 
User.sync();

class Comprador extends Model {
    public name!: string | null;
    public id!: number | null
}
Comprador.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "comprador",
    sequelize
});

Comprador.sync();

class Ciudad extends Model {
    public name!: string | null;
    public id!: number | null
}
Ciudad.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "ciudad",
    sequelize
});

Ciudad.sync();

class IngresosBrutos extends Model {
    public name!: string | null;
    public id!: number | null
}
IngresosBrutos.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "ingresos_brutos",
    sequelize
});

IngresosBrutos.sync();

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

Remate.sync();

export { sequelize, User, Comprador, Ciudad, IngresosBrutos, Remate };