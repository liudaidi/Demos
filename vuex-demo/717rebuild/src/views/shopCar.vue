<template>
    <div class="container">
        <header class="header">
            <div>购物车 </div>
           <div class="edit"><span @click=edit() v-if=!toggle>编辑</span><span @click=compelete() v-if=toggle>完成</span></div>
        </header>
        <div>
            <div class="cont" v-if="carArr==null">
                <div class="null">
                    <div class="void">
                        <div class="shopp"></div>
                        <ul>
                            <li>购物车为空</li>
                            <li>
                                <a>
                                    <span @click=goshop()>去逛逛</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="shop_list" v-else>
                <ol v-for="(i,index) in carArr">
                    <li >
                        <div>
                            <p @click="check(i)" :class="{'bg':i.check}"></p>
                        </div>
                        <div>
                            <img :src="i.obj_data" alt="">
                        </div>
                        <div>
                            <p>{{i.goods_name}}</p>
                            <p>
                                <span>
                                    <b>×{{i.status}}</b>
                                    <b>￥{{i.discount_price}}</b>
                                </span>
                                <span>
                                    <b @click=minus(i)>-</b>
                                    <b>{{i.status}}</b>
                                    <b @click=add(i)>+</b>
                                </span>
                            </p>
                        </div>
                    </li>
                </ol>
            </div>

            <div class="h5">
                <h5>
                    <img src="../assets/myImg/daodao.png" alt="">
                    热门推荐
                    <img src="../assets/myImg/daodao.png" alt="">
                </h5>
            </div>
            <main>
                <ul>
                    <li>
                        <img src="../assets/myImg/shop1.jpg" alt="">
                        <p>裕龙酒业原味稻2.5kg*2袋无常大米礼品装，稻花香2</p>
                        <p>
                            <span>￥110.00</span>
                            <img src="../assets/myImg/che.png" alt="">
                        </p>
                    </li>
                    <li>
                        <img src="../assets/myImg/shop2.jpg" alt="">
                        <p>福溶嘉 组合装礼盒（红花籽油+亚麻籽油） 1L*2建</p>
                        <p>
                            <span>￥398.00</span>
                            <img src="../assets/myImg/che.png" alt="">
                        </p>
                    </li>
                    <li>
                        <img src="../assets/myImg/shop3.jpg" alt="">
                        <p>好恰 山茶油礼盒2L*2、提</p>
                        <p>
                            <span>￥448.00</span>
                            <img src="../assets/myImg/che.png" alt="">
                        </p>
                    </li>
                    <li>
                        <img src="../assets/myImg/shop4.jpg" alt="">
                        <p>都市余味 红香妃葡萄干218g</p>
                        <p>
                            <span>￥25.90</span>
                            <img src="../assets/myImg/che.png" alt="">
                        </p>
                    </li>
                </ul>
            </main>
            <div class="bootom">到底了嗷！...</div>
        </div>
    <div class="accountBox">
        <ul>
            <li class="li1" @click=checkAll()>
                <p :class="{'bg':flag}"></p>
                <span>全选</span>
            </li>
            <li class="li2">
                <p v-if="!toggle">
                    <span>
                       合计： 
                    </span>
                    <span class="money">
                        ￥{{(sumPrice*1).toFixed(2)}}
                    </span>
                </p>
                <p>
                    <button class="accountBtn" ><span v-if="!toggle"  @click=account()>结算</span><span v-if="toggle" @click=del()>删除</span></button>

                </p>
            </li>
        </ul>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name:"shopCar",
        methods:{
            goshop:function(){
                //console.log(this.$store.state.shopcarArr)
                this.$router.push("/home")
            },
            minus:function(i){
               i.status--

               if(i.status<=1){
                i.status=1
               }
              this.total()

            },
            add:function(i){
                i.status++
              this.total()

            },
            edit:function(){

               this.toggle=!this.toggle

            },
            compelete:function(){
                this.toggle=!this.toggle
            },
            del:function(){
                let delArr=[]
                this.carArr.forEach(function(i,v){
                    //console.log(i)
                    if(i.check){
                       delArr.push(i.goods_id)
                    }
                })
                this.$store.commit('delShop',delArr)
                  if(localStorage.getItem("shopcarArr")){
                     this.carArr=JSON.parse(localStorage.getItem("shopcarArr"))
                    }
            },
            account:function(){
                let car=[]
                this.carArr.forEach((i,v)=>{
                    //console.log(i)
                    if(i.check){
                        car.push(i)
                         this.$store.commit("checkArr",car)
                         this.$router.push("/pay")
                    }else{
                        this.num2++
                        if(this.num2>this.carArr.length){
                            return
                        }
                    }
                })
            },
            check:function(i){
                //console.log(i) 
               
              if(typeof i.check=='undefined'){
                    this.$set(i,'check',true)
                   
              }else{
                i.check=!i.check
                
              }
              this.carArr.forEach((i,v)=>{ 
                    if(i.check){
                        this.num++
                        if(this.num==this.carArr.length){
                            this.flag=true
                        }
                    }else{
                        this.flag=false
                         this.num=0
                    }
                })
              this.total()

            },
            checkAll:function(){
                this.flag=!this.flag
                   this.carArr.forEach((i,v)=>{
                    if(i.check=="undefined"){
                        this.$set(i,'check',true)
                    }else{
                        i.check= this.flag
                    }
                   }) 
              this.total()
            } ,
            total:function(){
                this.sumPrice=0
                this.carArr.forEach((i,v)=>{
                   
                    if(i.check){
                        this. sumPrice+=(i.discount_price*1)*i.status
                       this.$store.commit("totalPrice",this. sumPrice)
                    }
                })
            }

        },
        data(){
            return{
               carArr:null,
               count:1,
               ind:null,
               flag:false,
               num:0,
               sumPrice:0,
               num2:0,
               toggle:false

              
            }
        },
        mounted(){
            if(localStorage.getItem("shopcarArr")){
              this.carArr=JSON.parse(localStorage.getItem("shopcarArr"))
            }
            document.querySelector(".footer").style.display="block"
           
        }
    }
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #eeeeee;
        position:relative;

    }

   
    .header{
        width: 100%;
        height: 1rem;
        background: #fafafb;
        border-bottom: 1px solid #e5e5e5;
        position: relative;

        div{
            font-size:.35rem;
            text-align: center;
            line-height:1rem;
        }
        .edit{
            position: absolute;
            right: 8px;
            top:2px;
            font-size:.3rem;

        }
    }
    .container>div{
        width: 100%;
        flex:1;
        overflow: auto;
    }
    .cont{

        width: 100%;
        height: 4.8rem;
        background: #fff;
        position: relative;
        border-bottom: 1px solid #ffffff;
       .void {
            width: 100%;
            height: 4.8rem;
            background: #fff;
            position: relative;
            border-bottom: 1px solid #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
    .shopp{
        width: 1.44rem;
        height: 1.44rem;
        background: url(../assets/shopCarImg/shop.png)no-repeat;
        background-size: 100%;
        margin-bottom: .2rem;
    }
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        li{
            margin-bottom: .2rem;
            line-height: .5rem;
            color: #666666;
            display: flex;
            font-size:.3rem;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            span{
                color: #fc4141;
                width: 2.1rem;
                display: block;
                padding: .1rem .3rem;
                border: 1px solid #fc4141;
                border-radius: 4px;
                font-size: .34rem;
            }
        }
    }
}

    }
    .h5{
        margin: .1rem 0;
        width: 100%;
        background: #ffffff;
        height: .9rem;
        line-height: .9rem;
        h5{
            width:100%;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.3rem;
            img{
                margin:0 .2rem 0 .2rem;
                width: 0.34rem;
                height: 0.24rem;
            }
        }
    }


    main{
        width:100%;

        ul{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width: 49%;
                display: flex;
                flex-direction: column;
                background: #fff;
                margin-bottom: 2%;
                img{
                    width:3.6rem;
                    height:3.6rem;
                }
                p{
                    &:nth-child(2){
                        width:100%;
                        font-size: 0.28rem;
                        line-height: 0.35rem;
                        height: .7rem;
                        padding-left: 0.1rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    &:last-child{
                        width:100%;
                        height:.7rem;
                        display: flex;
                        padding-left: .1rem;
                        align-items: center;
                        justify-content: space-between;
                        padding-right:.3rem;
                        span{
                            font-size: 0.25rem;
                            color: #fc4141;
                        }
                        img{
                            width: 0.65rem;
                            height: 0.55rem;
                        }
                    }
                }
            }
        }
    }
