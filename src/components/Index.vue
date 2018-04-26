<template>
	<div class="rank-box">
		<h1>Index Page2</h1>
		<div class="rank-line" @click="toggleInput">
			<span>新建任务</span><span class="plus-icon">+</span>
		</div>
		<div class="rank-input" v-show="nowInput">
			<input type="text" name="" v-model.trim="newTask.content" @keyup.enter="addTask" placeholder="请输入任务...">
			<button @click="addTask">Add</button>
		</div>
		<ul>
			<li v-for="task in tasks" v-if="task.isExist">
				<div class="circle"></div>
				<span> {{ task.content }}</span>
				<span class="del" @click="task.isExist = false;">X</span>
			</li>
<!-- 			<li>
				<div class="circle">
					<input type="checkbox" name="">
				</div>
				<span>Task1</span>
				<span class="del">X</span>
			</li> -->
		</ul>
	</div>
</template>

<script>
	import { formatDate } from './js/date.js'
	export default {
		name: 'Index',
		data () {
			return {
				nowInput: false,
				newTask:{ taskId:'', content: '', time: '', isDone: false, isExist: true},
				tasks:[]
			}
		},
		methods: {
			toggleInput () {
				this.nowInput = !this.nowInput
			},
			addTask () {
				if (this.newTask.content == '') return
				var t = new Date()
				this.newTask.time = formatDate(t, 'yyyy-M-d h:m:s')
				this.newTask.taskId = formatDate(t, 'yyyyMdhmsS')
				this.tasks.push(this.newTask)
				this.newTask = { taskId:"", content: "", time: "", isDone: false, isExist: true}
				console.log(this.tasks)
			}
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
	background-color: #EFD;
	color: #89C557;
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
	border-color: #89C557;
	/*background-color: #D6F4F1;*/
	width: 100%;
}
.rank-input button {
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	background-color: transparent;
	color: #f76333;
	font-weight: bolder;
	cursor: pointer;
}
ul {
	padding: 0;
}
li {
	list-style: none;
	text-align: left;
	border-bottom: 1px dashed #999;
	padding: 15px;
}
li:hover {
	background-color: #D6F4FE;
}
li:hover .del {
	display: block;
}
div.circle {
	display: inline-block;
	width: 16px;
	height: 16px;
	border: 2px solid #89C557;
	border-radius: 10px;
	vertical-align: middle;
	margin-right: 10px;
	cursor: pointer;
}
li .del {
	display: none;
	float: right;
	color: #F76333;
	cursor: pointer;
}
li .del:hover {
	font-size: 20px;
	font-weight: bolder;
}

</style>