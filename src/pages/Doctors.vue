<template>
  <main>
    <DataTable :is-doctors="route.name === 'doctors'" />
    <CrudForm :is-doctors="route.name === 'doctors'" />
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
// Components
import DataTable from '../components/DataTable.vue';
import CrudForm from '../components/CrudForm.vue';

const route = useRoute();
</script>