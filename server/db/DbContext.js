import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy.js';
import { PlanetSchema } from '../models/Planets.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxys = mongoose.model('Galaxy', GalaxySchema);

  Planets = mongoose.model('Planet', PlanetSchema);

}

export const dbContext = new DbContext()
