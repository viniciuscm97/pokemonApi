import { createRouter, createWebHistory } from 'vue-router';
import DashboardComponent from '../components/dashboard/DashboardComponent.vue';
import SearchPokemonsComponent from '../components/search-pokemons/SearchPokemonsComponent.vue';
import CardPokemonDetailsComponent from '../components/card-pokemon-details/CardPokemonDetailsComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '/search',
      name: 'about',
      component: SearchPokemonsComponent
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon-details',
      component: CardPokemonDetailsComponent
    }
  ]
})

export default router
