import Vue from 'vue'
import App from './my.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Vuex from 'vuex'
import reset from './css/reset.css'
import one from './view/one.vue'
import two from './view/two.vue'
import three from './view/three.vue'
import four from './view/four.vue'
import five from './view/five.vue'
import end from './view/end.vue'
import store from './store/store.js'



Vue.use(VueRouter)

const routes=[
    {
        name:'one',
        path:'/one',
        component:one
    },
    { path: '/',
         redirect:'/one'
    },
    {
        name:'two',
        path:'/two',
        component:two
    },
    {
        name:'three',
        path:'/three',
        component:three
    },
    {
        name:'four',
        path:'/four',
        component:four
    },
    {
        name:'five',
        path:'/five',
        component:five
    },
    {
        name:'end',
        path:'/end',
        component:end
    },
]

let router=new VueRouter({
    routes,

})
 new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App),
    created:function(){
        
        axios.get('../data/data.json').then((data)=>{
            
             this.$store.state.obj=data.data
            //console.log(this.obj)
        })
    }
 })
