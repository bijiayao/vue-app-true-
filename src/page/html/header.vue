<template>
    <div id="user-header">
        <h1 @click="changeTitle">{{title}}{{title1}}</h1>
        <router-link to="/user/jd">user/jd</router-link>
        <router-link to="/user/js">user/js</router-link>

    </div>
</template>

<script src="../js/header.js"></script>
<style scoped>
    h1 {
        background: red;
        color: white;
        text-align: center;
        padding: .5rem;
        margin: 0;
    }
</style>