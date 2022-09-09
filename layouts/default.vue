<template>
    <div>
      <div class="bg-blue-300 text-blue-700">
        <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
          <NuxtLink :to="{name: 'index'}">Home</NuxtLink>
          <NuxtLink :to="{ name: 'the-company'}">The Company</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>        
          <NuxtLink :to="{ name: 'products'}">Products</NuxtLink>
        </div>      
      </div>
  
  
      <div class="container mx-auto">
        <Nuxt />
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>