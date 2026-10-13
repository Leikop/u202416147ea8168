<script setup></script>

<template>
  <header class="app-header">
    <span class="app-brand">Vehicle Showroom</span>
    <nav class="app-nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/vehicles">Vehicles</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <main class="app-main">
    <router-view />
  </main>
</template>
