<template>
	<header v-on:click="changeTitle">
		<h1>{{title1}}{{title}}</h1>
	</header>
</template>

<script>
	export default {
		name: 'app-header',
		props: ['title'],
		data() {
			return {
				title1: "vue.js demo"
			}
		},
		methods: {
			changeTitle: function() {
				//		this.title="changed"
				this.$emit("titleChanged", "子向父传值");
			}
		}
		//beforeCreate:function(){
		//	alert("组件实例化之前执行的函数");
		//},
		// created:function(){
		//	alert("组件实例化完毕，但页面未显示");
		//},
		//beforeMount:function(){
		//	alert("组件挂在前，页面仍未展示，但虚拟DOM已经配置");
		//},
		// mounted:function(){
		//	alert("组件挂在后，此方法执行后，页面显示");
		//},
		//beforeUpdate:function(){
		//	alert("组件更新前，页面仍未更新，但虚拟DOM已经配置");
		//},
		//updated:function(){
		//	alert("组件更新后，此方法执行后，页面显示");
		//},
		//beforeDestory:function(){
		//	alert("组件销毁前");
		//},
		//destory:function(){
		//	alert("组件销毁");
		//}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	header {
		background-color: red;
		padding: 10px;
	}
	
	h1 {
		color: white;
		text-align: center;
	}
</style>