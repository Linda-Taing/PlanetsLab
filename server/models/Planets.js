import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({

    name: { type: String, required: true },
    biome: { type: String, required: true },
    atmosphere: { type: Boolean, },
    galaxyId: { type: ObjectId, ref: 'Galaxy', required: true },



}, { timestamps: true, toJSON: { virtuals: true } })


PlanetSchema.virtual('galaxy', {
    ref: 'Galaxy',
    justOne: true,
    localField: 'galaxyId',
    foreignField: '_id'
})