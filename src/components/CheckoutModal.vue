<script>
// @ is an alias to /src
export default {
    
  }
</script>



<style>
  .modal-open {
  overflow: hidden; 
}
</style>


<template>
  <div class="text-black">
    <teleport to='body' v-if="isActive" >
      <div class="bg-gray-300 opacity-75 transparent h-full w-full text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded"></div> 
   
      <div class="p-4 bg-gray-100 opacity-100 h-7/8 w-2/3 text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded ">
        <button class="bg-red-600 rounded-full w-10 h-10 absolute top-0 right-0 transform -translate-y-5 translate-x-5" @click="closeCheckout">X</button>
        <h1 class=" text-black text-center">CHECKOUT</h1>
        <div  class="flex justify-between ">

          <div class="border  border-gray-400 w-3/5 h-5/6 px-3 py-4 rounded mr-10 pb-1">
            <h2 class="py-4 text-black ">BILLING ADDRESS</h2>
            <form action="">
              <div class="flex mr-4">
                <div class="block mr-8 pl-2">
                  <label for="firstname" class="block text-black " >First name</label>
                  <input type="text" name="firstname" id="" required class="border border-gray-600 rounded p-1.5 w-52">
                </div>
                <div class="block mb-3">
                  <label for="lastname" class="block text-black" >Last name</label>
                  <input type="text" name="lastname" id="" required class="border border-gray-600 rounded p-1.5 w-52">
                </div>
              </div>
              <div class=" mx-3">
                <label for="phone" class="text-black block">Phone number</label>
                <input type="tel" name="phone" id="" class="border border-gray-600 rounded p-1.5 w-11/12 mb-3">
                <label for="country" class="text-black block ">Country / Region</label>
                <input type="text" name="country" id="" class="border border-gray-600 rounded p-1.5 w-11/12 mb-3">
                <label for="city" class="text-black block">City</label>
                <input type="text" name="address" id="" class="border border-gray-600 rounded p-1.5 w-11/12 mb-3">
                <label for="address" class="text-black block">Address</label>
                <input type="text" name="street" id="" class="border border-gray-600 block rounded p-1.5 w-11/12 mb-1 placeholder:italic" placeholder="Street address">
                <input type="text" name="city" id="" class="border border-gray-600 rounded p-1.5 w-11/12 mb-8 placeholder:italic" placeholder="Apt, suite, unit, building">
                    
              </div>
              
            </form>
          </div>

          <div  class="border border-gray-500 h-96 p-2 w-2/5 rounded">
            <h2 class="text-black">YOUR ORDER SUMMARY</h2>
            <div>
              <form action="">
                
                
              </form>
            </div>
            <div>
              <p class="text-black truncate">{{title}}</p> 
              <p>{{price}}</p>
            </div>
          </div>

        </div>
      </div>
     
    </teleport>
  </div>
</template>