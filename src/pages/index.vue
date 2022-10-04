<template>
	<div class="app">
		<TopBar class="topBar"></TopBar>
		<searchPoet class="search_poet"/>
		<view class="content">
		<!-- 功能演示 -->
	<!-- 	<button @click="goToPoint" style="
        z-index: 11;
        color: black;
        position: absolute;
        top: 100px;
        left: 100px;
      ">
			click Me
		</button> -->
			<CeisumMap class="cesium_map"></CeisumMap>
		</view>
		<poetLocation class="poetLocation"/>
	</div>
</template>

<script setup>
import CeisumMap from "../components/cesiumMap.vue";
import searchPoet from "../components/searchPoet.vue";
import poetLocation from "../components/poetLocation.vue";
import TopBar from '../components/topBar.vue'
import { flyToPoint, addModel } from '../utils/mapUtils.js'

// const goToPoint =  () => {
// 	flyToPoint(120, 30)
// 	addModel(120, 30.1)
// }
</script>

<style>

.content {
	position: relative;
	width: 100vw;
	height: 100vh;
}

.search_poet {
	position: absolute;
	top: 100px;
	z-index: 11;
}

.poetLocation {
	position: absolute;
	bottom: 50px;
	right: 100px;
	z-index: 11;
}

.cesium_map {
	z-index: 10;
}
.topBar{
	z-index: 11;
	position: absolute;
}
</style>
