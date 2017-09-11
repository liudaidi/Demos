let Footer={
    props:{
        plug_condition:{
            type:String,
            required:true
        }
        
    },
    data:function(){
    	return {
    		total_price:0
    	}
    },
    template:`<footer>
                    <p class='p1'>
                        <span>总计:￥<b>{{sum_price}}</b></span>
                        <span>{{plug_condition}}</span>
                    </p>
                    <button class='btn' @click='btn'>提交订单</button>
                    <div class="bgclolor">金额不足，请选择其他支付方式！</div>
                </footer>`,

        methods:{
            btn:function (){//提交订单
				console.log(1111)
            }
        },
        computed: {
	        sum_price:function () {
	            eventBus.$on('price', (data)=> {//监听price
	                this.total_price = data
	            });
	            return this.total_price
	        }
    }
}
