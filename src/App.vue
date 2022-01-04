<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dence>
        <v-list-item>
          <v-list-item-content ><v-btn @click="drawer = false" text>Close</v-btn></v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/works">
          <v-list-item-content>
            <v-list-item-title>Works</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/posts">
          <v-list-item-content>
            <v-list-item-title>Posts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="">
          <v-list-item-content>
            <v-list-item-title>Source</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-title>sYamaz</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">About</v-btn>
      <v-btn to="/works">Works</v-btn>
      <v-btn to="/posts">Posts</v-btn>
      <v-btn text>Source</v-btn>
      <v-btn @click="theme = theme === 'light' ? 'dark' : 'light'" text>toggle theme</v-btn>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app>
      
    </v-footer>
  </v-app>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue';

const prop = defineProps({
  drawer:false,
  //theme:'light'
})

</script>
