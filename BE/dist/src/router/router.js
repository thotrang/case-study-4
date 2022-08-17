"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const store_route_1 = require("./store-route");
exports.router = (0, express_1.Router)();
exports.router.use('/stores', store_route_1.storeRoute);
//# sourceMappingURL=router.js.map