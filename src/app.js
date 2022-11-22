import express from "express";
import morgan from "morgan";
//Routes
import movimientosRoutes from "./Routes/movimientos.routes"
import radiadoresRoutes from "./Routes/radiadores.routes"
import comprasRoutes from "./Routes/compras.routes"
import ventasRoutes from "./Routes/ventas.routes"
import consultasRoutes from "./Routes/consultas.routes"

const app=express()
const cors = require('cors')

//Settings
app.set("port",3001)

//Middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
//Routes
app.use("/movimientos",movimientosRoutes)
app.use("/radiadores",radiadoresRoutes)
app.use("/compras",comprasRoutes)
app.use("/ventas",ventasRoutes)
app.use("/consultas", consultasRoutes)


export default app