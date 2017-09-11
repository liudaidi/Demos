Vue.component('my-header',{
    data:function (){
        return {
            tt:'编辑'
        }
    }, 
    template:` <header>
           <i class='fa fa-fw fa-angle-left'></i>
           <h3>我的购物车</h3>
           <span @click='define'>{{tt}}</span>
        </header>`,
    methods:{
        define:function (){
            if(this.tt==='编辑'){
                this.$store.commit('_if',true)
                this.tt='完成'
            }else{
               this.$store.commit('_if',false)
                this.tt='编辑'
            }
        }
    }
            

})