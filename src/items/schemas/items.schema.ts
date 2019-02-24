import * as mongoose from 'mongoose';

export const ItemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    discount: Number,
});
