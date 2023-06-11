<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm">
    <div class="container-fluid">
      <div class="navbar-brand">
        <img
          alt="Vue logo"
          class="logo"
          src="https://pinia.vuejs.org/logo.svg"
          width="50"
          height="50"
        />
        <span ref="navTitle" class="fw-bold fs-6"
          >Pinia - {{ props.title != undefined ? props.title : 'Ejercicios' }}</span
        >
      </div>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="VPButton medium brand mx-1"
            >Inicio</router-link
          >
          <router-link :to="{ name: 'clients' }" class="VPButton medium brand mx-1"
            >Clientes</router-link
          >
          <router-link :to="{ name: 'counter-sp' }" class="VPButton medium brand mx-1"
            >Setup</router-link
          >
          <router-link :to="{ name: 'counter-op' }" class="VPButton medium brand mx-1"
            >Options</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IMainNavBarProps {
  title: string | undefined
}

const props = defineProps<IMainNavBarProps>()

const navTitle = ref<HTMLElement>()
</script>

<style scoped>
.VPButton.medium {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}

a {
  text-decoration: none;
}

.VPButton {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

.VPButton.brand {
  border-color: var(--color-brand);
  color: var(--color-brand);
  background-color: transparent;
}
.VPButton.brand:hover {
  border-color: var(--color-brand-dark);
  color: #000;
  background-color: var(--color-brand);
}
.VPButton.brand.router-link-active {
  border-color: var(--color-brand-dark);
  color: #000;
  background-color: var(--color-brand);
}
</style>
