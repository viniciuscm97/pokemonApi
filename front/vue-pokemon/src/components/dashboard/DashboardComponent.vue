<template>
    <div class="row justify-content-center">
      <h1>Dashboard Pokemons</h1>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      pokemons: [],
      search: '',
      loading: false,
      error: false,
      message: '',
    };
  },
};
</script>
