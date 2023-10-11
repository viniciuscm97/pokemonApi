import axios, { type AxiosInstance } from 'axios';

class PokemonsService {
  pokemonApiAxios: AxiosInstance;

  constructor() {
    this.pokemonApiAxios = axios.create({
      baseURL: 'https://pokeapi.co/api/v2',
      validateStatus: (status) => status < 500,
    });
  }

  async getAllWithDetails() {
    const pokemonsResponse = await this.pokemonApiAxios.get('/pokemon?limit=100000&offset=0')
      .then((response) => response.data?.results)
      .catch((error) => ({
        error: error.message,
        status: error.response.status,
      }));

    if (pokemonsResponse.error) {
      return pokemonsResponse;
    }
    const pokemonsWithDetails = await Promise.all(pokemonsResponse.map(async (pokemon: any) => {
      const pokemonDetails = await this.pokemonApiAxios.get(`/pokemon/${pokemon.name}`);
      return pokemonDetails?.data;
    }));
    return pokemonsWithDetails;
  }

  async getByIdOrName(idOrName: string) {
    return this.pokemonApiAxios.get(`/pokemon/${idOrName}`)
      .then((response) => response.data)
      .catch((error) => ({
        error: error.message,
        status: error.response.status,
      }));
  }
}

export default PokemonsService;
