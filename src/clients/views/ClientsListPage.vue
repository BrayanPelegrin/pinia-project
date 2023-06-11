<script setup lang="ts">
import useClients from '@/clients/composables/useClients'
const { clientList } = useClients()
const printer = (client: any) => {
  console.log('Cliente: ', client)
}
</script>
<template>
  <div class="bg-white shadow-sm rounded pt-4">
    <h2 class="ms-4 mb-4">Lista de Clientes</h2>

    <!-- Lista de Clientes -->
    <div style="overflow-y: scroll; max-height: 500px" class="m-1 border-bottom">
      <table class="table border-top table-hover w-100">
        <thead class="bg-white">
          <th class="p-3">Nombre</th>
          <th class="p-3">Empresa</th>
          <th class="p-3">Correo Electronico</th>
          <th class="p-3">Telefono</th>
          <th class="p-3">Estado</th>
        </thead>
        <tbody>
          <tr
            v-for="client in clientList"
            :key="client.id"
            class="border-top border-bottom"
            @click="printer(client)"
          >
            <td class="p-3">{{ client.name }}</td>
            <td class="p-3">{{ client.company }}</td>
            <td class="p-3">{{ client.email }}</td>
            <td class="p-3">{{ client.phone }}</td>
            <td class="p-3">{{ client.isActive ? 'Activo' : 'Inactivo' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Paginacion -->
    <div class="d-flex justify-content-center me-5 p-3">
      <div class="btn-group">
        <button class="btn btn-outline-warning text-dark">Anterior</button>
        <button v-for="index in 5" :key="index" class="btn btn-outline-warning text-dark">
          {{ index }}
        </button>
        <button class="btn btn-outline-warning text-dark">Siguiente</button>
      </div>
    </div>
    <!-- Loading -->
  </div>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 15px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
