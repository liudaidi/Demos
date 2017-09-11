let product={
    props:['product_name','product_price','product_id','selected_all'],
    data:function (){
        return {
            count:1,
            checked:false

        }
    },
    template:` <div class='div'>
                    <dl>
                        <dt><span class='check'><input type='checkbox' v-model='checked' @click='choose'/></dt>
                        <dd>
                            <p>{{product_name}}</p>
                            <div class="box">
                                <span>￥<b>{{product_price}}</b></span>
                                 <ul>
                                     <li @click='minus'>-</li>
                                     <li>{{count}}</li>
                                     <li @click='add'>+</li>
                                </ul>
                            </div>
                           
                        </dd>
                    </dl>
                    <div class="float" v-show='ifblock'>
                        <span class='del' @click='del($event)'>删除<b>X</b></span>
                    </div>                    
                </div>`,
        methods:{
            minus:function (){
                this.count >1 ? this.count-- : this.count=1;
                this.updata_total();
            },
            add:function (){
                this.count>=10 ? this.count = 10 :this.count++;
                this.updata_total();
            },
            updata_total:function (){//计算价钱 根据每个产品的id计算
                if(this.checked){
                    this.$store.commit(this.product_id,this.count*this.product_price)
                }else{
                    this.$store.commit(this.product_id,0)
                }
            },
            choose:function (){//点击全选计算价钱
                console.log(this.product_id);
                console.log(this.product_price*this.count);
                this.updata_total();
            },
            del:function (event){
                event.target.parentNode.parentNode.remove()
            }
        },
        computed:{
            ifblock:function (){
                return this.$store.state._if
            }
        },
        watch:{
            checked:function (data){
                if(data){
                    this.$store.commit(this.product_id,this.product_price*this.count)
                }else{
                    this.$store.commit(this.product_id,0)
                }
            },

            selected_all:function (data){
                this.checked=data
            }
        }
}

let sec_hospital={
    props:{
        product_list:{
            required:true
        },
        hospital_name:{
            type:String,
            required:true
        },
        data:function (){
            return {
                selected_all:false
            }
        }
    },
    template:`<div class="container">
                <p class="p1"><input type='checkbox' v-model='selected_all'>{{hospital_name}}</p>
                    <div class="list">
                        <product v-for='x in product_list' :product_price='x.price' :product_name='x.type' :product_id='x.id' :selected_all='selected_all'></product>
                    </div>
                             
                <p class="p1">订单留言<i class='fa fa-fw fa-angle-right'></i></p>
            </div>`
}

Vue.component('product',product)
Vue.component('sec_hospital',sec_hospital)

