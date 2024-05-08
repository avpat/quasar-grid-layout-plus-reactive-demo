<template>
  <div
    class="widget"
    id="widget-{{ props.widget.id }}"
  >
    <q-card class="my-card">
      <q-card-section
        class="text-white"
        :style="{ backgroundColor: props.widget.backgroundColor, color: props.widget.textColor }"
      >
        <div ref="titleElement"
             class="text-h6"
             contenteditable
             spellcheck="false"
             @keydown.enter="validate"
        > {{ props.widget.title }}</div>
        <div class="text-subtitle2">{{ props.widget.subtitle }}</div>

      </q-card-section>

      <q-separator ></q-separator>

      <q-card-actions align="right">
        <q-btn class="bg-light-green-2">{{ props.widget.actionText }}</q-btn>
        <q-btn class="bg-warning" >DELETE</q-btn>
      </q-card-actions>
    </q-card>
  </div>

</template>
<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

const props = defineProps(['widget']);

const title = ref(props.widget.title);
const titleElement = ref(null);

function validate(event : Event) {
  (event.target as HTMLInputElement).blur();
  title.value = titleElement.value;
}

watch(() => props.widget.title, (newVal) => {
  title.value = newVal;
});

defineExpose({ titleElement });
// console.log(props.widget);

</script>
<style scoped>

</style>
