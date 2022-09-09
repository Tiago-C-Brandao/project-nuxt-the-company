<template>
  <div>
    <h1 class="text-lg font-bold text-blue-700">Service</h1>

    <NuxtLink class="text-blue-400" to="/services/develop-web"
      >Develop Web</NuxtLink
    >
    <NuxtLink class="text-blue-400" to="/services/marketing-digital"
      >Marketing Digital</NuxtLink
    >

    <div v-if="$fetchState.pending">carregando...</div>

    <div v-else>
      <div v-for="service in services" :key="service.id">
        <img v-bind:src="service.thumbnailUrl" alt="" />
      </div>
    </div>

    <NuxtChild />
  </div>
</template>
 
 <script>
import { resolve } from "path";

export default {
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: "Minha descrição do serviço" },
      ],
      bodyAttrs: {
        class: 'bg-blue-100',
      },
    };
  },

  data() {
    return {
      title: '',
      services: [],
    };
  },

  async fetch() {
    this.services = await this.$axios.$get(
      "photos?_limit=3"
    );
  },

  created() {
    this.getTitle();
  },

  methods: {
    getTitle() {
      setTimeout(() => {
        this.title = 'Services'
      }, 3000)
    }
  }
};
</script>
 
 <style>
</style>