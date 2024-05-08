<template>
  <div class="widget">
    <q-card class="my-card">
      <q-card-section class="bg-light-blue text-white">
        <div class="text-h6"> {{ widget.title }}</div>
        <div class="text-subtitle2">{{ widget.subtitle }}</div>
      </q-card-section>

      <q-separator ></q-separator>

      <q-card-actions align="right">
        <q-btn class="bg-light-green-2">{{ widget.actionText }}</q-btn>
        <q-btn class="bg-warning">DELETE</q-btn>
      </q-card-actions>
    </q-card>
  </div>

</template>
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps(['widget']);

// console.log(props.widget);

</script>
<style scoped>

</style>
