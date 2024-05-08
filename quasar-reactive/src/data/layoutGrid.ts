import { reactive } from 'vue';

export const layoutGrid = reactive([
  {
    x: 0, y: 0, w: 3, h: 4, i: 0, static: true,
  },
  {
    x: 3, y: 0, w: 9, h: 4, i: 1, static: false,
  },
  {
    x: 0, y: 4, w: 6, h: 4, i: 2,
  },
  {
    x: 6, y: 4, w: 6, h: 4, i: 3,
  },
  {
    x: 0, y: 8, w: 4, h: 4, i: 4,
  },
  {
    x: 4, y: 8, w: 4, h: 4, i: 5,
  },
  {
    x: 0, y: 12, w: 4, h: 4, i: 6,
  },
  {
    x: 2, y: 12, w: 4, h: 4, i: 7,
  },
  {
    x: 6, y: 12, w: 6, h: 4, i: 8, static: true,
  },
  {
    x: 6, y: 12, w: 2, h: 4, i: 9,
  },
  {
    x: 8, y: 16, w: 4, h: 4, i: 10,
  },
]);
