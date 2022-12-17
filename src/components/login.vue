<template>
    <div class="vue-tempalte col-md-6 box">
        <form>
            <h3>Sign In</h3>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control " />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control " />
            </div>
            <button type="submit" class="btn  btn-lg btn-block">Sign In</button>
            
            
            
        </form>
    </div>
</template>
<script>
import login from './login.vue'
    export default {
        components:{
login
        },
        
    }
</script>
<style scoped>
div{
margin: 30px;}
.box{
    border-radius: 15px;
    background-color: rgb(255, 255, 255);
}
button{
    background-color:  #616883;
    color: white;
    
};

button:hover{
    background-color:  #828ab1 !important;
    color: rgb(5, 5, 5);
    
};

button {
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }
  
  button:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  
  button:active {
    transform: translateY(-1px);
  }
</style>