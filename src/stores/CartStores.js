import {defineStore} from 'pinia'

export const useCartStore = defineStore('cartStore',{
state :() =>({
    cartItems: [],
    product: [],
    cartCounter: 5,

}),

actions : {
    async getProduct(){
        const getProduct = await ('https://fakestoreapi.com/products')
        const data = await getProduct.json()
        this.product = data
        console.log(this.product)
    },

    
}
})


