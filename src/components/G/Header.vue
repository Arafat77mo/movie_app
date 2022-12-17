<template>
    
            <div id="nav">
            <nav class="container navbar navbar-expand-lg ">
              <a class="navbar-brand color mx-3 col-sm-2" >Movie <span class="nav-color">App</span> </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav"> 
                    <li class="nav-item">
                    <router-link to="/dashboard" class="nav-item nav-link color">Dashboard</router-link>
                </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-item nav-link color">Home</router-link>
                </li>
                 
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link color">Login</router-link>
                </li>
                 
                <li class="nav-item">
                    <router-link to="/sign_up" class="nav-link color">Sign Up</router-link>
                </li>
                </ul>
              </div>
                  
              
          </nav>
           </div>
           
     
</template>

<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>

    
  
router-link-exact-active {
        color: #42b983;
    }
  
div {
  background: #2a2b38 !important;
}
#nav {
  font-weight: 400;
}
.color {
  color: white;
}
.color:hover{
    color:  #616883 ;

  }
.nav-color{
    color: #616883 ;
}
</style>

