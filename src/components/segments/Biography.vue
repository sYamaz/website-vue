<script setup lang="ts">
import { defineComponent } from "@vue/runtime-core";

type HistoryItem = {
    year:String;
    summery:String;
};
const histories: Array<HistoryItem> = [
    {
        year: "1990",
        summery: "Born in Tokyo, Japan. And moved to Ibaraki."
    },
    {
        year: "2013",
        summery: "Completed bachelor's degree in Electrical, Electronic and Computer Engineering at Tokyo University of Science."
    },
    {
        year: "2013 to present",
        summery: "Work as a software developper at Orientalmotor co., ltd."
    },
];

</script>
<script lang="ts">
export default defineComponent({
   name:"Biograpy",
});
</script>
<template>
    <v-container>
        <h1>Biography</h1>
        <v-container v-for="history in histories" v-bind:key="history">
            <v-row>
                <v-col >{{history.year}}</v-col>
                <v-col >{{history.summery}}</v-col>
            </v-row>
            <v-divider></v-divider>
        </v-container>
    </v-container>
</template>
<style>
</style>