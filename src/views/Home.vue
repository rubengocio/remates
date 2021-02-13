<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FormRemate msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormRemate from "@/components/FormRemate.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    FormRemate
  }
});
</script>
