import { request, response, Router } from "express";
import { methods as ComprasController } from "../Controllers/compras.controller";
const router = Router()

router.get("/", ComprasController.getCompras)
router.get("/:id", ComprasController.ObtenerCompra)
router.post("/", ComprasController.AddCompras)
router.put("/:id", ComprasController.ActualizarCompras)
router.delete("/:id", ComprasController.BorrarCompra)

export default router