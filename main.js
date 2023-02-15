const app=Vue.createApp({
    data(){
        return{
            title: 'Shreds of tenderness',
            author: 'John Smith',
            age: 34,
        }
    },
    methods: {
        increamentAge(){
            this.age++
        },
        decreamentAge(){
            this.age--
        }
    }

})

app.mount('#app')