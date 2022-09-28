<template>
  <view class="content">
    <CeisumMap class="cesium_map"></CeisumMap>
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
.cesium_map{
	z-index: 10;
}

</style>
