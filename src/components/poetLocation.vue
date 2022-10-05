<script setup>

import { userStore } from '../stores/modules/user';
import { computed, ref } from 'vue';
import VueTimeline from './VueTimeline.vue';

const store = userStore();

const poetInfo = computed(() => { return store.poetInfo });

const isShow = computed(() => { return poetInfo ? true : false });

console.log(new Date(701, 1, 1));

const events = ref([{
  name: "三台",
  start: new Date(701, 1, 1),
  end: new Date(706, 2, 4),
}, {
  name: "剑阁",
  start: new Date(706, 2, 4),
  end: new Date(710, 3, 5),
}, {
  name: "江油",
  start: new Date(710, 3, 6),
  end: new Date(719, 5, 10),
}])

</script>

<template>
  <div v-if="isShow">
    <VueTimeline :data="events" class="timeline"/>
  </div>
</template>

<style scoped lang="sass">
  .timeline
    width: 100vw
    height: 100vh
    opacity: 75%

</style>