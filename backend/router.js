import { Router } from "express";
const router = Router();
import item from "./model.js"

router.get("/",async(req,res)=>{
    try {
        const Item= await item.find();
        res.status(200).json(Item);
    } catch (err) {
        res.status(404).json({"message":err})
    }
})

export default router