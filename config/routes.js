import { Router } from "express";
import infoController from "../controllers/infoController.js";
const router=new Router()

//Obtiene toda la información disponible
router.get('/info',infoController.index)
//Crear una nueva información/ 
 
router.post('/info',infoController.store)
//obtener los detalles de la información por medio del ID
router.get('/info/:id',infoController.details)

export default router