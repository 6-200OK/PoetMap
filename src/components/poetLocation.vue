<script setup>

import { userStore } from '../stores/modules/user';
import { computed, ref } from 'vue';
import VueTimeline from './VueTimeline.vue';

const store = userStore();

const poetInfo = computed(() => { return store.poetInfo });

const isShow = computed(() => { return poetInfo ? true : false });

const events = ref([{
  name: "event 1",
  start: new Date(2020, 1, 1),
  end: new Date(2020, 2, 4),
}, {
  name: "event 2",
  start: new Date(2020, 2, 2),
  end: new Date(2020, 3, 5),
}, {
  name: "event 3",
  start: new Date(2020, 2, 3),
  end: new Date(2020, 5, 10),
}])

</script>

<template>
  <div v-if="isShow">
    <VueTimeline :data="events" />
  </div>
</template>

<style>

</style>