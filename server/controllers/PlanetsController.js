import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";



export class PlanetsController extends BaseController {

    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)
            .post('', this.createPlanet)
            .put('/planetId', this.editPlanets)
    }
    async editPlanets(req, res, next) {
        try {
            const planetsData = req.body
            const planetId = req.params.planetId
            const planet = await planetsService.editPlanets(planetId, planetsData)
            return res.send(planet)
        } catch (error) {
            next(error)
        }

    }
    async getPlanets(req, res, next) {
        try {
            let planets = await planetsService.getPlanets()
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
    async createPlanet(req, res, next) {
        try {
            const planetData = req.body
            const planet = await planetsService.createPlanet(planetData)
            return res.send(planet)

        } catch (error) {
            next(error)
        }

    }
}