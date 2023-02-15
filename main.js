const app=Vue.createApp({
    data(){
        return{
            showBooks: true,
            github_url: 'https://github.com/kiboma2021',
            books:[
                {title: 'Shreds of tenderness',author: 'John Smith',age: 34},
                {title: 'Last day of dying horse',author: 'Benard',age: 19},
                {title: 'Kidagaa Kimemwozea',author: 'John Joe',age: 77},
                {title: 'Around and about',author: 'Ibrahim Mwanza',age: 46},              
            ]
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