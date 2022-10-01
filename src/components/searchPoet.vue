<script setup>
import { ref } from 'vue';
import { getPoetInfo } from '../api/user'
import { userStore } from '../stores/modules/user'
import poetLife from './poetLife.vue'
import { Search } from '@element-plus/icons-vue'

const store = userStore();

const poetName = ref('');

const isShow = ref(false);

const getInfo = async() => {
  const obj = await getPoetInfo(poetName.value);
  store.setPoetInfo(obj);
  poetName.value = '';
  isShow.value = true;
}

</script>

<template>
  <div class="searchPoet">
    <el-row>
      <el-col>
        <el-input
          v-model="poetName"
          placeholder="请输入诗人的名字"
        >
          <template #append>
            <el-button :icon="Search" @click='getInfo()'/>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <poetLife v-show="isShow"/>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .searchPoet {
    width: 30vw;
    height: 30vh;
  }
</style>