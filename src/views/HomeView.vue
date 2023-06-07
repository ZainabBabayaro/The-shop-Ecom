<template>
  <div class="home" >
    <!--                                   -->
    <Hero class="w-1/2"/>
    <div class="flex">
     <Product/>
     <!-- <CheckoutModal/>  -->

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Product from '@/components/Product.vue'
// import CheckoutModal from '@/components/CheckoutModal.vue'


export default {
  name: 'HomeView',
  components: {
    Hero,
    Product,
    // CheckoutModal
  },
  data(){

  },
  
}
</script>
