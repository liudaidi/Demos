new Vue({
    el:'.wrapper',
    data:{
        list:[]
    },
    components:{        
        "sec_hospital":sec_hospital,
        "product":product
    },
    store,
    created:function (){
        axios.get('data/data.json').then((data)=>{
            this.list=data.data.hospital_list
            console.log(data.data)
           // this.$store.commit('getData',data.data.hospital_list)
        })
    }

})