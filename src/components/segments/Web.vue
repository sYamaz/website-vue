<template>
    <v-container>
        <h1>Web</h1>
        <v-container v-for="link in links" v-bind:key="link">
            <v-btn :href="link.url" flat>{{link.name}}</v-btn>
        </v-container>
    </v-container>
</template>

<script setup>
const links = [
    {
        name: "Twitter(@ShunYamazaki5)",
        url: "https://twitter.com/ShunYamazaki5"
    },
    {
        name: "Github(sYamaz)",
        url:"https://github.com/sYamaz"
    }
]
</script>

<style>
</style>