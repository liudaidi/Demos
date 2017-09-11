<template>
	<div class="wrap">
		<header class="header">
			<p class="fan" @click=returns()><  返回</p>
			<p><span>商品</span><span>详情</span></p>
			<p class="bg"></p>
		</header>
		
			<div class="main">
				<div class="banner">
					<img :src="newData[0].obj_data" alt="">
				</div>
				<ul>
					<li>
						<p class="title">{{newData[0].goods_name}}</p>
					</li>
					<li>
						<div class="left">
							<p>
							  <span class="price">￥{{newData[0].discount_price}}</span><span class="old">￥{{newData[0].discount_price*1+10*1}}.00</span>
						    </p>
						    <p class="yunfei">(运费: ￥0.00)</p>
						</div>
						<div class="right">
							<button>溯源查询</button>
						</div>
					</li>
				</ul>
				<div class="shop">
					<div>
						<p class="logo"></p>
						<p>						  
							<span class="s1">{{newData[0].store_name}}</span>
							<span class="s2">店主 : NJY1407004</span>
						</p>
					</div>
					<p>
						<button class="btn">进入店铺</button>
					</p>
				</div>
				<div class="swip">
					<h4>
						<img src="../assets/myImg/daodao.png" alt="">
						<span>热门推荐</span>
						<img src="../assets/myImg/daodao.png" alt="">
					</h4>
					<div class="deBox swiper-container">
						<ul class="swiper-wrapper">
							<li class="swiper-slide">
								<dl>
									<dt><img src="../assets/detailImg/1.jpg" alt=""></dt>
									<dd>
									    <p>谛品居 菌品赐福-野生菌礼盒 山珍礼盒 810g</p>
									    <p>￥108.8</p>
									</dd>
								</dl>
							</li>
							<li class="swiper-slide">
								<dl>
									<dt><img src="../assets/detailImg/1.jpg" alt=""></dt>
									<dd>
									    <p>谛品居 菌品赐福-野生菌礼盒 山珍礼盒 810g</p>
									    <p>￥108.8</p>
									</dd>
								</dl>
							</li>
							<li class="swiper-slide">
								<dl>
									<dt><img src="../assets/detailImg/2.jpg" alt=""></dt>
									<dd>
									    <p>谛品居 菌品赐福-野生菌礼盒 山珍礼盒 810g</p>
									    <p>￥108.8</p>
									</dd>
								</dl>
							</li>
							<li class="swiper-slide">
								<dl>
									<dt><img src="../assets/detailImg/1.jpg" alt=""></dt>
									<dd>
									    <p>谛品居 菌品赐福-野生菌礼盒 山珍礼盒 810g</p>
									    <p>￥108.8</p>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
				</div>
			</div>
		
		<footer>
			<div>
				<p>
					<img src="../assets/detailImg/05.png" alt="">
					<span>客服</span>
				</p>
				<p>
					<img src="../assets/detailImg/7.png" alt="">
					<span class="shopNum">{{$store.state.shopNum}}</span>
					<span @click=car()>购物车</span>
				</p>
			</div>
			<div class="add_shopcar" @click=addshop(newData[0])>加入购物车</div>
			<div class="bynow" @click=buynow()>立即购买</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'shopdetail',
		data(){
			return {
				newData:[],

			} 
		},
		computed:{
			shopcount(){

				return this.$store.state.shopNum	
			}
		},
		methods:{
			returns:function(){
				this.$router.push("/home")
			},
			addshop:function(i){
				if(localStorage.getItem("shopcarArr")){
					this.$store.state.shopNum=JSON.parse(localStorage.getItem("shopcarArr")).length
				}
				this.$store.commit("shopcarListData",i)
			},
			car:function(){
				this.$router.push("/shopCar")
			},
			buynow:function(){
				this.$router.push("/pay")
			}

		},

		created:function(){

			var id=this.$route.params.id
			

			//console.log(this.$route.params.id)
			 //console.log(this.$store.state.goods)
			 this.$store.state.goods.forEach((i,v)=>{
			 	//console.log()
			 		for(let j of Object.values(i.data)){
			 			//console.log(j.goods_id==id)
						if(j.goods_id==id){
							this.newData.push(j)
							//console.log(this.newData)
						}
			 		}		
			 })
		}
	}
</script>

