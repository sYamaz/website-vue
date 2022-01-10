<template>
  <v-container>
  <h1>Works</h1>
  <v-container v-for="app in apps" v-bind:key="app">
    <v-card>
      <v-card-title>{{app.name}}</v-card-title>
      <v-card-media>
        <v-img :src="app.img"></v-img>
      </v-card-media>
      <v-card-text>{{ app.text }}</v-card-text>

      
      <v-card-subtitle>Platform {{ app.platform.join(", ") }}</v-card-subtitle>
      <v-card-subtitle>Status {{app.status}}</v-card-subtitle>
      <v-card-text></v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn v-if="app.url != ''" :to="app.url"><span class="text-info">Read more</span></v-btn>
        <v-btn v-if="app.outerurl != ''" :href="app.outerurl"><span class="text-info">Read more</span></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
  </v-container>
</template>

<script setup lang="ts">

import routineTreeImg from "../assets/RoutineTree.png"

type AppItem = {
  name:String;
  img:any;
  text:String;
  platform:Platform[];
  status:Status;
  url:String;
  outerurl:String;
}

type Status = "In Review" | "Released"
type Platform = "web" | "iOS"

const apps:AppItem[] = [
  {
    name: "RoutineTree",
    img: routineTreeImg,
    text: "Task management application that helps you accomplish your daily routine tasks.",
    platform: ["iOS"],
    status: "In Review",
    url: "",
    outerurl: "https://syamaz.github.io/RoutineTree/"
  },
  {
    name: "My homepage",
    img: "",
    text: "This website.",
    platform: ["web"],
    status: "Released",
    url: "/",
    outerurl: ""
  }
]
</script>

<style>
</style>