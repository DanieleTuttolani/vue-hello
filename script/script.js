console.log("vue ok ", Vue);

const app = Vue.createApp({
    data() {
        return{
            mainMessage : 'ciao boolean'
        }
    }
})

app.mount('#root')