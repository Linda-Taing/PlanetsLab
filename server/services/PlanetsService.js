import { BadRequest } from "../utils/Errors.js"
import { dbContext } from "../db/DbContext.js"



class PlanetsService {
    async editPlanets(planetId, planetsData) {
        const planet = await dbContext.Planets.findById(planetId)
        if (!planetId) {
            throw new BadRequest('Invalid Plant ID' + planetId)
        }
        return planet
    }
    async getPlanets() {
        const planets = await dbContext.Planets.find()
            .populate('galaxy', 'name description')
        return planets
    }
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }

    // async getGalaxyById(planetId) {

    //     const planets = await dbContext.Planets
    //         .find({ planetId })
    //         .populate('galaxy', 'name description')
    // }


}

export const planetsService = new PlanetsService()