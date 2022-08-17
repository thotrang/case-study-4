import { Router } from "express";
import {categoryRoute} from './category-route'

export const router = Router();

router.use('/categories',categoryRoute)