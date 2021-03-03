const app = Vue.createApp({
    data(){
        return{
            name: 'Sonali',
            age: 21,
            avatar: 'https://avatars.githubusercontent.com/u/4163671?s=460&u=871f50b0936f1d54d4fce5cae88b6c0b8757314a&v=4' 
        }
    },
    methods: {
        getRandomNumber(){
            return Math.random();
        }
    }
});
app.mount('#assignment');