<template>
  <q-page class="row items-center justify-evenly">
    <ReactiveGridLayout />
  </q-page>
</template>

<script setup lang="ts">
import ReactiveGridLayout from 'components/GridLayout/reactiveGridLayout.vue';

defineOptions({
  name: 'IndexPage',
});

</script>
