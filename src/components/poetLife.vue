<script setup>
import { userStore } from '../stores/modules/user';
import { computed } from 'vue';
import { flyToPoint, addModel } from '../utils/mapUtils.js'

const store = userStore();

// 诗人生平介绍
const poetLife = computed(() => {
  return store.introduction;
})

const goToPoint = (lon, lat,name) => {
	store.setCurrentAdressName({
    lon,lat,name
  })
  flyToPoint(lon, lat);
  addModel(lon, lat);
}

</script>

<template>
  <div v-show="poetLife">
    <el-card>
      <div class="poetLife" :title="poetLife">
        {{poetLife}}
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="sass">
  .poetLife
    font-size: 1em
    display: -webkit-box
    text-overflow: ellipsis
    word-break: break-all
    -webkit-line-clamp: 10
    -webkit-box-orient: vertical
    overflow: hidden
</style>