<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
import { getPoetInfo } from '../api/user'
import { userStore } from '../stores/modules/user'

const store = userStore();

const poetName = ref('');

const getInfo = async() => {
  const obj = await getPoetInfo(poetName.value);
  store.setPoetInfo(obj);
  poetName.value = '';
}

</script>

<template>
  <div>
    <el-input
      v-model="poetName"
      placeholder="请输入诗人的名字"
    >
      <template #append>
        <el-button :icon="Search" @click='getInfo()'/>
      </template>
    </el-input>
  </div>
</template>

<style scoped>
</style>