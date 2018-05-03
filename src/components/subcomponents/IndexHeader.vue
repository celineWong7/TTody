<template>
	<div>
		<ul>
			<li v-for="(tab,index) in tabs" @click="tabFun(index)" v-bind:class="{ active: nowActive===index }"><router-link to='index/search'>{{ tab }}</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'IndexHeader',
		data () {
			return {
				tabs: ['今日任务', '搜索任务', '回收站'],
				nowActive: 0
				
			}
		},
		methods: {
			tabFun(i) {
				this.nowActive = i
			}
		}
	}
</script>

<style scoped>
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
	background-color:#d8d8d8;
	cursor: pointer;
}
li.active {
	color: #FFF;
	background-color: #42b983;
}
li:hover {
	/*color: #FFF;*/
	/*background-color: #42b983;*/
	opacity: 0.8;
}

</style>