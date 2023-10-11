<script setup lang="ts">
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dar" style="color: #12b9ad;">
      <a class="navbar-brand" href="#">Pokémons Site</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/search">Search</router-link>
        </li>
      </ul>
    </nav>
  </div>

  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