<style lang="scss" scoped>
.wrap{
	width: 100%;
	height:100%;
	/*overflow: auto;*/
	display: flex;
	font-size:.3rem;
	flex-direction: column;
}
	.header{
		/*position: fixed;*/
		font-size:.38rem;
		/*top: 0;
		left: 0;*/
		width: 100%;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		border-bottom:1px solid #eee;
		color:#666;
		.fan{
			font-size:.32rem;
		}
		p{
			margin: 0 10px;
			span{
				margin: 0 5px;
			}
		}
		.bg{
			background: url(../assets/detailImg/index.png)no-repeat center center;
			width: 40px;
			height: 25px;
			background-size: contain;
		}
	}

	/*section{
		margin-top: 48px;
		margin-bottom: 50px;
		font-size:.3rem;*/
		.s1{
			color:#333;
			font-size:.26rem;
		}
		.s2{
			color:#666;
			font-size:.26rem;
		}
		.title{
			font-size:.28rem;
			color:#333;
		}
		.price{
			color:#333;
		}
		.yunfei{
			color:#666;
		}
		.detail{
		    width: 100%;
		    height: 100%;
		    display: flex;
		    -webkit-flex-direction: column;
		    overflow: hidden;
			}
		.main{
			background: #fff;
			width:100%;
			height:100%;
			-webkit-flex:1;
			overflow: auto;
			.banner{
				img{width: 100%;height:100%;}
			}
			ul{
				padding-bottom: 10px;
				li{
					display: flex;
					justify-content: space-between;
					.title{
					    border-top: 1px solid #eeeeee;
					    padding: 8px;					   
					    color: #333;
					    line-height: 18px;
					    text-align: left;
					}
					div{
						margin: 0 10px;
					}
					.left{
						p{
							margin-top: 5px;
							.old{
						       text-decoration: line-through;
						       margin-left: 10px;
						       color: #999999;
							}
						}
					}
					.right{
						button{
							outline: none;border: none;
						    text-align: center;
						    background: #4f99f2;
						    border-radius: 5px;
						    color: #fff;						   
						    padding: 8px 13px;	
						    font-size:.32rem;					    
						}
					}
				}
			}
			.shop{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 20px;
				padding-bottom: 8px;
				border-bottom: 5px solid #eee;
				div{
					display: flex;
				}
				p{
					margin: 0 10px;
					&:nth-child(2){
						display:flex;
						flex-direction: column;
						span{
							line-height: 17px;
						}
					}
					.btn{
						outline: none;
						border: 1px solid #666;
						background: #fff;
						color: #333;
						/*border-radius: 8px;*/
						padding: 5px 12px;
					}
				}
				.logo{
					background: url(../assets/detailImg/a.jpg)no-repeat;
				    background-size: contain;
				    width: 25px;
				    height: 25px;
				    margin-right: 0;
				}
			}
			.swip{
				h4{
					display: flex;
					justify-content: center;
					align-items: center;
					line-height: 35px;
					img{width: 20px;}
					span{margin: 0 10px;}
				}
				.deBox{
					ul{
					    margin: 0 15px;				
						li{
							float: left;
							margin-right: 15px;
							width: 2.07rem;
							dl{
								dt{width: 2.04rem;}
								img{width: 100%;}
								dd{
									p:nth-child(1){
										line-height: 15px;
									    margin: 6px;
									    overflow: hidden;
									    text-overflow: ellipsis;
									    display: -webkit-box;
									    -webkit-line-clamp: 1;
									    -webkit-box-orient: vertical;
									}
									p:nth-child(2){
										font-size: 14px;
									    font-weight: bold;
									    color: #fc4141;
									}
								}
							}
						}
					}
				}
			}
		}
	/*}*/
	footer{
	    position: fixed;
	    bottom: 0;
	    background: #fff;
	    width: 100%;
	    height: 52px;
	    border-top: 1px solid #ccc;
	    display: flex;
	    align-items: center;
	    z-index: 200;
	    font-size:.28rem;

	    div{
	    	display: flex;
	    	p{
	    		display: flex;
	    		color:#333;
	    		flex-direction: column;
	    		-webkit-justify-content:space-between;
	    		margin: 0 8px;
	    		align-items: center;
	    		img{width: 22px;margin-bottom: 8px;}
	    		&:nth-child(2){
	    			position: relative;
	    		}
	    		.shopNum{
	              display: inline-block;
	              background: red;
	              color: #fff;
	              width: 15px;             
	              line-height: 15px;
	              text-align: center;
	              border-radius: 10px;
	              position: absolute;
	              right: 0px;
	              top: -4px;
	            }
	    	}
	    }
	    .add_shopcar{
	    	flex: 1;
	    	height: 52px;
	    	display: flex;
	    	align-items: center;
	    	justify-content: center;
	    	font-size: 14px;
	    	background: #fe8282;
	    	color: #fff;
	    }
	    .bynow{
	    	flex: 1;
	    	height: 52px;
	    	display: flex;
	    	align-items: center;
	    	justify-content: center;
	    	font-size: 14px;
	    	background: #fb4142;
	    	color: #fff;
	    }
	}
</style>