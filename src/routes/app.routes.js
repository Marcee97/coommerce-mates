import {Router} from "express";

import { prueba } from "../controllers/app.controllers.js";





const router = Router()

router.get('/mates', prueba)


export default router