<script lang="ts">
import { defineComponent } from 'vue';
import PokemonsService from '../../services/PokemonsService';

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    images: string[];
  }

export default defineComponent({
  name: 'SearchPokemons',
  data() {
    return {
      pokemon: null as Pokemon | null,
      search: '',
      loading: false,
      error: false,
      message: '',
    };
  },
  methods: {
    async handleSearch() {
      this.loading = true;
      const nameOrId = (this.$refs.nameOrId as HTMLInputElement).value;
      console.log("nameOrId ====>", nameOrId);
      if (!nameOrId) {
        console.log('DENTRO');

        this.message = 'Digite o nome ou ID do Pokémon';
        this.error = true;
        this.loading = false;
        return;
      }
      console.log(await PokemonsService.getByIdOrName(nameOrId));

      const pokemonResponse = await PokemonsService.getByIdOrName(nameOrId);
      console.log("pokemonResponse ====>", pokemonResponse);
      if (!pokemonResponse || pokemonResponse?.error) {
        this.message = pokemonResponse.message;
        this.error = true;
        this.loading = false;
        return;
      }

      this.pokemon = pokemonResponse.data;
    },
  },
});
</script>

<template>
    <div class="row justify-content-center">
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Bulbasaur, charmander, 1, 123, etc"
          title="Digite o nome ou ID do Pokémon"
          aria-label="Search"
          ref="nameOrId">
        <button
          class="btn btn-outline-success" type="submit"
          style="border-color: #12b9ad; color: #12b9ad; background-color: black;"
          @click="handleSearch">Procurar</button>
      </form>

      <div v-if="loading && !pokemon">
        <h3 class="text-center">Nenhum Pokémon encontrado</h3>
      </div>

      <div v-if="error">
        <h3 class="text-center">{{ message }}</h3>
      </div>

      <div v-if="loading">
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
      </div>

      <div v-if="pokemon">
        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{pokemon.name}}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Peso: </strong>{{ pokemon.weight }}</li>
            <li class="list-group-item">
              <strong>Altura: </strong>{{ pokemon.height }}</li>
            <li class="list-group-item">
              <strong>Tipos: </strong>{{ pokemon.types.join(', ') }}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
</template>
