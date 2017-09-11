let eventBus = new Vue();
new Vue({
    el:'.wrapper',
    data:{
        title:'订单支付',
        goods_list:[],
        plug_price:0,
        plug_condition:'(含运费)',
        person_name:'路飞',
        person_num:'15210932587',
        person_address:'北京市海淀区',
        
        shop_name:'',
        product_name:'',    
        discount_price:'',
        total_price:'',
        freight_price:'10.00',
        all_price:'',
        count_limit:'10',
        price:'',
        
        pay_ways:{},
        reserved_money:0,
        init_price:0,
        query_data:{},
        reserved:0,
        awards:0,
        reserved_money_input:true,
        awards_money_input:false

    },   
    components:{
       'div-footer':Footer,
       'div-address':Address,
       'div-good1':good1,
       'div-shoping':pay_wrap
    },
    methods:{
        send:function (str) {
            let _obj = {};
            if(str=='reserved'){
                _obj.selected = !this.reserved_money_input;
                _obj.way = '余额支付';
                _obj.money = this.reserved;
            }else{
                _obj.way= '奖金支付';
                _obj.money = this.awards;
                _obj.selected = !this.awards_money_input;
            }

            eventBus.$emit('pay_way',_obj)
        }
    },
    created:function () {
        axios.get('data/data.json').then((result)=> {
            this.query_data = result.data;
            this.goods_list = result.data.res;
            console.log(this.goods_list)
            this.reserved = result.data.pay_ways.reserved;
            this.awards = result.data.pay_ways.awards;
            this.init_price = result.data.init_price;
            for(let i in result.data.res){
                this.init_price[result.data.res[i].id] = result.data.res[i].discount_price*1+result.data.res[i]
            }
        });
    }
})
