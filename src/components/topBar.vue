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
		<p class="title">寻踪·诗意盛唐</p>
		<img src="../static/banner.png" alt="">
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
	width: 100vw;
	height: 4vh;
}
.bar img{
	width: 26vw;
	margin-left: 38vw;
	height: 17vh;
	margin-top: -1.5vh;
}
.bar .title{
	position: absolute;
	left: 44vw;
	top: 4vh;
	font-size: 90rpx;
	font-family: 'FZJT', Times, serif;
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