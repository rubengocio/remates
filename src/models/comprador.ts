import { Comprador } from "../getdb"
interface NewComprador {
    name: string | null;
    id?: number | null;
}

const getCompradores = async () => {
    const compradores = await Comprador.findAll();
    return compradores;
}

const crearComprador = async (comprador: NewComprador) => {
    const retData = await Comprador.create(comprador);
    const addedComprador: NewComprador = {
        name: retData.name,
        id: retData.id
    }
    return addedComprador
}

export { getCompradores, crearComprador }