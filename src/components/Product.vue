<template>
  <div class="m-4" >
   
    <ul class="grid grid-cols-3 ">
        <li v-for="(product, index) in result"  class=" box-border border-2 m-4 rounded flex-row justify-end" >
            <a href=""><img alt="" :src="product.image" class="w-1/4 m-auto "></a>
            <p>{{product.title}}</p>
            <p>${{product.price}}</p>
            <button class="bg-orange-800  text-white py-3 px-5 rounded mb-3 " @click="checkout(product)">BUY NOW</button>
            <button class="bg-orange-800  text-white py-3 px-5 rounded mb-3 ml-4" @click="addToCart(product)">ADD TO CART</button>
        </li>
        <CheckoutModal 
            v-if="openModal" 
            :title="title" 
            :price="price"
            :image="image"
            :closedModal="closedModal"  
        />
       
    </ul>
  </div>
</template>

<script >
// @ is an alias to /src

// import axios from 'axios'

import CheckoutModal from '@/components/CheckoutModal.vue'
export default{
    components:{
        CheckoutModal,
    },
    data() {
        return {
            title:null,
            result:null,
            price:null,
            openModal: null,
            closedModal:null,
            cartItems: [],
        }
    },
    prop: {
        cartItemCount: Number,
    },
  methods: {
    getProduct() {
        const getProduct = fetch('https://fakestoreapi.com/products')
        getProduct.then(response => {
            // if(response.ok){
            //     console.log('success')
            // }else{
            //     console.log('fail')
            // }
            return response.json()
        }).then (data => {
        const product = data
        this.result = product
        // console.log(product)

        }).catch( err => console.log(err))
    },
    // try {
    //     const response =  axios.get('http://localhost:3000/products');
    // https://fakestoreapi.com/products
    //     // const product = response.data
    //     console.log(response);
    // } catch (error) {
    //             console.error(error);
    //         }
    //     }
    checkout(arg){
        this.openModal = false,
        this.title = arg.title, 
        this.price = arg.price,
        this.image = arg.price,
        this.openModal = true
        // this.openModal = this.closedModal   

        // document.body.classList.add('stopScroll');
    },
    addToCart(product){

        this.cartItems.push(product)
        console.log(this.cartItems)
    },
    

},
    created() {
         this.getProduct()
    }   
}
</script>

