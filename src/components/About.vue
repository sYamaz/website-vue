<template>
  <v-container>
    <h1>About</h1>
    <v-container>
    <v-card>
    <Biography></Biography>
    <Hobby></Hobby>
    <Web></Web>
    </v-card>
    </v-container>
  </v-container>
</template>

<script setup>
import Hobby from './segments/Hobby.vue';
import Biography from './segments/Biography.vue';
import Web from './segments/Web.vue';
</script>

<style>
</style>