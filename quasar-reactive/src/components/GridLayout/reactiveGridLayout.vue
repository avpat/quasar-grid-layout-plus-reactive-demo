<template>
  <div style="width:100%;">
    <div>
      <div class="layoutJSON">
        Displayed as <code>[x, y, w, h]</code>:
        <div class="columns">
          <div class="layoutItem" v-for="item in layout" :key="item.i">
            <b>{{ item.i }}</b>: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <q-card-section class="bg-orange">
        <div> You have clicked on {{ count }} widgets</div>
      </q-card-section>
      <button @click="decreaseWidth">Decrease Width</button>
      <button @click="increaseWidth">Increase Width</button>
      <button @click="addItem">Add an item</button>
      <input type="checkbox" v-model="compact"/> Compact
      <br/>
      <grid-layout v-model:layout="layout"
                   :col-num="12"
                   :row-height="30"
                   :is-draggable="draggable"
                   :is-resizable="resizable"
                   :vertical-compact="compact"
                   :use-css-transforms="true"
      >
        <grid-item v-for="item in layout" :key="item.i"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :is-draggable="item.static ? false : draggable"
                   v-bind:class="item.static ? 'static' : ''"
        >
          <span class="removeItem" @click="removeItem(item.i)">x</span>
          <eeWidget
            v-model="widgets[item.i]"
            v-bind:widget="widgets[item.i]"
            @click="increment"
          />
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>
<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { GridItem, GridLayout } from 'vue3-grid-layout-next';
import { layoutGrid } from 'src/data/layoutGrid';
import eeWidget from '../CalendarWidgets/eeWidget.vue';
import { widgets as widgetData } from '../../data/widgetData';

const layout = ref(JSON.parse(JSON.stringify(layoutGrid)));
const draggable = ref(true);
const resizable = ref(true);
const compact = ref(false);
const widgets = ref(JSON.parse(JSON.stringify(widgetData)));
const index = ref(0);
const count = ref(0);

const increment = () => {
  count.value += 1;
};

const decreaseWidth = () => {
  // eslint-disable-next-line no-return-assign
  layout.value.forEach((item: any) => {
    if (typeof item.w === 'number') {
      item.w = Math.max(1, item.w - 1);
    }
  });
};

const increaseWidth = () => {
  // eslint-disable-next-line no-return-assign
  layout.value.forEach((item: any) => {
    item.w += 1;
  });
};

const addItem = () => {
  layout.value = layout.value.concat({
    x: (layout.value.length * 2) % 12,
    y: Infinity,
    w: 2,
    h: 2,
    i: layout.value.length.toString(),
  });
};

const removeItem = (i: string) => {
  layout.value = layout.value.filter((item: any) => item.i !== i);
};

onMounted(() => {
  index.value = layout.value.length;
  //  this.index = this.layout.length;
});

</script>

<style scoped>
.static {
  border: red dashed 2px;
  margin: 0;
  padding: 0;
}
.removeItem {
  position: absolute;
  right: 2px;
  top: 2px;
  font-size: 20px;
  cursor: pointer;
  color: #000;
  background-color: #fff;
  border-radius: 3px;
  padding: 2px 10px;
  z-index: 10;
}
</style>
