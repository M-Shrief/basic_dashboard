<template>
  <main>
    <DataTable :is-patients="route.name === 'patients'" />
    <CrudForm :is-patients="route.name === 'patients'" />
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
// Components
import DataTable from '../components/DataTable.vue';
import CrudForm from '../components/CrudForm.vue';


const route = useRoute();
</script>