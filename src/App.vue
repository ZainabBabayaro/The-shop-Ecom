<template>
  <nav class=" nav h-20 w-full bg-orange-800 flex justify-evenly px-10">
    <router-link to="/" >Home |</router-link>   

    <router-link to="/cart"> <div class="relative h-10">
      <p class="text-xs absolute left-2.5 -top-1">23</p>
       <img alt="" src="../src/assets/icons8-cart-30.png" class="w-8 m-0 p-0  "></div> 
    </router-link>

  </nav>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  position:fixed;
  color:white;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
