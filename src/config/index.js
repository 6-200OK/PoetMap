const CesiumToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNDY1NmZiNS0wYmU1LTRkNTgtODA0Yi1jMzI0NGE4ZTA2ZjciLCJpZCI6NTc3ODksImlhdCI6MTYyMjYxNzA4OX0.1sRx-WfaOPxGx-ogkElxlWmbRwUa_8oiT9hQgsIvvjk';
// 诗人路线颜色
const colorList = ['#FF0000','#00FF00','#0000FF','#FFF000','#00FF0F','#0F00FF','#FF00F0','#0FFF0F','#0d0bdF'];
const cesium_css_url = "https://cesium.com/downloads/cesiumjs/releases/1.97/Build/Cesium/Widgets/widgets.css";
const cesiumJS_url = 'https://cesium.com/downloads/cesiumjs/releases/1.97/Build/Cesium/Cesium.js';
const tiandiMap_cva_url = "http://{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=6b79a2f2c19c473918f03903426564ca";

export {
	CesiumToken,
	colorList,
	cesium_css_url,
	cesiumJS_url,
	tiandiMap_cva_url,
}