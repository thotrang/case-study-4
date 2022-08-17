"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRoute = void 0;
const express_1 = require("express");
const storeController_1 = __importDefault(require("../controller/storeController"));
exports.storeRoute = (0, express_1.Router)();
exports.storeRoute.get('', storeController_1.default.getAll);
exports.storeRoute.post('', storeController_1.default.addProduct);
exports.storeRoute.delete('/:id', storeController_1.default.deleteProduct);
exports.storeRoute.get('/search', storeController_1.default.searchProduct);
exports.storeRoute.get('/detail/:id', storeController_1.default.getProduct);
exports.storeRoute.put('/:id', storeController_1.default.updateProduct);
//# sourceMappingURL=store-route.js.map