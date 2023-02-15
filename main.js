const app=Vue.createApp({
    data(){
        return{
            showBooks: true,
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
        },
        changeTitle(){
            this.title ="Wow!"
        },
        showHideBooks(){
            //console.log("clicked")
            this.showBooks = !this.showBooks
        },
        handleEvent(){
            console.log("Here we are!")
        }
    }

})

app.mount('#app')