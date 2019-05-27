<template>
	<footer>
		<p>{{copyright}}</p>
	</footer>
</template>

<script>
	export default {
		name: 'app-footer',
		props: {
			title: {
				type: String
			}
		},
		data() {
			return {
				copyright: "Copyright 2017 vue demo"
			}
		}
	}
//	$(document).ready(function(){
//	$("p").click(function(){
//	$("p").html("W3School");
//	});
//	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		background-color: gray;
		padding: 10px;
	}
	
	p {
		color: deepskyblue;
		text-align: center;
	}
</style>