<template>
  <v-container>
    <h1>About</h1>
    <v-container>
    <v-card>
    <BiographyVue></BiographyVue>
    <HobbyVue></HobbyVue>
    <WebVue></WebVue>
    </v-card>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from '@vue/runtime-core';
import BiographyVue from './segments/Biography.vue';
import HobbyVue from './segments/Hobby.vue';
import WebVue from './segments/Web.vue';
</script>
<script lang="ts">
export default defineComponent({
  name:"About",
  components:{
    BiographyVue, HobbyVue, WebVue
  }
});
</script>

<style>
</style>