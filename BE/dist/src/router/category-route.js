"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoute = void 0;
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controller/categoryController"));
exports.categoryRoute = (0, express_1.Router)();
exports.categoryRoute.get('', categoryController_1.default.getAll);
exports.categoryRoute.get('/:id', categoryController_1.default.getCategory);
exports.categoryRoute.post('', categoryController_1.default.addCategory);
exports.categoryRoute.delete('/:id', categoryController_1.default.deleteCategory);
exports.categoryRoute.put('/:id', categoryController_1.default.updateCategory);
//# sourceMappingURL=category-route.js.map