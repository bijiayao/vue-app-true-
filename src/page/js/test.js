import { METHODS } from "http";

export default ({
    name: "test",
    props: ['title'],
    data(){
        return {
            message: "winter is coming",
            tips: new Date().toLocaleString(),
            isShow: true,
            show: false,
            greet: '',
            regreet: false,
            question: '',
            answer:  "no answer",
            box1: [],
            box2: '',
            box: '',
            box3: []
        }
    },
    methods:{
        changeStatus: function(){
            debugger
            this.isShow = !this.isShow
        },
        reverseGreet: function(){
            this.greet = this.greet.split('').reverse().join('')
            this.regreet = true;
        },
        change: function(box){
            // this.box3 = this.box3.push(box)
        }
    },
    watch: {
        question: function(newValue,oldValue){
            this.answer = "I will be back"
        }
    }
})

