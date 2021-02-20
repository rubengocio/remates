import { Item, Remate } from "../getdb";

interface NewItem{
    id?: number | null;
    hash: string | null;
    descripcion: string | null;
    boleto: string | null;
    corr: string | null;
    lote: string | null;
    cantidad: string | null;
    especie: string | null;
    rp: string | null;
    precioUnitario: string | null;
    importe: string | null;
    remateId: number | null;
}


const getItems = async (remateId: number) => {
    const items = await Item.findAll({
        where: {
            remateId: remateId
        }
    });
    return items;    
}

const eliminarItems = async (remateId: number) => {
    const result = await Item.destroy({
        where: {
            "remate_id": remateId
        },
        force: true
    });
    return result; 
}

const createItem = async (item: NewItem) => {
    console.log("createItem: ", item);
    const retData = await Item.create({
        hash: item.hash,
        descripcion: item.descripcion,
        boleto: item.boleto,
        corr: item.corr,
        lote: item.lote,
        cantidad: item.cantidad,
        especie: item.especie,
        rp: item.rp,
        precioUnitario: item.precioUnitario,
        importe: item.importe,
        remateId: item.remateId
    });
    const addedItem: NewItem = {
        id: retData.id,
        hash: retData.hash,
        descripcion: retData.descripcion,
        boleto: retData.boleto,
        corr: retData.corr,
        lote: retData.lote,
        cantidad: retData.cantidad,
        especie: retData.especie,
        rp: retData.rp,
        precioUnitario: retData.precioUnitario,
        importe: retData.importe,
        remateId: retData.remateId
    }
    return addedItem;
}

const createItems = async (remateId: number, items: NewItem[]) => {
    console.log("createItems");
    const result = await eliminarItems(remateId);
    console.log("eliminarItems: ", remateId);
    items.forEach(item => {
        item.remateId = remateId;
        createItem(item).then(result => {
            item = result;
        });
    })
    return items;
}

export { createItems, getItems, eliminarItems }