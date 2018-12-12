<template>
    <div id="test">
        <router-view></router-view>
        <h1>{{title}}</h1>
        <h1>{{message}}</h1>
        {{tips}}
        <span v-bind:title="tips">显示时间</span>
        <span v-if="isShow">I am a winner!!!</span>
        <div>
            <button v-on:click="changeStatus()">显示</button>{{isShow}}
        </div>
        <div>
            <input type="text" v-model="greet" placeholder="请输入"/>
            <button v-on:click="reverseGreet">翻转问候</button>
            <p>{{greet}}</p>
            <p v-if="regreet">{{greet}}</p>
        </div>
        <span v-once>{{isShow}}</span>

        question: <input type="text" v-model="question">
        <span>{{answer}}</span>
        
        <input type="checkbox" value="jiayao" v-model="box1"/>
        <input type="checkbox" value="yangjiulang" v-model="box1"/>
        <input type="checkbox" value="zhangyunlei" v-model="box1"/>
        <input type="checkbox" value="liyifeng" v-model="box1"/>
        <span>{{box1}}</span>

        <div>
            <input type="radio" value="jiayao" v-model="box2"/>
            <input type="radio" value="yangjiulang" v-model="box2"/>
            <input type="radio" value="zhangyunlei" v-model="box2"/>
            <input type="radio" value="liyifeng" v-model="box2"/>
            <span>{{box2}}</span>
        </div>
        <div>
            <select name="box3" multiple  id="box3" v-model="box3">
                <option value="">请选择</option>
                <option value="jiayao">jiayao</option>
                <option value="yangjiulang">yangjiulang</option>
                <option value="zhangyunlei">zhangyunlei</option>
                <option value="liyifeng">liyifeng</option>
            </select>
            <span>{{box3}}</span>
        </div>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
    </div>
</template>

<script src="../js/test.js"></script>
<style scoped>

</style>