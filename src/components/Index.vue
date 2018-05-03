<template>
	<div class="rank-box">
	<!-- <index-header></index-header> -->
	<ul>
		<li v-for="(tab,index) in tabs" @click="tabFun(index,tab)" v-bind:class="[{ active: nowActive===index }, tab.tolink]">{{ tab.title }}</li>
	</ul>	
	<router-view/>

	<!-- <today-task></today-task> -->
	<!-- <search-task></search-task> -->
	<!-- <dash-box></dash-box> -->
	</div>
</template>

<script>

	import { formatDate } from './js/date.js'
	import { getData } from './js/axios-data.js'
	import { postData } from './js/axios-data.js'
	import { patchByItemId } from './js/axios-data.js'

	import IndexHeader from './subcomponents/IndexHeader.vue'
	import TodayTask from './subcomponents/TodayTask.vue'
	import SearchTask from './subcomponents/SearchTask.vue'
	import DashBox from './subcomponents/DashBox.vue'


	export default {
		name: 'Index',
		data () {
			return {
				tabs: [
					{
						title: '今日任务',
						tolink: 'task'
					}, 
					{
						title: '搜索任务',
						tolink: 'search'
					},
					{
						title: '回收站',
						tolink: 'dash'
					}
				],
				nowActive: 0
			}
		},
		methods: {
			tabFun(i,tab) {
				this.nowActive = i
				this.$router.push({ path: tab.tolink})
			}
		},
		components: {
			IndexHeader,
			TodayTask,
			SearchTask,
			DashBox
    	}
	}
</script>

<style scoped>
.rank-box {
	max-width: 600px;
	margin: 0 auto;
}

/*tabs*/
ul,li {
	display: inline-block;
}
ul {
	width: 100%;
	margin: 0;
	padding: 0;
}
li {
	width: 33%;
	padding: 10px 0;
	border: 1px solid #fff;
}
li {
	color: #666;
	/*background-color:#d8d8d8;*/
	cursor: pointer;
	opacity: 0.5;
}
li.active {
	opacity: 1;
}
li.task {
	color: #FFF;
	background-color: #89C557;
}
li.search {
	color: #FFF;
	background-color: #3FB6DA;
}
li.dash {
	color: #FFF;
	background-color: #FEAE6A;
}


@media screen and (max-width: 600px) {
	li {
		width: 32.5%;
		padding: 15px 0;
	}
}
</style>