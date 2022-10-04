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

function flyToPoint(lon, lat, heading = 0.0, pitch = -24.0, roll = 0, range = 6000, duration = 2.5) {
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
import {
	colorList
} from '../config/index.js';
async function drawPoetLine(coors, yearTag) {
	let coor_index = 0
	let coors_format = []

	let colorMap = {}
	yearTag.forEach((yearItem, index) => {
		if (!(index === 0 || yearItem === yearTag[index - 1])) {
			coor_index += 1
		}
		if (coors_format[coor_index]) {
			coors_format[coor_index].push(coors[index])
		} else {
			coors_format[coor_index] = new Array(coors[index])
			colorMap[yearItem] = colorList[coor_index]
		}
	})
	let geojson_polyline = generateGeojson(coors_format)
	let dataSource = await Cesium.GeoJsonDataSource.load(geojson_polyline, {
		strokeWidth: 4,
	})
	let polyline_entities = dataSource.entities.values;
	// console.log(polyline_entities)
	for (let i = 0; i < polyline_entities.length; i++) {
		polyline_entities[i].polyline.material = new Cesium.ColorMaterialProperty(new Cesium.Color
			.fromCssColorString(colorMap[yearTag[i]]))
		polyline_entities[i].polyline.clampToGround = true;
		// polyline_entity.polyline.color = new Cesium.Color.fromRandom();
		// polyline_entity.polyline.shadows = 2
		// polyline_entity.polyline.material = new Cesium.StripeMaterialProperty({
		// 	offset: 10,
		// 	repeat: 100
		// })
	}
	window.mapViewer.dataSources.add(dataSource);
}
export {
	flyToPoint,
	addModel,
	drawPoetLine,
}
