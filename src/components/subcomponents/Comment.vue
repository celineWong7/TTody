<template>
	<div class="comment-div">
		<textarea v-model="inputMsg">comments....</textarea>
		<button class="save" @click="saveFun(task)">保存</button>
		<button class="cancel" @click="cancelFun()">取消</button>
	</div>
</template>
<script>
	import {patchByItemId} from '../js/axios-data.js'
	export default {
		props: ["task"], // 从父组件接受值
		data () {
			return {
				inputMsg:this.task.comment
			}
		},
		methods: {
			saveFun (task) {
				console.log(this.task)
				patchByItemId(this, this.task.taskId, { comment: this.inputMsg })
				this.cancelFun()
			},
			cancelFun() {
				// 向父组件传值
				this.$emit("fromComment",{obj:this.task, showC:false})
			}

		}
	}
</script>

<style scoped>
.comment-div {
	position: absolute;
	z-index: 10;
	right: 0;
	top: 25px;
	width: 200px;
	height: 60px;
	background-color: #D6F4FE;
	overflow: hidden;

}
.comment-div textarea {
	border: 0;
	display: inline-block;
	width: 75%;
	height: 100%;
	background-color: transparent;
	outline: none;
}
.comment-div button {
	height: 30px;
}
.save {
	position: absolute;
	right: 0;
	top: 0;
	background-color: #3FB6DA;
	color: #fff;
}
.cancel {
	position: absolute;
	right: 0;
	top: 30px;
	background-color: #999;
	color: #fff;
}
	
</style>