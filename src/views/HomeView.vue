<template>
  <div class="home">
    <!--                                   -->
    <Hero class=""/>
    <div class="">
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
