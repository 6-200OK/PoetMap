<script setup>
import { ElCard } from 'element-plus';
import { userStore } from '../stores/modules/user';
import { ref, computed } from 'vue';

const store = userStore();

const poetInfo = computed(() => {
  return store.poetInfo;
})

const poetLife = ref('李白（701年2月28日―762），字太白，号青莲居士。中国唐朝诗人，有“诗仙”之称，是伟大的浪漫主义诗人。汉族，祖籍陇西郡成纪县（今甘肃省平凉市静宁县南），出生于蜀郡绵州昌隆县（今四川省江油市青莲乡），一说生于西域碎叶（今吉尔吉斯斯坦托克马克）。逝世于安徽当涂县。其父李客，夫人有许氏、刘氏等四位，育二子（伯禽、天然）一女（平阳）。存世诗文千余篇，代表作有《蜀道难》、《行路难》、《梦游天姥吟留别》、《将进酒》等诗篇，有《李太白集》传世。公元762年病卒，享年61岁。其墓在安徽当涂，四川江油、湖北安陆有纪念馆。')

const count = ref(0);
const load = () => {
  count.value += 2
}

</script>

<template>
  <div v-show="poetInfo">
    <el-card>
      <div>
        <p class="poetLife">
          {{poetLife}}
        </p>
      </div>
      <div>
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
          <li v-for="item in poetInfo" class="infinite-list-item">
            {{item.year}}-{{item.Title}}
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
  .poetLife {
    display: inline-block;
    font-size: 1rem;
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
  font-size: 1rem;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>