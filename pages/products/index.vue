<template>
    <div>
        <h1 class="text-lg font-bold text-blue-700">Products</h1>
        <NuxtLink class="text-blue-400" to="/products/product-a">Product A</NuxtLink>
        <NuxtLink class="text-blue-400" to="/products/product-b">Product B</NuxtLink>

        <div 
        v-for="product in products" :key="product.id"
        class="border-b border-blue-300 py-3">
            {{product.name}}
        </div>
    </div>
  </template>
  
  <script>
  export default {

    data() {
        return {

        };
    },

    async asyncData({$axios}) {

        const products = await $axios.$get('https://jsonplaceholder.typicode.com/users?_limit=3')

        return {
            products,
        }
    }
  
  }
  </script>
  
  <style>
  
  </style>