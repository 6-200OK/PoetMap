<script setup>
import { userStore } from '../stores/modules/user';
import { ref, computed } from 'vue';
import { flyToPoint, addModel } from '../utils/mapUtils.js'

const store = userStore();

// 每个地点的信息
// const poetInfo = computed(() => {
  // return store.poetInfo;
// })

// 诗人生平介绍
const poetLife = computed(() => {
  return store.introduction;
})

const count = ref(0);

// 无限滚动
const load = () => {
  count.value += 2;
}

const goToPoint = (lon, lat,name) => {
	store.setCurrentAdressName(name)
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