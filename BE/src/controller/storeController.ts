import {Store} from "../model/store";
import {NextFunction, query, Request, Response} from "express";

class StoreController {
    getAll = async (req: Request, res: Response) => {
        let stores = await Store.find();
        res.status(200).json(stores);

    }
    addProduct = async (req: Request, res: Response) => {
        let product = req.body;
        console.log(product)
        product = await Store.create(product);
        // let newProduct = await Store.findById(product._id);
        res.status(201).json(product);

    }
    deleteProduct = async (req: Request, res: Response) => {
        let id = req.params.id;
        let product = await Store.findById(id);
        if (!product) {
            res.status(404).json();

        } else {
            product.delete();
            res.status(204).json();
        }
    }
    getProduct = async (req: Request, res: Response) => {
        let id = req.params.id;
        try{
            let product = await Store.findById(id);
                res.status(200).json(product);
        } catch(error){
            res.status(404).json(error.message)
        }


    }
    updateProduct = async (req: Request, res: Response) => {
        let id = req.params.id;
        let product = await Store.findById(id);
        if (!product) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Store.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            product = await Store.findById(id);
            res.status(200).json(product);
        }
    }
    searchProduct = async (req: Request, res: Response)=>{
        let name = req.query.name;
        let listProductSearch = await Store.find({name: name});
        if (!listProductSearch[0]) {
            res.status(404).json();
        } else {
            res.status(200).json(listProductSearch[0]);
        }
    }

}

export default new StoreController();