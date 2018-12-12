export default({
    name: 'user-header',
    props: ["title"],
    data(){
        return{
            title1:'瑶瑶的乐园'
        }
    },
    methods: {
        changeTitle: function(){
            debugger
            this.$emit("titleChanged","家瑶最棒！！！")
        }
    }
})