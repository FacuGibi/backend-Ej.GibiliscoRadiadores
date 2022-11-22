import { getConnection } from "./../Database/database"

const getRadiadores = async (req, res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT *FROM radiadores")
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
const ObtenerRadiador = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection()
        const result = await connection.query("SELECT marca, modelo ,descripcion from radiadores where cod_radiador=" + id + "")
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


const AddRadiadores = async (req, res) => {
    try {
        const { marca, modelo, descripcion } = req.body
        if (marca === undefined || modelo === undefined || descripcion === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const connection = await getConnection()
        const result = await connection.query("INSERT INTO radiadores(marca,modelo,descripcion) Values('" + marca + "','" + modelo + "','" + descripcion + "');")
        res.json("addRad")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const ActualizarRadiadores = async (req, res) => {
    try {
        const { id } = req.params
        const { marca, modelo, descripcion } = req.body
        if (marca === undefined || modelo === undefined || descripcion === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const connection = await getConnection()
        const result = await connection.query("UPDATE radiadores SET marca='" + marca + "',modelo='" + modelo + "',descripcion='" + descripcion + "' WHERE cod_radiador =" + id + ";")
        res.json("updateMove")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const BorrarRadiador = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE from radiadores where cod_radiador =" + id + "");
        res.json("DatoBorrado");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const methods = {
    getRadiadores,
    ObtenerRadiador,
    ActualizarRadiadores,
    BorrarRadiador,
    AddRadiadores
}