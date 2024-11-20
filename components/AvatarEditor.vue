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
        <div v-for="(group, index) in groups" :key="`group-${index}`">
            <p>{{ group.name }}:</p>
            <li v-for="(feature, index) in group.members" :key="`feature-${index}`">
                <button @click="group.activate(feature)">{{ feature.name }}</button>
            </li>
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

    #face {
        filter: sepia(100%);
    }

    #hair {
        filter: sepia(100%);
    }

    #head {
        filter: sepia(100%);
    }
</style>