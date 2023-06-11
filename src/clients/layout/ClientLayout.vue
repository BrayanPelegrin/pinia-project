<script setup lang="ts">
import MainNavBar from '@/shared/components/MainNavBar.vue'
</script>

<template>
  <MainNavBar title="Clientes" />

  <main class="p-5">
    <router-view />
  </main>
</template>

<style scoped></style>
