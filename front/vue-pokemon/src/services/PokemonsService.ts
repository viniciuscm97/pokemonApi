import Api from './Api';

export default {
  async getAll() {
    try {
      const response = await Api().get('/pokemons');
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async getByIdOrName(idOrName: string) {
    try {
      const response = await Api().get(`/pokemons/${idOrName}`);
      console.log("response.data ===>", response.data)
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
