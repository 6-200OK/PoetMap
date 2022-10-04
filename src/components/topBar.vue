<script setup>
import { computed } from 'vue';
import { userStore } from '../stores/modules/user';
const store = userStore();

const currentAdressName = computed(()=>{
	return store.currentAdressName;
})
</script>
<template>
<div class="top">
	<div class="bar">
		<p class="title">追寻诗人的足迹</p>
		<img src="../static/topbar.png" alt="">
	</div>
	<div class="currentInfo">
		<h1 class="currentAdressName">{{currentAdressName}}</h1>
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