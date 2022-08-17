import {Router} from "express";
import storeController from "../controller/storeController";


export const storeRoute = Router();
storeRoute.get('', storeController.getAll);
storeRoute.post('', storeController.addProduct);
storeRoute.delete('/:id', storeController.deleteProduct);
storeRoute.get('/search',storeController.searchProduct);
storeRoute.get('/detail/:id',storeController.getProduct);
storeRoute.put('/:id',storeController.updateProduct);
