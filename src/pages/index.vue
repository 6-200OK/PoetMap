<template>
  <view class="content">
    <CeisumMap></CeisumMap>
  </view>
</template>

<script>
	import CeisumMap from "../components/cesiumMap.vue"
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  components:{
	CeisumMap  
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
