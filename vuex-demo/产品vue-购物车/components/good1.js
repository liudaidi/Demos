let good1={
  template:'#good1',
  data:function (){
      return {
        count:1,
        sum_price:0,
        freight:10,
        all_price:0
      }
    },    
    props:{
      shop_name:{
        type:String,
        required:true
      },
      product_name:{
        
      },
      price:{
       
      },
      discount_price:{
        
      },
      total_price:{
        
      },
      freight_price:{
       
      },
      count_limit:{

      }
    },
       
    methods:{//计算加减
        del:function (){
            this.count >1 ? this.count-- : this.count=1;
        },
        add:function (){ 
            this.count>=this.count_limit ? this.count = this.count_limit :this.count++;
        },
        compute_price:function (){
        		this.sum_price = this.count*this.discount_price;//计算总价=count*折扣价
            this.all_price = this.sum_price+this.freight;//运费总价=总价+运费价
        }
    },
    watch:{
    	count:function (val,oldval){
    				this.sum_price = val*this.discount_price;
            this.all_price = this.sum_price+this.freight;
            eventBus.$emit('price',this.all_price)
    	},
    	discount_price:function (a,b) {
            this.compute_price();
            eventBus.$emit('price',this.all_price)
      }
        
    	
    }
}