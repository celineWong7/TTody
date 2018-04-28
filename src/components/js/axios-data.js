

export function getData(self,f){
	self.$axios.get('http://localhost:3000/accounts')
		.then(function (res) {
			// console.log(res.data)
			f.call(this,res.data)
		})
		.catch(function (err) {
			console.log(err)
		})
}

export function postData(self,data){
	self.$axios.post('http://localhost:3000/admin', data)
		.then(function (res) {
			// console.log(res.data)
		})
		.catch(function (err) {
			console.log(err)
		})
}


export function patchByItemId(self,itemid,newData){
	self.$axios.get('http://localhost:3000/admin?taskId='+itemid)
		.then(function (res) {
			// console.log(res.data) // 对象数组
			self.$axios.patch('http://localhost:3000/admin/'+res.data[0].id,newData)
			.then(function (res) {
				console.log(res.data)
			})
		})
}