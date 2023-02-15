const app=Vue.createApp({
    data(){
        return{
            title: 'Shreds of tenderness',
            author: 'John Smith',
            age: 34,
        }
    }
})

app.mount('#app')