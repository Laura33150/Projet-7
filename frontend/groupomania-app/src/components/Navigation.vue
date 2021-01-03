<template>
    <div class="navbar">
        <img class="nav-img" alt="Vue logo" src="../assets/icon-left-font-monochrome-white.png">
        <div class="icons">
            <div class="icon-middle">
                 <router-link to="/forum">Forum</router-link>
            </div>
            <div class="icon-right">
                  <router-link to="/inscription"><i class="fas fa-address-card fa-2x"></i></router-link>
            </div>
            <div class="icon-right">
                   <router-link to="/"><i class="fas fa-address-book fa-2x"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
   
}
</script>

<style>
    .nav-img {
        height: 200px;
        margin-left: 20px;
    }
   .navbar {
       display: flex;
       background-color: #0C2F51;
       justify-content: space-between;
       height: 200px;
   }
   .icons {
       display: flex;
       align-items: center;
   }
   .icon-right {
       margin-right: 15px;
   }
   .icon-middle {
       margin-right: 25px ;
   }
</style>