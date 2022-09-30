export default {
	flyToPoint: function(lon, lat, heading = 0.0, pitch = -20.0, roll = 0, range = 6000,duration=2.5) {
		window.mapViewer.camera.flyTo({
			destination: Cesium.Cartesian3.fromDegrees(lon, lat, range),
			orientation: {
				heading: Cesium.Math.toRadians(heading),
				pitch: Cesium.Math.toRadians(pitch),
				roll: Cesium.Math.toRadians(roll),
			},
			duration: duration,
		});
	},
	addModel: function(lon,lat,range=50){
		let modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
		    Cesium.Cartesian3.fromDegrees(lon, lat, range));
		window.mapViewer.scene.primitives.add(Cesium.Model.fromGltf({
		    url : '../static/models/model.gltf',
		    modelMatrix : modelMatrix,
		    scale : 1.6
		}));
	}
}
