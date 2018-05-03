<template>
<div>
	<div class="rank-line" @click="toggleInput">
		<span>清空回收箱</span><span class="title-icon" @click="clearAll" title="将清空回收站，谨慎操作">全部清空</span>
	</div>
	<div class="rank-input" v-show="nowInput">
		<input type="text" name="" v-model.trim="keywords" @keyup.enter="searchTask" placeholder="请输入任务关键字...">
		<button @click="searchTask">Search</button>
	</div>
	<ul>
		<li v-for="task in tasks" v-bind:title="task.time">
			<div class="circle"></div>
			<span class="content" v-bind:contenteditable="!task.isDone" > {{ task.content }} </span>
			<div class="handle-div">
				<span class="comment" @click="recycleTask(task)" title="回收任务">R</span>
				<span class="del" @click="clearOne(task)" title="彻底删除">X</span>
			</div>
		</li>
	</ul>
</div>
</template>

<script>

	import { formatDate } from '../js/date.js'
	import { getData } from '../js/axios-data.js'
	import { postData } from '../js/axios-data.js'
	import { patchByItemId } from '../js/axios-data.js'
	import { delByItemId } from '../js/axios-data.js'


	import IndexHeader from './IndexHeader.vue'

	

	export default {
		name: 'Index',
		data () {
			return {
				nowInput: true,
				keywords: '',
				tasks:[]
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
				this.$axios.get('http://localhost:3000/admin?isShow=false&q='+this.keywords)
		        .then(response => {
		            this.tasks = response.data
					console.log(this.tasks)

		        })
			},
			clearOne (task) {
				if (confirm("确定彻底删除此任务？"))
					delByItemId(this,task.taskId)
			},
			clearAll () {
				if (confirm("确定清空回收站？")){
					for ( var i=0; i<this.tasks.length; i++ ){
						delByItemId(this,this.tasks[i].taskId)
					}
					
				}

			},
			recycleTask (task) {
				task.isShow = true
				patchByItemId(this,task.taskId,{ isShow: task.isShow })
			}
		},
		mounted() {
			// var today = formatDate(new Date(), 'yyyy-M-d')
	        this.$axios.get("http://localhost:3000/admin?isShow=false")
			.then(response => {
	            this.tasks = response.data
	            console.log(this.tasks)
	        })
    	}
	}
</script>

<style scoped>
.rank-line {
	height: 50px;
	line-height: 50px;
	padding:0 10px;
	background-color: #FFEFCB;
	color: #FEAE6A;
	font-size: 16px;
	cursor: pointer;
}
.title-icon {
	float: right;
	font-size: 12px;
	vertical-align: middle;
	font-weight: bolder;
}
.rank-input {
	position: relative;
}
.rank-input input {
	border-color: #FEAE6A;
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
	border: 2px solid #d8d8d8;
	border-radius: 10px;
	vertical-align: middle;
	margin-right: 10px;
	/*cursor: pointer;*/
}
span.content {
	display: inline-block;
	padding: 10px 5px;
	max-width: 500px;
	min-width: 250px;
	outline: none;
	vertical-align: middle;
	text-decoration: line-through;
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


</style>
