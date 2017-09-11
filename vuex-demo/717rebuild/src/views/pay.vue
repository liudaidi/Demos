<template>
	<div class="wrap">
		<header class="header">
			<p class="first" @click=returns()>< 返回</p>
			<p>订单支付</p>
			<p></p>
		</header>
		<div class="main">
			<div class="address"  @click=address()>
				<div v-if="add_address" class="add_address">
					<p ><img src="../assets/payImg/my19.png" alt="">未添加地址，请点击添加地址</p>
					<p>></p>
				</div>
				<div class="top" v-if="address_show">
					<h4><img src="../assets/payImg/my19.png" alt="">{{default_address.name}}<span>{{default_address.tel}}</span></h4>
					<p><span>{{default_address.province}}</span><span>{{default_address.city}}</span><span>{{default_address.region}}</span><span>{{default_address.detail_address}}</span></p>
				</div>
			</div>
			<p class="imgs"><img src="../assets/payImg/6.gif" alt=""></p>
	          <div class="container" v-for="i in checkArr">
                <div class="title">
                    <div><img :src="i.store_logo" alt=""></div>
                    <span>{{i.store_name}}</span>
                </div>
                <dl>
                    <dt><img :src="i.obj_data" alt=""></dt>
                    <dd>
                        <div>{{i.goods_name}}</div>
                        <div class="jiage">
                            <div>
                                <p class="tot">￥{{i.discount_price}}</p>
                                <span style="text-decoration: line-through">￥{{i.discount_price*1+20}}</span>
                            </div>
                            <div>
                                <span @click=add(i)>+</span>
                                <span>{{i.status}}</span>
                                <span @click=minus(i)>-</span>
                            </div>
                        </div>
                    </dd>
                </dl>
                <div class="foot">
                    <p><span>商品价格</span><span>{{(i.discount_price*i.status*1).toFixed(2)}}</span></p>
                    <p><span>运费</span><span>0.00</span></p>
                    <p><span>总额(含运费)</span><span>{{(i.discount_price*i.status*1).toFixed(2)}}</span></p>
                </div>
            </div>
            <p class="info" v-if="show">请选择支付方式</p>
			<div class="paywrap">
				<div class="p1">
					<p><span>余额支付</span><span>￥0.00</span></p>
					<p class="btnImg">
						<input type="checkbox" value="1" id="tu">
						<label for="tu" class="tu"></label>
					</p>
				</div>
				<div class="p1">
					<p><span>奖金支付支付</span><span>￥0.00</span></p>
					<p class="btnImg">
						<input type="checkbox" value="1" id="tu">
						<label for="tu" class="tu"></label>
					</p>
				</div>
				<ul>
					<li>
						<p class="p2"><img src="../assets/payImg/home06.png" alt=""><span>微信支付</span></p>
						<p><span class="circle"></span></p>
					</li>
					<li>
						<p class="p2"><img src="../assets/payImg/home09.png" alt=""><span>支付宝支付</span></p>
						<p><span class="circle"></span></p>
					</li>
					<li>
						<p class="p2"><img src="../assets/payImg/home11.png" alt=""><span>银联支付</span></p>
						<p><span class="circle"></span></p>
					</li>
				</ul>
			</div>
		</div>
		<footer class="footer">
			<ul>
				<li><p class="sum"><span>总计：</span><span>￥0.00</span></p><p class="trans">(含运费)</p></li>
				<li><span>定金：</span><span class="deposit">￥0.00</span></li>
				<li><button class="post" @click="getPay">提交订单</button></li>
			</ul>
		</footer>
	</div>
</template>
<script>
	import dialog from "../statics/js/popup.js"
	export default{
		name:"pay",
		data(){
			return{
				checkArr:[],
				default_address:[],
				address_show:false,
				add_address:true,
				nav_dom:"",
				show:false,
			}
		},
		methods:{
			returns:function(){
				this.$router.push("/shopCar")
			},
			address:function(){
				this.$router.push("/address")
			},
			 minus:function(i){
               i.status--
               if(i.status<=1){
                i.status=1
               }
            },
            add:function(i){
                i.status++
            },
            getPay:function(){

            }
            
		},
		 mounted(){
            if(localStorage.getItem("checkArr")){
              this.checkArr=JSON.parse(localStorage.getItem("checkArr"))
            }
            // if(localStorage.getItem("default_address")){
            // 	//console.log(localStorage.getItem("default_address"))
            //   this.default_address=JSON.parse(localStorage.getItem("default_address"))
            //  	//console.log(this.default_address)
            // }
          console.log(this.$store.state.address_info)
          if (localStorage.getItem("address_info")) {
          	if(	JSON.parse(localStorage.getItem("address_info")).length==0){
          		this.add_address=true
          		this.address_show=!this.add_address
          			dialog.popup({
	           	 	content:"您还未填写收货地址信息，请先添加地址",
		        	judge:["去添加","取消"],
		            callback:(flag)=>{
	            	if(flag){
	            		this.$router.push("/address")
	            		}
	            	}	
       			})
          	}else{
          			JSON.parse(localStorage.getItem("address_info")).forEach((i,v)=>{
	            	if(i.is_default){
	            		this.address_show=true
	            		this.add_address=!this.address_show
	            		 this.default_address=i

	            	}
	      
	            })
	          }
          	}
          
           

    
        }
		
	}
