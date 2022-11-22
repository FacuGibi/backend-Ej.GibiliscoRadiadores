import { getConnection } from "./../Database/database"


const totalIngresos = async (req, res) => {
    try {
        const connection = await getConnection();
        const sumaingresos = await connection.query("SELECT SUM(monto_ingreso) AS sumaingresos FROM movimientos")
        res.json(sumaingresos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const totalEgresos = async (req, res) => {
    try {
        const connection = await getConnection();
        const sumaegresos = await connection.query("SELECT SUM(monto_egreso) AS sumaegresos FROM movimientos")
        res.json(sumaegresos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const totalNaranjaX = async (req, res) => {
    try {
        const connection = await getConnection();
        const sumanaranjax = await connection.query("SELECT SUM(monto_naranjax) AS sumanaranjax FROM movimientos")
        res.json(sumanaranjax)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const totalMercadoPago = async (req, res) => {
    try {
        const connection = await getConnection();
        const sumamercadopago = await connection.query("SELECT SUM(monto_mercadopago) AS sumamercadopago FROM movimientos")
        res.json(sumamercadopago)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


const datosRadiador = async (req, res) => {
    try {
        const { codigo } = req.params
        const connection = await getConnection();
        const marcaModelo = await connection.query(`SELECT marca, modelo FROM radiadores WHERE cod_radiador=${codigo}`)
        res.json(marcaModelo)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}



export const methods = {
    totalIngresos,
    totalEgresos,
    totalNaranjaX,
    totalMercadoPago,
    datosRadiador
}