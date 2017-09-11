//头部组件
Vue.component('orderheader',{
        props:{
            title:{
                type:String,
                required:true
            }
        },
        template:`<header><span class='left'><i class='fa fa-fw fa-angle-left' v-on:click='back'></i></span>
                    <h3>{{title}}</h3>
                    <span class='right'><i class='fa fa-fw fa-comment-o'></i></span></header>`,
        methods:{
            back:function (){
                window.history.go(-1);
            }
        }

    
})