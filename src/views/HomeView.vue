<template>
  <button class="btn btn-light-primary">KLK</button>
  <button class="btn btn-primary">Primary</button>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn.btn-primary:hover {
  color: white;
  background-color: var(--bs-primary) !important;
}
.btn.btn-active-primary:hover {
  color: white;
}

.btn-light-primary {
  background-color: (var(--bs-primary) 5);
}
</style>
