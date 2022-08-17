"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_1 = require("../model/category");
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            let categories = await category_1.Category.find();
            res.status(200).json(categories);
        };
        this.getCategory = async (req, res, next) => {
            let id = req.params.id;
            try {
                let categories = await category_1.Category.findById(id);
                if (!categories) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(categories);
                }
            }
            catch (err) {
                next(err);
            }
        };
        this.addCategory = async (req, res, next) => {
            try {
                let add = req.body;
                add = await category_1.Category.create(add);
                res.status(201).json(add);
            }
            catch (err) {
                next(err);
            }
        };
        this.deleteCategory = async (req, res, next) => {
            let id = req.params.id;
            try {
                let categories = await category_1.Category.findById(id);
                if (!categories) {
                    res.status(404).json();
                }
                else {
                    categories.delete();
                    res.status(200).json();
                }
            }
            catch (err) {
                next(err);
            }
        };
        this.updateCategory = async (req, res, next) => {
            let id = req.params.id;
            try {
                let categories = await category_1.Category.findById(id);
                if (!categories) {
                    res.status(404).json();
                }
                else {
                    let data = req.body;
                    await category_1.Category.findOneAndUpdate({
                        _id: id
                    }, data);
                    data._id = id;
                    res.status(200).json(data);
                }
            }
            catch (err) {
                next(err);
            }
        };
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map