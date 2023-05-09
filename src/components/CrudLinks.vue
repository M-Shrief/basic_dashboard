<template>
  <th class="crud-links">
    <img src="@/assets/remove.svg" alt="remove" @click="$emit('remove')">
  </th>
</template>
<script setup>
defineEmits(['remove'])
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';
@include crud-links
</style>