<template>
    <div class="row">
      <h1>Card Pokemon Details Pokemons</h1>
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
