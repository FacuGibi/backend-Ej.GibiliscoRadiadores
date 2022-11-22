import { getConnection } from "./../Database/database"

const getMovimientos = async (req, res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT * FROM movimientos")
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const ObtenerMovimiento = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection()
        const result = await connection.query("SELECT fecha_ingreso,descrip_ingreso,monto_ingreso,fecha_egreso,descrip_egreso,monto_egreso, monto_naranjax, monto_mercadopago from movimientos where id_movimiento="+id+"")
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


const AddMovimientos = async (req, res) => {
    try {
        const { fecha_ingreso, descrip_ingreso, monto_ingreso, fecha_egreso, descrip_egreso, monto_egreso, monto_naranjax, monto_mercadopago } = req.body

        if (fecha_ingreso === undefined || descrip_ingreso === undefined || monto_ingreso === undefined || fecha_egreso === undefined || descrip_egreso === undefined || monto_egreso === undefined || monto_naranjax === undefined || monto_mercadopago === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
            return
        }
        const connection = await getConnection()
        const result = await connection.query(`INSERT INTO movimientos(fecha_ingreso,descrip_ingreso,monto_ingreso,fecha_egreso,descrip_egreso,monto_egreso, monto_naranjax, monto_mercadopago) VALUES ('${fecha_ingreso}','${descrip_ingreso}', ${monto_ingreso}, '${fecha_egreso}', '${descrip_egreso}', ${monto_egreso}, ${monto_naranjax}, ${monto_mercadopago})`)
        res.json("addMove")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const ActualizarMovimientos = async (req, res) => {
    try {
        const { id } = req.params
        const { fecha_ingreso, descrip_ingreso, monto_ingreso, fecha_egreso, descrip_egreso, monto_egreso, monto_naranjax, monto_mercadopago } = req.body

        if (fecha_ingreso === undefined || descrip_ingreso === undefined || monto_ingreso === undefined || fecha_egreso === undefined || descrip_egreso === undefined || monto_egreso === undefined || monto_naranjax === undefined || monto_mercadopago === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const connection = await getConnection()
        const result = await connection.query(`UPDATE movimientos SET fecha_ingreso='${fecha_ingreso}', descrip_ingreso='${descrip_ingreso}', monto_ingreso=${monto_ingreso}, fecha_egreso='${fecha_egreso}', descrip_egreso='${descrip_egreso}', monto_egreso=${monto_egreso}, monto_naranjax=${monto_naranjax}, monto_mercadopago=${monto_mercadopago} WHERE id_movimiento=${id};`)
        res.json("updateMove")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const BorrarMovimiento = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE from movimientos where id_movimiento="+id+"");
        res.json("DatoBorrado");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getMovimientos,
    AddMovimientos,
    ActualizarMovimientos,
    BorrarMovimiento,
    ObtenerMovimiento
}