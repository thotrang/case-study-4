import {Router} from 'express'
import CategoryController from "../controller/categoryController";

export const categoryRoute = Router()

categoryRoute.get('',CategoryController.getAll)
categoryRoute.get('/:id',CategoryController.getCategory)
categoryRoute.post('',CategoryController.addCategory)
categoryRoute.delete('/:id',CategoryController.deleteCategory)
categoryRoute.put('/:id',CategoryController.updateCategory)
