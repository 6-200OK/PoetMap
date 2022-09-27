<template>
	<view class="map_content">	
		<view id="container"></view>
		</view>
</template>

<script module="CesiumMap" lang="renderjs">
window.CESIUM_BASE_URL = "http://localhost:8180/"	
import * as Cesium from 'cesium';

	export default {
		name:"cesiumMap",
		data() {
			return {
				mapViewer: null,
			};
		},
		mounted() {
			this.init_cesium_map()
		},
		methods:{
			init_cesium_map(){
				Cesium.Ion.defaultAccessToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNDY1NmZiNS0wYmU1LTRkNTgtODA0Yi1jMzI0NGE4ZTA2ZjciLCJpZCI6NTc3ODksImlhdCI6MTYyMjYxNzA4OX0.1sRx-WfaOPxGx-ogkElxlWmbRwUa_8oiT9hQgsIvvjk';
				this.mapViewer = new Cesium.Viewer("container")
			}
		}
	}
</script>

<style>
.map_content {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		width: 100vw;
		height: 100vh;
	}
	#container {
		width: 100%;
		height: 100%;
	}
</style>