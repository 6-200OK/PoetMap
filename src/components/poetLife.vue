<script setup>
import { userStore } from '../stores/modules/user';
import { computed } from 'vue';
import { flyToPoint, addModel } from '../utils/mapUtils.js'

const store = userStore();

// 诗人简介
const poetLife = computed(() => {
  return store.introduction;
})
// 获取诗人足迹对应的经纬度
const goToPoint = (lon, lat,name) => {
	store.setCurrentAdressName({
    lon,lat,name
  })
  // 根据经纬度进行定位
  flyToPoint(lon, lat);
  addModel(lon, lat);
}

</script>

<template>
  <div v-show="poetLife">
    <el-card>
      <div class="poetLife" :title="poetLife" :color="red">
        {{poetLife}}
      </div>
    </el-card>
  </div>
</template>
<!-- 设计诗人生平介绍样式 -->
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