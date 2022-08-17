"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const mongoose_1 = require("mongoose");
const storeSchema = new mongoose_1.Schema({
    name: String,
    address: String,
    userid: Number,
    image: String
});
const Store = (0, mongoose_1.model)('Store', storeSchema);
exports.Store = Store;
//# sourceMappingURL=store.js.map