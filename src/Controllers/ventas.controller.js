import { getConnection } from "./../Database/database"

const getVentas = async (req, res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT *FROM ventas")
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
const ObtenerVenta = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection()
        const result = await connection.query("SELECT cod_radiador,fecha_venta,precio_venta ,unidades  from ventas where id_venta=" + id + "")
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


const AddVentas = async (req, res) => {
    try {
        const { cod_radiador,fecha_venta,precio_venta ,unidades } = req.body
        if (cod_radiador === undefined ||fecha_venta === undefined || precio_venta === undefined|| unidades === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const connection = await getConnection()
        const result = await connection.query("INSERT INTO ventas(cod_radiador,fecha_venta,precio_venta ,unidades) Values(" + cod_radiador + ",'" + fecha_venta + "'," + precio_venta + "," + unidades + ");")
        res.json("AddVenta")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const ActualizarVentas = async (req, res) => {
    try {
        const { id } = req.params
        const { cod_radiador,fecha_venta,precio_venta ,unidades } = req.body
        if (cod_radiador === undefined ||fecha_venta === undefined || precio_venta === undefined|| unidades === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const connection = await getConnection()
        const result = await connection.query("UPDATE ventas SET cod_radaidor=" + cod_radiador + ",fecha_vemta='" + fecha_venta + "',precio_venta=" + precio_venta + ",unidades=" + unidades + " WHERE id_venta =" + id + ";")
        res.json("updateventa")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const BorrarVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE from ventas where id_venta =" + id + "");
        res.json("DatoBorrado");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const methods = {
getVentas,
AddVentas,
ActualizarVentas,
BorrarVenta,
ObtenerVenta
}