import { Schema } from "mongoose";

export const GalaxySchema = new Schema({

    name: { type: String, required: true, minLength: 3, maxLength: 15 },
    stars: { type: Number, required: true },
    description: { type: String, default: '', maxLength: 500 }



}, { timestamps: true, toJSON: { virtuals: true } })