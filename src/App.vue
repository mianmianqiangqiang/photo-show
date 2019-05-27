<template>
  <div id="app">
  	  <div class="cd-slider-nav">
                <nav class="navbar">
                    <div class="tm-navbar-bg">
                        
                        <a class="navbar-brand text-uppercase" href="#"><i class="fa fa-picture-o tm-brand-icon"></i>Fluid Gallery</a>

                        <button class="navbar-toggler hidden-lg-up" @click="show = !show">
                            &#9776;
                        </button>
                        <div class="navbar-toggleable-md text-xs-center text-uppercase tm-navbar" id="tmNavbar" v-show="show">
                            <ul class="nav navbar-nav">
                                                       
                                <li class="nav-item">
                                   <router-link class="nav-link" to='/'>HOME</router-link>
                                </li>
                               <li class="nav-item">
                                   <router-link class="nav-link" to='/helloworld'>HELLOWORLD</router-link>
                                </li>
                                <li class="nav-item">
                                   <router-link class="nav-link" to='/columns'>Columns</router-link>
                                </li>
                                <li class="nav-item">
                                	 <router-link class="nav-link" to='/message'>Message</router-link>  
                                </li>
                            </ul>
                        </div>                        
                    </div>

                </nav>
           </div> 
  	 <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
  	return{
  		show:false
  		
  	}
  },
   methods:{
  	
  }
}
</script>

<style scoped>
.top{margin-top: 50px;}
</style>
