<script setup>
import { computed,ref } from 'vue';
import { userStore } from '../stores/modules/user';
import { CaretLeft,CaretRight,VideoPlay } from '@element-plus/icons-vue';
import { flyToPoint,showCurrentLine } from '../utils/mapUtils.js';
const store = userStore();

const currentPointInfo = computed(()=>{
	return store.currentPointInfo;
})
let isPlay = ref(true);
let myInterVal = null;
const goBack = ()=>{
	let currentPoint = store.poetInfo[store.currentPointInfo.playIndex-1];
	currentPoint && flyToPoint(currentPoint.Longitude,currentPoint.Latitude);
	currentPoint && showCurrentLine(currentPoint.year);
	currentPoint && store.setCurrentAdressName({
		lat: currentPoint.Latitude,
		lon: currentPoint.Longitude,
		name: currentPoint.Title,
		playIndex: currentPoint.index
	})
}
const goNext = ()=>{
	let currentPoint = store.poetInfo[store.currentPointInfo.playIndex+1]
	currentPoint && flyToPoint(currentPoint.Longitude,currentPoint.Latitude);
	currentPoint && showCurrentLine(currentPoint.year);
	currentPoint && store.setCurrentAdressName({
		lat: currentPoint.Latitude,
		lon: currentPoint.Longitude,
		name: currentPoint.Title,
		playIndex: currentPoint.index
	})
}
const play = ()=>{
	isPlay.value = false;
	let currentPoint = store.poetInfo[store.currentPointInfo.playIndex+1]
	currentPoint && flyToPoint(currentPoint.Longitude,currentPoint.Latitude);
	currentPoint && showCurrentLine(currentPoint.year);
	currentPoint && store.setCurrentAdressName({
		lat: currentPoint.Latitude,
		lon: currentPoint.Longitude,
		name: currentPoint.Title,
		playIndex: currentPoint.index
	})
	myInterVal = setInterval(()=>{
		if(store.currentPointInfo.playIndex === store.poetInfo.length-1){
			clearInterval(myInterVal)
		}
		let currentPoint = store.poetInfo[store.currentPointInfo.playIndex+1]
		currentPoint && flyToPoint(currentPoint.Longitude,currentPoint.Latitude);
		currentPoint && showCurrentLine(currentPoint.year);
		currentPoint && store.setCurrentAdressName({
			lat: currentPoint.Latitude,
			lon: currentPoint.Longitude,
			name: currentPoint.Title,
			playIndex: currentPoint.index
		})
	},3300)
}
const stop = ()=>{
	isPlay.value = true;
	clearInterval(myInterVal)
}
</script>
<template>
<div class="top">
	<div class="bar">
		<p class="title">追寻诗人的足迹</p>
		<img src="../static/topbar.png" alt="">
	</div>
	<div class="currentInfo">
		<h1 class="currentAdressName">{{currentPointInfo?.name}}</h1>
	</div>
	<div class="palyContainer">
		<el-button :icon="CaretLeft" @click='goBack()' :disabled="currentPointInfo.playIndex === 0"/>
		<el-button :icon="VideoPlay" @click='play()' v-if="isPlay" style="color: lightgreen;" :disabled="currentPointInfo.playIndex === store.poetInfo.length-1"/>
		<el-button :icon="VideoPlay" style="color: red;" @click='stop()' v-else/>
		<el-button :icon="CaretRight" @click='goNext()' :disabled="currentPointInfo.playIndex === store.poetInfo.length-1"/>
	</div>
</div>
	
</template>
<style scoped>
.bar{
	background-color: #08317D;
	width: 100vw;
	height: 4vh;
}
.bar img{
	width: 40vw;
	margin-left: 30vw;
	height: 6vh;
}
.bar .title{
	position: absolute;
	color: white;
	left: 44vw;
	top: 1vh;
	font-size: 70rpx;
	font-family: 'Times New Roman', Times, serif;
}
.currentInfo{
	width: 10vw;
	margin-left: 45vw;
	color: white;
	text-align: center;
	margin-top: 6vh;
	font-family: cursive;
	font-size: 40rpx;
}
</style>