<template>
	<div id="home" class="top">
		<app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
		<users v-bind:users="users"></users>
		<app-footer v-bind:title="title"></app-footer>
	</div>
</template>

<script>
	//局部注册文件
	import Users from './Users'
	import Header from './Header'
	import Footer from './Footer'
	export default {
		name: 'home',
		data() {
			return {
				users:[],
                title: "这是一个传值(string,Number,布尔)"
			}

		},
		methods: {
			updateTitle: function(title) {
				//		this.title="changed"
				this.title = title
			}
		},
		components: {
			"users": Users,
			"app-header": Header,
			"app-footer": Footer
		},
		created(){
            //发送get请求
            alert(123)
            this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(res){
//             console.log(res)
              this.users=res.body;
            },function(){
                console.log('请求失败处理');
            });
        }
	
	}
</script>

<style scoped="">
	h1 {
		color: yellow;
	}
</style>