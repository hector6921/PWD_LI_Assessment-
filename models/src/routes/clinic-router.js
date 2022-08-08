'use strict';
import { Router } from "express";
export {getPatients} from '../controllers/clinic-controller'
const router = Router();

router.get('/:name', getPatients )
export default router;