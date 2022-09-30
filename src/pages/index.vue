<template>
	<div class="app">
		<searchPoet class="search_poet"/>
		<view class="content">
		<!-- 功能演示 -->
		<!-- <button @click="goToPoint" style="
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
	</div>
</template>

<script setup>
import CeisumMap from "../components/cesiumMap.vue";
import searchPoet from "../components/searchPoet.vue";
import MapUtil from '../utils/mapUtils.js'

const goToPoint =  () => {
	MapUtil.flyToPoint(120, 30)
	MapUtil.addModel(120, 30.1)
}
</script>

<style>

.content {
	width: 100vw;
	height: 100vh;
}

.search_poet {
	top: 6em;
	left: 5em;
	position: absolute;
	z-index: 11;
}

.cesium_map {
	z-index: 10;
}
</style>
