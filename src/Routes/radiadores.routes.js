import { request, response, Router } from "express";
import { methods as RadiadoresController } from "../Controllers/radiadores.controller";
const router = Router()

router.get("/", RadiadoresController.getRadiadores)
router.get("/:id", RadiadoresController.ObtenerRadiador)
router.post("/", RadiadoresController.AddRadiadores)
router.put("/:id", RadiadoresController.ActualizarRadiadores)
router.delete("/:id", RadiadoresController.BorrarRadiador)

export default router