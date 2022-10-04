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

const goToPoint = (lon, lat) => {
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
      <!-- <div>
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
          <li v-for="item in poetInfo" class="infinite-list-item">
            <el-button type="primary" plain @click="goToPoint(item.Longitude, item.Latitude)">{{item.year}}-{{item.Title}}</el-button>
          </li>
        </ul>
      </div> -->
    </el-card>
  </div>
</template>

<style scoped>
  .poetLife {
    font-size: 1em;
    display: -webkit-box;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 1em;
    background: #fff;
    margin: 10px;
    color: var(--el-color-primary);
  }
  
  .infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
  }
</style>