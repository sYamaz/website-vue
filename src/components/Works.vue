<template>
  <v-container>
  <h1>Works</h1>
  <v-container v-for="app in apps" v-bind:key="app">
    <v-card>
      <v-card-title>{{app.name}}</v-card-title>
      <v-card-img></v-card-img>
      <v-card-text>{{ app.text }}</v-card-text>

      
      <v-card-subtitle>Platform {{ app.platform.join(", ") }}</v-card-subtitle>
      <v-card-subtitle>Status {{app.status}}</v-card-subtitle>
      <v-card-text></v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn :to="app.url">Read more</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
  </v-container>
</template>

<script setup>
const apps = [
  {
    name: "RoutineTree",
    text: "Task management application that helps you accomplish your daily routine tasks.",
    platform: ["iOS"],
    status: "In Review",
    url: "",
  },
  {
    name: "My homepage",
    text: "This website.",
    platform: ["web"],
    status: "Released",
    url: "/"
  }
]
</script>

<style>
</style>