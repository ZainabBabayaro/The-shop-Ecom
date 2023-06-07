<template>
  <div class="">
    <teleport to='body' class="checkoutModal" v-if="isOpen">
      <div class= "  bg-gray-300 opacity-75 transparent h-full w-full text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded " ></div> 
      <div class= " p-4 bg-gray-600 opacity-100 h-1/2 w-1/3 text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded ">
        <p class="text-3xl text-black">{{title}}</p>
        <p>{{price}}</p>
        <p><img src="{{image}}" alt=""></p> 
      </div>
        <button class="bg-red-600 rounded-full p-4 fixed top-40 left-3/4 right-10" @click="closeCheckout">X</button>
    </teleport>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'CheckoutModal',
      props:{
        title: String,
        price: String,
        image: String
      },

      data(){
        return{
          isOpen: true
        }
      },

      methods:{
        closeCheckout() {
        this.isOpen = !this.isOpen;
        }
      },
        
    }


</script>

<style>


</style>