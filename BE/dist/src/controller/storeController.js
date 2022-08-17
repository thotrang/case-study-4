"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("../model/store");
class StoreController {
    constructor() {
        this.getAll = async (req, res) => {
            let stores = await store_1.Store.find();
            res.status(200).json(stores);
        };
        this.addProduct = async (req, res) => {
            let product = req.body;
            console.log(product);
            product = await store_1.Store.create(product);
            res.status(201).json(product);
        };
        this.deleteProduct = async (req, res) => {
            let id = req.params.id;
            let product = await store_1.Store.findById(id);
            if (!product) {
                res.status(404).json();
            }
            else {
                product.delete();
                res.status(204).json();
            }
        };
        this.getProduct = async (req, res) => {
            let id = req.params.id;
            try {
                let product = await store_1.Store.findById(id);
                res.status(200).json(product);
            }
            catch (error) {
                res.status(404).json(error.message);
            }
        };
        this.updateProduct = async (req, res) => {
            let id = req.params.id;
            let product = await store_1.Store.findById(id);
            if (!product) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await store_1.Store.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                product = await store_1.Store.findById(id);
                res.status(200).json(product);
            }
        };
        this.searchProduct = async (req, res) => {
            let name = req.query.name;
            let listProductSearch = await store_1.Store.find({ name: name });
            if (!listProductSearch[0]) {
                res.status(404).json();
            }
            else {
                res.status(200).json(listProductSearch[0]);
            }
        };
    }
}
exports.default = new StoreController();
//# sourceMappingURL=storeController.js.map