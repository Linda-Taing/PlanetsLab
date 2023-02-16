import { galaxysService } from "../services/GalaxysService.js"
import { planetsService } from "../services/PlanetsService.js"
import BaseController from "../utils/BaseController.js"


export class GalaxysController extends BaseController {

    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxys)
            //       VVVVVVV galaxy Id that we change in our req.body
            .post('/:galaxyId/planets', this.createPlanet)
            // .get('/:galaxyId/planets' this.getPlanets)
            .post('', this.createGalaxy)

    }
    // This is so you don't hardcode.
    async createPlanet(req, res, next) {
        try {
            let planetBody = req.body
            planetBody.galaxyId = req.params.galaxyId
            let galaxy = await planetsService.createPlanet(planetBody)
            return res.send(galaxy);
        } catch (error) {

        }
    }

    async createGalaxy(req, res, next) {
        try {
            let galaxyData = req.body
            let galaxy = await galaxysService.createGalaxy(galaxyData)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxys(req, res, next) {
        try {
            let galaxys = await galaxysService.getGalaxys()

            return res.send(galaxys)

        } catch (error) {
            next(error)
        }
    }
}