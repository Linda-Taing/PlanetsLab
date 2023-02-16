import { dbContext } from "../db/DbContext.js"

class GalaxysService {
    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxys.create(galaxyData)
        return galaxy
    }

    async getGalaxys() {
        const galaxys = await dbContext.Galaxys.find()
        return galaxys


    }

}
export const galaxysService = new GalaxysService()