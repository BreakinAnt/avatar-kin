<template>
    <div class="avatar-container">
        <img v-for="(group, index) in groups" :key="`group-${index}`"
            class="avatar"
            :src="group.getActiveFilepath()"
            :style="`
                z-index: ${group.index};
                filter: sepia(100%) hue-rotate(${group.active.hue}deg) brightness(${group.active.brightness}%) saturate(${group.active.saturation}%);
            `"
        >
    </div>
    <div class="avatar-config">
        <div style="border-style: double;" v-for="(group, index) in groups" :key="`group-${index}`">
            <p>{{ group.getName() }}:</p>
            <button v-for="(feature, index) in group.members" :key="`feature-${index}`" @click="group.activate(feature)">{{ feature.name }}</button>

            <p>Color:</p>

            <button v-for="(color, index) in colors" :key="`color-${index}`" @click="group.active.hue = color.hue; group.active.brightness = color.brightness; group.active.saturation = color.saturation;">{{ color.name }}</button>

            Hue:<input type="range" v-model="group.active.hue" min="0" max="400">
            Brightness:<input type="range" v-model="group.active.brightness" min="0" max="200">
            Saturation:<input type="range" v-model="group.active.saturation" min="0" max="1000">
        </div>
    </div>
</template>
<script setup>
    import data from '@assets/avatar-data.json';
    import {Group} from '@assets/Group.js';
    import {Feature} from '@assets/Feature.js';
    import {Avatar} from '@assets/Avatar.js';

    const avatar = new Avatar();
    const groups = ref(avatar.groups);
    const colors = ref(data.color_options);

    data.character.forEach((type, index) => {
        const group = new Group(type.name, index);

        type.contents.forEach((content, index) => {
            const feature = new Feature(content.name, content.filename, content.hue, content.brightness, content.saturation);
            group.add(feature);
            if(index == 0){
                group.activate(feature);
            }
        });

        avatar.add(group);
    });
</script>

<style>
    .avatar-container {
        background-image: url(/avatar/bgc.jpg); 
        width: 70%; 
        height: 70%;
        position: relative;
    }

    .avatar {
        position: absolute; /* Allows images to overlap */
        top: 0; /* Aligns images to the top */
        left: 0; /* Aligns images to the left */
    }
</style>