</script>
<style lang="scss" scoped>
	.wrap{
		width:100%;
		height:100%;
		display:flex;
		flex-direction:column;
		font-size:.3rem;
		color:#666;
		.header{
			height:1rem;
			background:#fff;
			line-height:1rem;
			border-bottom:1px solid #ccc;
			display:flex;
			.first{
				text-align: left;
				padding-left:.2rem;
			}
			p{
				flex:1;
				text-align: center;
			}
		}
		.address{
				background:#fff;
		}
		.address .add_address{
			width:100%;
			display:flex;
			justify-content:space-between;
			height:2rem;
			background:#fff;
			padding:0 .2rem;
			align-items:center;
			font-size:.28rem;

			img{
				width: .24rem;
    			height: .3rem;
    			margin-right:.2rem;
			}
			
		}
		.imgs{
				
				img{
					width:100%;
					height:.2rem;
				}
			}
	}
	.info{
		width:70%;
		height:1.2rem;
		background:rgba(0,0,0,.8);
		position:absolute;
		bottom:40%;
		left:15%;
		border-radius: 30px;
		color:#fff;
		text-align: center;
		line-height:1.2rem;
	}

.main{
	width:100%;
	height:100%;
	flex:1;
	overflow: auto;

}
			.top{
					border-bottom:1px solid #D1D1D1;
					padding:.3rem 0;
					p{
						color:#666;
						font-size:.28rem;
						margin-top:.4rem;
						span{
							margin-left:.2rem;
						}

					}
					h4{
						font-size:.36rem;
						padding:0 .2rem;
						img{
							width: .24rem;
			    			height: .3rem;
			    			margin-right:.2rem;
						}
						span{
							font-size:.3rem;
							color:#666;
							margin-left:.3rem;	
						}
					}
				}
	.paywrap{
		width:100%;
		margin-top:.2rem;
		margin-bottom:1rem;
		ul{
			width:100%;
			background:#fff;

			li{
				display:flex;
				justify-content:space-between;
				border-bottom:1px solid #ccc;
				height:1.16rem;
				padding-left:.2rem;
				
				.p2{
					display:flex;
					align-items:center;
					span{
						line-height:1.16rem;
					}
					img{
						width:.8rem;
						height:.8rem;
						margin-right:.2rem;
						
					}
				}
				.circle{
					width: .48rem;
                    height: .48rem;
                    border-radius: 50%;
                    border: 1px solid #ccc; 
                     margin-right:.2rem;
                     margin-top:.2rem;
                     display:inline-block;
				}
			}
		}
		.p1{
			height:1rem;
			background: #fff;
			border-bottom: 1px solid #ccc;
			line-height:1rem;
			text-indent: .2rem;
			font-size:.28rem;
			display:flex;
			justify-content:space-between;
			.btnImg{
				input{
					display:none;
				}
				label{
					webkit-transition: all 1s;
				    width: 1.26rem;
				    height: 0.76rem;
				    display: inline-block;
				    border-radius: 6rem;
				    background-position: -0.5rem 0px;
					background:url(../assets/payImg/btn.png)no-repeat;
					background-size: 1.76rem 0.75rem;
					margin-top:.1rem;
					padding-right:.2rem;
				}
				
				
			}
		}
	}
	.active{
		background-position: 30px;
	}

	.footer{
		width:100%;
		background:#fff;
		position:absolute;
		bottom:0;
		z-index:222;
		ul{
			display:flex;
			justify-content:space-between;
			align-items:center;
			li:nth-child(2){
				line-height:1.2rem;
				.deposit{
					color:#fc4d4d ;
					font-weight:bold;
				}
			}
			li:nth-child(3){
				width:26%;
			}
			.post{
				line-height:1.2rem;
				outline: none;
				border:0;
				background:#fc4d4d ;
				color:#fff;
				font-weight:bold;
				width:100%;

			}
			li:first-child{
				text-align:center;
				padding-left:.2rem;
				.sum{
					color:#fc4d4d;
					font-weight:bold;
				}
				.trans{
					font-size:.26rem;
				}
			}
		}
	}

	.container{
	padding: .2rem;
	width: 100%;
	margin-top:.2rem;
	background: #fff;
}
.container .title{
	display: flex;
	width: 100%;
}
.title img{
	margin-top: .2rem;
	width:20px;
	height: 22px;
}
.title span{
	flex: 1;
	font-size:.26rem;
	text-indent: .2rem;
	line-height: .9rem;
}
.container>dl{
	width: 100%;
	display: flex;
}
.container>dl>dt{
	width: 100px;
	height: 100px;
	border: 1px solid #ccc;
}
.container>dl>dt img{
	width: 100%;
	display: block;
}
.container>dl>dd{
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	flex:1;
	font-size:.26rem;
	margin-left: 10px;
	position: relative;
}

.container>dl>dd>.jiage{
	width: 100%;
	display: flex;
	position: absolute;
	bottom:0;
	left: 0;
}
.jiage div:first-child{

	flex:1;
}
.jiage div:first-child>p:first-child{
	color: #fc4141;
}
.jiage div:last-child{
	text-align: center;
	width: 100px;
	display: flex;
}

.jiage div:last-child>span{
	flex:1;
	display:inline-block;
	border: 1px solid #ccc;
	text-align:center;
	line-height:30px;
}
.jiage div:last-child>span:last-child{
	border-left: 1px solid  #ccc;
}
.jiage div:last-child>span:first-child{
	border-right: 1px solid  #ccc;
}
foot{
	margin-top: 10px;
	width: 100%;
}
.foot p{
	display: flex;
	width: 100%;
}
.foot p span{
	flex:1;
	margin-right: 10px;
}
.foot p:last-child span:last-child{
	font-size:.26rem;
	color:#fc4141;
}
.foot p>span:first-child{
	color:#666666;
	line-height:20px;
}
.foot p>span:last-child{
	text-align: right;
}

</style>