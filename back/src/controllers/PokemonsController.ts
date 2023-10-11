import { Request, Response } from 'express';
import PokemonsService from '../services/PokemonsService';

const pokemonService = new PokemonsService();

class PokemonsController {
  async getByidOrName(req: Request, res: Response) {
    try {
      const { idOrName } = req.params;
      if (!idOrName) {
        return res.status(400).json({ error: 'Nome ou ID não informado!' });
      }
      const pokemon = await pokemonService.getByIdOrName(idOrName);

      if (!pokemon) {
        return res.status(400).json({ message: 'Nenhum pokémon encontrado com este ID ou nome!' });
      }

      return res.json({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((type: any) => type.type.name),
        images: [pokemon.sprites.front_default, pokemon.sprites.back_default],
      });
    } catch (error: Error | any) {
      return res.status(500).json({ error: error?.message || 'Unexpected error!' });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const response = await pokemonService.getAllWithDetails();
      return res.json(response.data);
    } catch (error: Error | any) {
      return res.status(500).json({ error: error?.message || 'Unexpected error!' });
    }
  }
}

export default PokemonsController;
