export default({
    name: 'user',
    // model: {
    //     prop: checked,
    //     event: change
    // },
    props: {
        userList: Array
    },
    data(){
        return{
            name: '',
            email: ''
        }
    },
    methods: {
        clear: function(){
            this.name= '',
            this.email= ''
        },
        add: function(){
            this.userList.push({
                name: this.name,
                email: this.email
            })
            this.clear()
        },
        deleteUser: function(item){
            var i = this.userList.indexOf(item)
            this.userList.splice(this.userList.indexOf(item),1)
        }
        // ,
        // change: function(){
        //     this.$emit('changed',$event.target.checked)
        // }
    }
    // ,
    // create: {
    //     this.$http.get('http://jsonplaceholder.typicode.com/users')
    //     then
    // }
})