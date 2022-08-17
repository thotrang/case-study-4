import {NextFunction, Request, Response} from "express";

import {Category} from "../model/category"

export class CategoryController {
    getAll = async (req: Request, res: Response) => {
        let categories = await Category.find()
        res.status(200).json(categories)
    }
    getCategory = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id
        try {
            let categories = await Category.findById(id)
            if (!categories) {
                res.status(404).json()
            }else {
                res.status(200).json(categories)
            }
        }catch (err){
            next(err)
        }
    }
    addCategory = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let add = req.body
            add = await Category.create(add)
            res.status(201).json(add)
        } catch (err) {
            next(err)
        }
    }
    deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id
        try {
            let categories = await Category.findById(id)
            if (!categories) {
                res.status(404).json()
            }
            else {
                categories.delete()
                res.status(200).json()
            }
        }catch (err) {
            next(err)
        }
    }
    updateCategory = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id
        try {
            let categories = await Category.findById(id)
            if (!categories) {
                res.status(404).json()
            }
            else {
                let data = req.body
                await Category.findOneAndUpdate({
                    _id:id
                },data)
                data._id = id
                res.status(200).json(data)
            }
        }catch (err) {
            next(err)
        }
    }
}
export default new CategoryController()