<script setup lang="ts"></script>
<template>
  <div style="overflow-y: scroll; max-height: 500px" class="m-1">
    <table class="table table-hover w-100">
      <thead class="bg-white border-top border-bottom">
        <th class="p-3">Nombre</th>
        <th class="p-3">Empresa</th>
        <th class="p-3">Correo Electronico</th>
        <th class="p-3">Telefono</th>
        <th class="p-3">Estado</th>
      </thead>
      <tbody>
        <tr v-for="number in 10" :key="number" class="border-top border-bottom">
          <td class="p-3">Nombre</td>
          <td class="p-3">Empresa</td>
          <td class="p-3">Correo Electronico</td>
          <td class="p-3">Telefono</td>
          <td class="p-3">Estado</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
