import { NextFunction, Request, Response } from "express";
export declare class CategoryController {
    getAll: (req: Request, res: Response) => Promise<void>;
    getCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    addCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
