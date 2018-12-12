<template>
    <div id="user">
        <div class="user-operation">
            <input type="text" v-model="name" placeholder="请输入用户名"/>
            <input class="user-input" type="text" v-model="email" placeholder="请输入邮件"/>
            <button class="add-style" @click="add">添加</button>
        </div>
        <div>
            <ul class="user-list">
                <li class="user-item" v-for="item in userList">
                    <input type="checkbox" v-model="item.del">
                    <span :class="{list:item.del}">
                        <span>{{item.name}} {{item.email}}</span>
                        <button @click="deleteUser(item)">删除</button>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="../js/user.js"></script>
<style scoped>
    #user{
        width: 100%;
        margin: 1rem auto;
    }
    .user-operation{
        margin-top: 1.5rem;
        height: 1.8rem;
        display: flex;
        justify-content: center;
    }
    .user-input{
        margin-left: 1rem;
    }
    .add-style{
        margin-left: .5rem;
    }
    .user-list{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0；
    }
    .user-item{
        padding: 1rem;
        margin: 1rem;
        border: .1rem solid black;
        flex-grow: 1;
    }
    .list{
        text-decoration: line-through;
    }
</style>