import { getConnection } from "./../Database/database"

const getCompras = async (req, res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT *FROM compras")
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
const ObtenerCompra = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection()
        const result = await connection.query("SELECT cod_radiador,fecha_compra,precio_compra ,unidades  from compras where id_compra=" + id + "")
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


const AddCompras = async (req, res) => {
    try {
        const { cod_radiador,fecha_compra,precio_compra ,unidades } = req.body
        if (cod_radiador === undefined ||fecha_compra === undefined || precio_compra === undefined|| unidades === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const connection = await getConnection()
        const result = await connection.query("INSERT INTO compras(cod_radiador,fecha_compra,precio_compra ,unidades) Values(" + cod_radiador + ",'" + fecha_compra + "'," + precio_compra + "," + unidades + ");")
        res.json("addCompra")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const ActualizarCompras = async (req, res) => {
    try {
        const { id } = req.params
        const { cod_radiador,fecha_compra,precio_compra ,unidades } = req.body
        if (cod_radiador === undefined ||fecha_compra === undefined || precio_compra === undefined|| unidades === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const connection = await getConnection()
        const result = await connection.query("UPDATE compras SET cod_radaidor=" + cod_radiador + ",fecha_compra='" + fecha_compra + "',precio_compra=" + precio_compra + ",unidades=" + unidades + " WHERE id_compra =" + id + ";")
        res.json("updatecompra")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const BorrarCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE from compras where id_compra =" + id + "");
        res.json("DatoBorrado");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const methods = {
getCompras,
AddCompras,
ActualizarCompras,
BorrarCompra,
ObtenerCompra
}