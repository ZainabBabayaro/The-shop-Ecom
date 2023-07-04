<script>

//import Product Store
import {useProductStore} from '../stores/ProductStores.js'
import CheckoutModal from '@/components/CheckoutModal.vue'


export default {
   setup() {

    const productStore = useProductStore()
    //fetch Data
      productStore.getProduct()
     
      return {productStore}

      const checkout = () =>{
           console.log(productStore.checkout)
      }
   }
  }
   

</script>


<template>
  <div class="m-4" >
   <p>
    {{cartCounter}}
   </p>
    <ul class="grid grid-cols-3 ">
        <li v-for="(product, index) in productStore.products"  class=" box-border border-2 m-4 rounded flex-row justify-end" >
            <a href=""><img alt="" :src="product.image" class="w-1/4 m-auto "></a>
            <p>{{product.title}}</p>
            <p>${{product.price}}</p>
            <button class="bg-orange-800  text-white py-3 px-5 rounded mb-3" @click="checkout()" >BUY NOW</button>
            <!-- <button class="bg-orange-800  text-white py-3 px-5 rounded mb-3 ml-4" @click="addToCart(product)">ADD TO CART</button> -->
        
        </li>
        <CheckoutModal 
            v-if=" productStore.checkout" 
            :title="title" 
            :price="price"
            :image="image"
            :closedModal="closedModal"  
        />
       
    </ul>
  </div>
</template>

