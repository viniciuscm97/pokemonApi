import { Router } from 'express';
import PokemonsController from './controllers/PokemonsController';

const routes = Router();
const pokemonsController = new PokemonsController();

// Get pokemon by id
routes.get('/pokemons/:idOrName', pokemonsController.getByidOrName);

// Get all pokemons
routes.get('/pokemons', pokemonsController.getAll);
export default routes;
