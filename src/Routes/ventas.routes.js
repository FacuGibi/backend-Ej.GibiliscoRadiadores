import { request, response, Router } from "express";
import { methods as VentasController } from "../Controllers/ventas.controller";
const router = Router()

router.get("/", VentasController.getVentas)
router.get("/:id", VentasController.ObtenerVenta)
router.post("/", VentasController.AddVentas)
router.put("/:id", VentasController.ActualizarVentas)
router.delete("/:id", VentasController.BorrarVenta)

export default router