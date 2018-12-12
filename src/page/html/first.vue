<template>
    <div >
        <h1>jiayao</h1>
        <span>{{title}}</span>
        <h1>{{list.name}}</h1>
        <h1 v-text="list.year"></h1>
        <h1 v-if="isShow">{{title}}</h1>
        <h1 v-else="isShow">jiayao</h1>
        <ul>
            <li v-for="ar in arr">{{ar.name}}</li>
        </ul>
        
    </div>
</template>

<script src="../js/first.js"></script>
<style scoped></style>