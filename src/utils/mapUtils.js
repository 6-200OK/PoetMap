function generateGeojson(coors) {
	return {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {},
			"geometry": {
				"type": "MultiLineString",
				"coordinates": coors
			}
		}]
	}
}

function flyToPoint(lon, lat, heading = 0.0, pitch = -20.0, roll = 0, range = 6000, duration = 2.5) {
	window.mapViewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(lon, lat - 0.13, range),
		orientation: {
			heading: Cesium.Math.toRadians(heading),
			pitch: Cesium.Math.toRadians(pitch),
			roll: Cesium.Math.toRadians(roll),
		},
		duration: duration,
	});
}

function addModel(lon, lat) {
	let modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
		Cesium.Cartesian3.fromDegrees(lon, lat, Cesium.HeightReference.NONE));
	window.mapViewer.scene.primitives.add(Cesium.Model.fromGltf({
		url: '../static/models/model.gltf',
		modelMatrix: modelMatrix,
		scale: 1.6
	}));
}
/* 
	params:
	coors: [[lon1,lat1],[lon2,lat2].....]
	titles: [title1,title2,title3.....]
	yearTag: [13-19,19-25,.....]
 */
async function drawPoetLine(coors, yearTag) {
	let coor_index = 0
	let coors_format = []
	yearTag.forEach((yearItem, index) => {
		if (!(index === 0 || yearItem === yearTag[index - 1])) {
			coor_index += 1
		}
		if (coors_format[coor_index]) {
			coors_format[coor_index].push(coors[index])
		} else {
			coors_format[coor_index] = new Array(coors[index])
		}
	})
	let geojson_polyline = generateGeojson(coors_format)
	let dataSource = await Cesium.GeoJsonDataSource.load(geojson_polyline, {
		stroke: new Cesium.Color.fromCssColorString('#FFFFFF'),
		strokeWidth: 3,
	})
	let polyline_entities = dataSource.entities.values;
	for (let polyline_entity of polyline_entities) {
		polyline_entity.polyline.clampToGround = true;
	}
	window.mapViewer.dataSources.add(dataSource);
}
export {
	flyToPoint,
	addModel,
	drawPoetLine,
}
