<template>
<div class="row">

    <div class="col-sm-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-auto bg-light sticky-top">
                    <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                        
                        <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                            <li class="nav-item">
                                <a href="#" class="nav-link py-3 px-2" title=""  data-bs-original-title="Movie">
                                    Movie
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link py-3 px-2"   data-bs-original-title="Users">
                                    Users
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link py-3 px-2" title=""  data-bs-original-title="Category">
                                    Category
                                </a>
                            </li>
                           
                        </ul>
                        
                    </div>
                </div>
                <div class="col-sm p-3 min-vh-100">
                    <!-- content -->
                </div>
            </div>
        </div>
    </div>
    <div class="col-8">
        <router-view />

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
a{
    color:#283542 ;
};
a:hover{
background-color: #283542;
color: white;

}

</style>