import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
    state: () =>({
        products:[],
        checkout: false,
    }),
    actions:{
        async getProduct(){
             const getProduct = await fetch('https://fakestoreapi.com/products')
             const data = await getProduct.json()
             this.products = data
        },
    },

  })