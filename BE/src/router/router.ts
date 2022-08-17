import { Router } from "express";
import {storeRoute} from "./store-route";


export const router = Router();
router.use('/stores', storeRoute);