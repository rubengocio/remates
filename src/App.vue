<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>

    <v-main>
      <FormRemate />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import FormRemate from "./components/FormRemate.vue";

export default Vue.extend({
  name: "App",

  components: {
    FormRemate
  },

  data: () => ({
    //
  })
});
</script>
