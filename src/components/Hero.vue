<template>
  <div class="">
    <div class=" image  bg-center  flex items-center  h-96  pl-16 ">
      <div class="max-w-2xl text-center text-black p-8">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Clothing Store</h1>
        <p class="text-lg">  Unleash Your Style. <br/> Discover the Essence of Fashion.</p>
        <a href="#" class="mt-6 inline-block px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-orange-200 transition duration-200">Shop Now</a>
      </div>
    </div>
 
    <div class=" py-4 text-xl bg-orange-800 text-white">This is a store. This is a Store. This is a Store. This is a Store</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Hero',
  components: {
 
  }
}
</script>
<style>
.image{
  background-image: url('../assets/my-hero.avif');
}
</style>