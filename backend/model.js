import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    "name": String,
    "last": String,
    "buy": String,
    "sell": String,
    "volume": String,
    "base_unit": String
});
const item = mongoose.model(`item`, itemSchema)
export default item