import { Request, Response } from "express";
declare class StoreController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    getProduct: (req: Request, res: Response) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
    searchProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: StoreController;
export default _default;