.shop_list{
    width:100%;
    background: #eeeeee;
    b{
        font-size:.28rem;
    }
    ol{
        width:100%;

        li{
            width:100%;
            display: flex;
            height: 2.6rem;
            background: #fff;
            margin-bottom: .2rem;
            div{
                &:first-child{
                    width:10%;
                    height:100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    p{
                        width: .48rem;
                        height: .48rem;
                        border-radius: 50%;
                        border: 1px solid #ccc;
                    }
                }
                &:nth-child(2){
                    width:25%;
                    height:100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width:2rem;
                        height:2rem;
                    }
                }
                &:last-child{
                    width:65%;
                    height:100%;
                    p{
                        width:100%;
                        &:first-child{
                            height:40%;
                            color:#666;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            font-size: .32rem;
                            display: flex;
                            align-items: center;
                            padding: .2rem 0 0 .4rem;
                        }
                        &:last-child{
                            height:60%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            span{
                                &:first-child{
                                    width:30%;
                                    height:60%;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content:space-between;
                                    padding-left: .4rem;
                                    b{
                                        &:first-child{
                                            font-size:.3rem;
                                            color:#666;
                                        }
                                        &:last-child{
                                            font-size: .3rem;
                                            color:red;
                                        }
                                    }
                                }
                                &:last-child{
                                    width:70%;
                                    height:100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    b{
                                        color: #333333;
                                        font-size: .36rem;
                                        width:.7rem;
                                        height:.7rem;
                                        text-align: center;
                                        line-height: .7rem;
                                        border:1px solid #ccc;
                                        &:nth-child(2){
                                            width:1rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


   .bg{
        background:orange;
    }
    .bootom{
        width: 100%;
        text-align: center;
        font-size: .25rem;
        color: #999999;
        line-height: .7rem;
        margin-bottom: 0;
        overflow: hidden;
         margin-bottom:1rem;
    }


    .accountBox{
        padding:0 0 0 .15rem;
        position:absolute;
        margin-top:.3rem;
        bottom:0;
        left:0;
        width:100%;
        height: 0.93rem;
        background:#fff;
        font-size:.32rem;
        color:#666;
        border-bottom:1px solid #e5e5e5;
        ul{
            display:flex;
        -webkit-justify-content:space-between;
        
            .li2{
                display:flex;
               line-height:.93rem;
                .money{
                    color:#fc4141;
                    /*font-size:;*/
                    font-weight:bold;
                }
                .accountBtn{
                   padding:0 .7rem;
                    height:0.93rem;
                    line-height:.93rem;
                    outline:none;
                    border:0;
                    background:#fc4141;
                    color:#fff;
                    margin-left:.4rem;
                }

            }
            .li1{
                display:flex;
               line-height:.93rem;
                p{
                  width: .48rem;
                    height: .48rem;
                    border-radius: 50%;
                    border: 1px solid #ccc; 
                     margin-right:.2rem;
                     margin-top:.2rem;
                }
            }

           
        }
    }
  


</style>