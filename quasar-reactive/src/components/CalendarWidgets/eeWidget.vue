<template>
  <div
    class="widget"
    id="widget-{{ props.widget.id }}"
  >
    <q-card class="my-card">
      <q-card-section
        class="text-white"
        ref="wrapper"
        :style="{ backgroundColor: props.widget.backgroundColor, color: props.widget.textColor }"
      >
        <div ref="titleElement"
             class="text-h6"
             contenteditable
             spellcheck="false"
             @keydown.enter="validate"
             @blur="handleTitleChange(props.widget.id, $event, widget.titleElement)"
        > {{ props.widget.title }}
        </div>
        <div class="text-caption">£ {{ props.widget.price }}</div>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-actions align="right">
        Quantity:
        <div ref="quantityElement"
             class="bg-light-blue rounded-borders text-center q-mr-sm q-ml-sm q-pa-xs text-black"
             style="min-width: 40px; min-height: 26px;"
             contenteditable
             spellcheck="false"
             @keydown.enter="validate"
             @blur="handleQuantityChange(props.widget.id, $event, widget.titleElement)"
        > {{ props.widget.quantity }}
        </div>
        <q-btn class="bg-light-blue-2 text-black">{{ props.widget.actionText }}</q-btn>
      </q-card-actions>
    </q-card>
  </div>

</template>
<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

const props = defineProps(['widget']);

const title = ref(props.widget.title);
const titleElement = ref(null);
const quantityElement = ref(null);
const price = ref(props.widget.price);

const emit = defineEmits(['titleChanged', 'quantityChanged']);

const handleQuantityChange = (id: number, event: Event, element: HTMLDivElement) => {
  emit('quantityChanged', id, element);
  // eslint-disable-next-line no-alert
  // console.log(element.innerText);
};

const handleTitleChange = (id: number, event: Event, element: HTMLDivElement) => {
  emit('titleChanged', id, element);
  // eslint-disable-next-line no-alert
  // console.log(element.innerText);
};

function validate(event: Event) {
  (event.target as HTMLInputElement).blur();
  title.value = titleElement.value;
}

watch(() => props.widget.quantity, (newVal) => {
  quantityElement.value = newVal;
});
watch(() => props.widget.price, (newVal) => {
  price.value = newVal;
});

defineExpose({
  titleElement, quantityElement, price, handleTitleChange, validate, handleQuantityChange,
});

// console.log(props.widget);

</script>
<style scoped>

</style>
