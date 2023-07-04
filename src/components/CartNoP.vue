
<template>
<div>
  
    <div class="bg-blue-200 h-1/2 m-auto w-4/5 pt-20  divide-y ">
      <div>
       <p class="text-4xl font-extrabold p-2 text-left border-b-2 ">Shopping Cart</p>
        <ul>
          <li class="flex justify-between">
            <a href=""><img alt="" src="" class="w-1/4 m-auto "></a>
            <p>{{}}</p>
            <p>${{}}</p>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script >
// @ is an alias to /src


export default{
  name: 'Cart',
    components:{
     
    },
    props:{
      title: String,
      price: String,

       
    },
    data() {
        return { 
            cartItems: [],
        }
    },
  methods: {

  }
}
</script>

