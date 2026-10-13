<script setup>
import { onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import useVehicleStore from '../../application/vehicle.store.js';

const store = useVehicleStore();

onMounted(() => {
  if (!store.vehiclesLoaded) store.fetchVehicles();
});
</script>

<template>
  <h1 class="page-title">Vehicles</h1>
  <div class="card">
    <DataTable :value="store.vehicles" :loading="!store.vehiclesLoaded" dataKey="id" stripedRows>
      <Column field="id" header="ID" />
      <Column field="name" header="Name" />
      <Column field="vehicleCategory" header="Category" />
      <Column field="maxCapacity" header="Max capacity" />
      <template #empty>No vehicles found.</template>
    </DataTable>
  </div>
</template>
