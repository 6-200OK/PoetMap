<script setup>
import { computed } from 'vue';
import { userStore } from '../stores/modules/user';
const store = userStore();

const currentPointInfo = computed(()=>{
	return store.currentPointInfo;
})
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