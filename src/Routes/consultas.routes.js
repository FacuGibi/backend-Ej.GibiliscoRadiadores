import { request, response, Router } from "express";
import { methods as ConsultasController } from "../Controllers/consultas.controller";
const router = Router()

router.get("/totalIngresos",ConsultasController.totalIngresos)
router.get("/totalEgresos",ConsultasController.totalEgresos)
router.get("/totalNaranjaX",ConsultasController.totalNaranjaX)
router.get("/totalMercadoPago",ConsultasController.totalMercadoPago)
router.get("/datosRadiador/:codigo",ConsultasController.datosRadiador)

export default router