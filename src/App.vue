<script setup>

import { ref } from 'vue';

const drawer = ref(false);
const theme = ref('light');

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
};

</script>

<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dence>
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
        <v-list-item href="https://github.com/sYamaz/website-vue">
          <v-list-item-content>
            <v-list-item-title>Source</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-title>sYamaz</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme">theme</v-btn>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app>
      <v-container style>
        <v-row>
          <v-spacer></v-spacer>@2022 Shun Yamazaki. All Rights Reserved.
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>


