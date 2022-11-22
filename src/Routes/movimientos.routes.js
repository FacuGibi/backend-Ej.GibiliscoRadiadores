import { request, response, Router } from "express";
import { methods as MovimientosController } from "../Controllers/movimientos.controller";
const router =Router()

router.get("/",MovimientosController.getMovimientos)
router.get("/:id",MovimientosController.ObtenerMovimiento)
router.post("/",MovimientosController.AddMovimientos )
router.put("/:id",MovimientosController.ActualizarMovimientos )
router.delete("/:id",MovimientosController.BorrarMovimiento )

export default router