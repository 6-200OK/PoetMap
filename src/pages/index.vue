<template>
	<view class="content">
		<!-- 功能演示 -->
		<button @click="goToPoint" style="z-index: 11;color: black;position: absolute; top:100px;left:100px;">click
			Me</button>
		<CeisumMap class="cesium_map"></CeisumMap>
	</view>
</template>

<script>
	import CeisumMap from "../components/cesiumMap.vue";
	import  MapUtil  from '../utils/mapUtils.js'
	export default {
		data() {
			return {

			}
		},
		components: {
			CeisumMap
		},
		methods: {
			goToPoint() {
				MapUtil.flyToPoint(120,30)
				MapUtil.addModel(120,30.1)
			}
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

	.cesium_map {
		z-index: 10;
	}
</style>
