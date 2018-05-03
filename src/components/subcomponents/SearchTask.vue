<template>
<div>
	<div class="rank-line" @click="toggleInput">
		<span>搜索任务</span><span class="plus-icon">Q</span>
	</div>
	<div class="rank-input" v-show="nowInput">
		<input type="text" name="" v-model.trim="keywords" @keyup.enter="searchTask" placeholder="请输入任务关键字...">
		<button @click="searchTask">Search</button>
	</div>
	<ul>
		<li v-for="task in tasks" v-if="task.isShow" v-bind:class="{ done: task.isDone}" v-bind:title="task.time">
			<div class="circle" @click="doneTask(task)" title="点击完成任务"></div>
			<span class="content" v-bind:contenteditable="!task.isDone" > {{ task.content }}</span>
			<div class="handle-div" >
				<span class="comment" @click="" title="添加备注">C</span>
				<span class="del" @click="delTask(task)" title="删除">X</span>
			</div>
		</li>
<!-- 		<li class="done">
			<div class="circle">
			</div>
			<span class="content" contenteditable="true">Task1</span>
			<div class="handle-div">
				<span class="comment" title="备注">C</span>
				<span class="edit" title="修改">E</span>
				<span class="del" title="删除">X</span>
			</div>
		</li> -->
	</ul>
</div>
</template>

<script>

	import { formatDate } from '../js/date.js'
	import { getData } from '../js/axios-data.js'
	import { postData } from '../js/axios-data.js'
	import { patchByItemId } from '../js/axios-data.js'

	import IndexHeader from './IndexHeader.vue'

	

	export default {
		name: 'SearchTask',
		data () {
			return {
				nowInput: true,
				keywords: '',
				tasks: []
			}
		},
		components: {
			IndexHeader
		},
		methods: {
			toggleInput () {
				this.nowInput = !this.nowInput
			},
			searchTask () {
				// if (this.keywords == '') return
				// var t = new Date()
				// this.newTask.time = formatDate(t, 'yyyy-M-d h:m:s')
				// this.newTask.taskId = formatDate(t, 'yyyyMdhmsS')
				this.$axios.get('http://localhost:3000/admin?q='+this.keywords)
		        .then(response => {
		            this.tasks = response.data

		        })
			},
			delTask (task) {
				task.isShow = false
				patchByItemId(this,task.taskId,{ isShow: task.isShow })
			},
			doneTask (task) {
				task.isDone = true
				patchByItemId(this,task.taskId,{ isDone: task.isDone })
			}
		},
		mounted() {
			this.$axios.get('http://localhost:3000/admin?isShow=true&_sort=time&_order=desc')
	        .then(response => {
	            this.tasks = response.data

	        })
		}
	}
</script>

<style scoped>
.rank-box {
	max-width: 600px;
	margin: 0 auto;
}
.rank-line {
	height: 50px;
	line-height: 50px;
	padding:0 10px;
	background-color: #D6F4FE;
	color: #3FB6DA;
	font-size: 16px;
	cursor: pointer;
}
.plus-icon {
	float: right;
	font-size: 32px;
	vertical-align: middle;
}
.rank-input {
	position: relative;
}
.rank-input input {
	border-color: #3FB6DA;
	/*background-color: #D6F4F1;*/
	width: 100%;
}
.rank-input button {
	position: absolute;
	top: 0;
	right: 6px;
	height: 100%;
	background-color: transparent;
	color: #3FB6DA;
	font-weight: bolder;
	cursor: pointer;
}
ul {
	padding: 0;
}
li {
	position: relative;
	list-style: none;
	text-align: left;
	border-bottom: 1px dashed #999;
	padding: 15px;
}
li:hover {
	background-color: #FFFFF0;
}
li:hover .handle-div {
	display: inline-block;
}
div.circle {
	display: inline-block;
	width: 16px;
	height: 16px;
	border: 2px solid #3FB6DA;
	border-radius: 10px;
	vertical-align: middle;
	margin-right: 10px;
	cursor: pointer;
}
span.content {
	display: inline-block;
	padding: 10px 5px;
	max-width: 500px;
	min-width: 250px;
	outline: none;
	vertical-align: middle;
}

.handle-div {
	position: absolute;
	top: 5px;
	right: 5px;
	display: none;
	float: right;
}
.handle-div .del {	
	color: #F76333;
	background-color: #FFEDE7;
	cursor: pointer;
}
.handle-div .edit {	
	color: #FEAE6A;
	background-color: #FFEFCB;
	cursor: pointer;
}
.handle-div .comment {	
	color: #3FB6DA;
	background-color: #D6F4FE;
	cursor: pointer;
}
.handle-div span {
	padding: 0 6px;
}
.handle-div span:hover {
	font-size: 20px;
	font-weight: bolder;
}

li.done .circle {
	border-color: #d8d8d8;
	cursor: default;
}
li.done span{
	color: #d8d8d8 !important;
	text-decoration: line-through;
	cursor: default;
}

</style>
