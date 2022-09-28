<template>
	<view class="map_content">
		<view id="container"></view>
	</view>
</template>
<script module="Cesium" lang="renderjs">
	export default {
		name: "cesiumMap",
		data() {
			return {
				mapViewer: null,
			};
		},
		mounted() {
			const linkDom = document.createElement('link')
			linkDom.rel = "stylesheet"
			linkDom.href = "../static/Cesium/Widgets/widgets.css"
			document.head.appendChild(linkDom)

			// 动态引入较大类库避免影响页面展示
			const script = document.createElement('script')
			script.src = '../static/Cesium/Cesium.js'
			script.onload = this.init_cesium_map.bind(this)
			document.head.appendChild(script)
		},
		methods: {
			init_cesium_map() {
				Cesium.Ion.defaultAccessToken =
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNDY1NmZiNS0wYmU1LTRkNTgtODA0Yi1jMzI0NGE4ZTA2ZjciLCJpZCI6NTc3ODksImlhdCI6MTYyMjYxNzA4OX0.1sRx-WfaOPxGx-ogkElxlWmbRwUa_8oiT9hQgsIvvjk';
				this.mapViewer = new Cesium.Viewer('container', {
					terrainProvider: Cesium.createWorldTerrain()
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.map_content {
		width: 100vw;
		height: 100vh;
	}
	#container {
		width: 100%;
		height: 100%;
	}
	/deep/ .cesium-viewer-bottom{
		display: none;
	}
	/deep/ .cesium-navigationHelpButton-wrapper{
		display: none;
	}
	/deep/ .cesium-home-button{
		display: none;
	}
	/deep/ .cesium-viewer-animationContainer{
		display: none;
	}
	/deep/ .cesium-viewer-timelineContainer{
		display: none;
	}
	/deep/ .cesium-viewer-fullscreenContainer{
		display: none;
	}
</style>
