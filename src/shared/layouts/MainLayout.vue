<template>
  <MainNavBar :title="store.navTitle" />
  <main class="m-5">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import MainNavBar from '@/shared/components/MainNavBar.vue'
import { useLayoutStore } from '@/store'

const store = useLayoutStore()
</script>

<style scoped></style>
