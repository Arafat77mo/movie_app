<template>
    <div class="container d-flex align-items-center justify-content-center">
    <login class=" login"></login></div>
</template>

<script> 
import Login from '@/components/login.vue';
export default {
    components:{
        Login
    }
}

</script>

<style  scoped>

.login{
padding: 50px;
border-radius: 20px;
    
    font-weight: 400;
}


</style>