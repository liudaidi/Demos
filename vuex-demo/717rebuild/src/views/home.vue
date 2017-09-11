		<template>
		<div class="wrapBox">

			 <header class="header">
		      <ul>
		        <li class="first"><img src="../assets/img/homelo.gif" alt=""></li>
		        <li class="second"><i class=" fa fa-search"></i><input type="text" placeholder="请输入您要购买的商品" @focus=searchFn()></li>
		        <li class="third">
		          <img src="../assets/img/shoping.png" alt="">
		          <span>我的店铺</span>
		        </li>
		      </ul>
   		 </header>
   		 
	   		 <div class="main" @scroll=scroller()>
	   		 	<div class="container">
					<div class="banner">
						<div class="swiper-container banner">
							<div class="swiper-wrapper">
								<div class="swiper-slide slide">
									<img src="../assets/banner/1.png" alt="">
								</div>
								<div class="swiper-slide slide">
									<img src="../assets/banner/2.png" alt="">
								</div>
								<div class="swiper-slide slide">
									<img src="../assets/banner/3.png" alt="">
								</div>
								<div class="swiper-slide slide">
									<img src="../assets/banner/4.png" alt="">
								</div>
								<div class="swiper-slide slide">
									<img src="../assets/banner/5.png" alt="">
								</div>
							</div>
							<div class="swiper-pagination"></div>
						</div>
					</div>
					<div class="navBox">
						<ul>
							<li v-for="i in navList">
								<p @click=navdetail()><img :src="i.img" alt=""></p>
								<span>{{i.con}}</span>
							</li>
							<!-- <li>
								<p><img src="../assets/img/nav1.png" alt=""></p>
								<span>家乡味道</span>
							</li>
							<li>
								<p><img src="../assets/img/nav4.png" alt=""></p>
								<span>休闲零食</span>
							</li>
							<li>
								<p><img src="../assets/img/nav5.png" alt=""></p>
								<span>米面粮油</span>
							</li>
							<li>
								<p><img src="../assets/img/nav7.png" alt=""></p>
								<span>调味调料</span>
							</li>
							<li>
								<p><img src="../assets/img/nav8.png" alt=""></p>
								<span>酒水饮料</span>
							</li>
							<li>
								<p><img src="../assets/img/nav6.png" alt=""></p>
								<span>生鲜果蔬</span>
							</li> 
							<li>
								<p><img src="../assets/img/nav2.png" alt=""></p>
								<span>进口食品</span>
							</li>-->
						</ul>
					</div>
					<div class="dongtai">
						<span>商城动态</span>
						<div class="conBox">
							<p>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</p>
							<p>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</p>
						</div>
					</div>
					<div class="list">
						<div class="tehui">
							<p class="p1">
								<img src="../assets/img/todayimg.png" alt="">
								<span style="font-size:.32rem;color:#ff6d00;padding-right:.1rem">天天特惠</span>
								<span style="font-size:.23rem;color:#ff6d00">每天有惊喜</span>
							</p>
							<p class="more" @click=more()><a>更多></a></p>
						</div>
						<div class="foodBox1">
							<div class="left" @click=preferential(1)>
								
							</div>
							<div class="right">
								<div class="top" @click=preferential(2)></div>
								<div class="bot" @click=preferential(3)></div>
							</div>
						</div>
					</div>
					<div class="lists" v-for="j in goodsData">
						<div class="task">
							<p class="p2"></p>
							<p class="p1">
								<span class="line"></span>
								<label for=""><img src="../assets/img/todayimg.png" alt="">{{j.title}}</label>
								<span class="line"></span>
							</p>
							<p class="more"><a href="#">更多></a></p>
						</div>
						<div class="list1">
							<div class="listBox">
								<dl  v-for="i in j.data">
									<dt><img :src=i.obj_data alt="" @click=detail(i)></dt>
									<dd>
										<p class="one">
											<span>{{i.goods_name}}</span>
										</p>
										<p class="two">
											<span class="shopCar">+</span>
											<span>￥{{i.discount_price}}</span>
											<img src="../assets/img/shop1.png" alt="" @click=add(i)>
										</p> 
									</dd>
								</dl>
							</div>
						</div>
					</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"home",
		data(){
			return{
				navList:[],	
				num:0,
				id:0,
				
			}
		},
		computed:{
			goodsData(){

				return this.$store.state.goods	
			}
		},
		mounted:function(){
			//window.addEventListener("scorll",this.Scroll)
			this.$http.get("../../static/data/data.json").then((data)=>{
        		this.$store.dispatch("goodsData",data.data.data)

   			 })
			
			this.$http.get("../../static/data/nav.json").then((data)=>{
				this.navList=data.data
			})
			new Swiper(".swiper-container.banner",{
			    autoplay:2000,
			    loop:true,
			    pagination:".swiper-pagination"

			  })
			
		},
		methods:{
			searchFn(){
				this.$router.push("/search")
				//console.log(this.goodsData)
			},
			add:function(i){
				this.$store.commit("shopcarListData",i)
			
			},
			detail(i){
				this.$router.push("/shopdetail/"+i.goods_id)
				// //console.log(i)
				// console.log(this.$store.state.shopcarArr)
				//  //this.$store.state.shopcarArr.push(i)
				// // console.log(this.$store.state.shopcarArr.length)
				
			},
			preferential:function(id){
				 this.id=id;
				this.$router.push("/preferential/"+this.id)
			},
			more:function(){
				this.$router.push("/preferential/1")
			},
			scroller:function(){
				var docHeight=document.querySelector(".container").offsetHeight;
				var cHeight=document.querySelector(".main").offsetHeight
				var scrollTop=document.querySelector(".main").scrollTop
				// console.log(docHeight)
				// console.log(cHeight)
				// console.log(scrollTop)
				//console.log(docHeight-(cHeight+scrollTop))
				if(docHeight-(cHeight+scrollTop)<30){
					if(this.num<7){
						this.num++
						var con=this.num
						this.$http.get(`../../static/data/data${this.num}.json`).then((data)=>{
							//console.log(data.data.data.data)
			        		this.$store.dispatch("goodsData",data.data.data)
			        		this.num=con
			   			 })

					}
					this.num=8
				}

			}
		}
	}
</script>
<style lang="scss" scoped>
  .wrapBox{
  width:100%;
  height:100%;
  display:flex;
  -webkit-flex-direction:column;
  .header{
    width:100%;
    height:1rem;
    padding:0 .2rem;
    background: #fff;

    ul{
      display:flex;
      -webkit-justify-content:space-between;
      .first{
        -webkit-flex:1.5;
        height:1rem;
        position: relative;
        img{
          width:1.1rem;
          height:.4rem;
          position: absolute;
          top:.3rem;
        }
      }
      .third{
        -webkit-flex:2;
        display:flex;
        -webkit-flex-direction:column;
        text-align: center;
        font-size:12px;
        color:#fd4848;
        margin-top:.2rem;
        img{
          width:.46rem;
          height:.42rem;
          margin:0 auto;


        }
      }
      .second{
        -webkit-flex:6.5;
        height:.7rem;
        margin:0 0 0 .3rem;
        background:#f5f5f5;
        margin-top:.15rem;
        border-radius: 5px;
        display:flex;
        position: relative;
        .fa{
          font-size:.36rem;
          color:#ccc;
          position: absolute;
          top:.2rem;
          left:.3rem;
        }
        input{
          outline:none;
          border:0;
          background:none;
          position: absolute;
          top:.2rem;
          left:.7rem;
        }
      }
    }
  }
}


.main{
	width:100%;
	height:100%;
	-webkit-flex:1;
	overflow: auto;
}
.container{
	width:100%;
	height:auto;
}
 

	.banner{
	width:100%;
	height:3.54rem;
	/*border-bottom:.16rem solid #f5f5f5;*/
	background:#fff;
	img{
		width:100%;
		height:100%;
	}
}
.navBox{
	width:100%;
	background:#fff;
	padding-bottom: .2rem;
	ul{
		display:flex;
		flex-flow:wrap;
		-webkit-justify-content:space-between;
		li{
			/*-webkit-flex:1;*/
			width:25%;
			margin-top:.2rem;
			color:#666;
			text-align: center;
			font-size:.26rem;
			line-height:.5rem;
			span{
				padding-top:.2rem;
			}

			p{
				width: .9rem;
			    height: .9rem;
			    line-height: .9rem;
			    text-align: center;
			    margin: auto;
			    border-radius: 50%;
			    img{
			    	width:100%;
			    	height:100%;
			    }
			}
		}
	}

}
.dongtai{
		width:100%;
		
		height:.96rem;
		background: #fff;
		display:flex;
		padding:0 .3rem;
		
		span{
			-webkit-flex:1;
			color:#ff6d00;;
			font-size:15px;
			font-weight:bold;
		}
		.conBox{
			-webkit-flex:7;
			height:.84rem;
			border:1px solid #ccc;
			border-radius: 10px;
			margin-left:.2rem;
			font-size: .26rem;
			color:#666;
			padding: .05rem .2rem;
			overflow: hidden;
		}
	}

	.tehui{
		padding:0 .3rem;
		display:flex;
		height:.8rem;
		background:#fff;
		-webkit-justify-content:space-between;
		margin-top:.1rem;
		line-height:.8rem;
		.p1{
			display:flex;
		}
			img{
				width:.4rem;
				height:.4rem;
				margin-top:.2rem;
				margin-right:.2rem;
			}
	
		.more{
			display:flex;
			a{
			font-size:.24rem;
			color:#666;
			text-decoration: none;
			}
		} 

		
	}

	.foodBox1{
		width:100%;
		display:flex;
		height:4rem;
		margin-top:.15rem;
		.left{
			-webkit-flex:1;
			padding:0 .05rem 0 0;
			background:url(../assets/img/home1.png)no-repeat;
			background-size: 100% 100%;
		}
		.right{
			-webkit-flex:1;
			display:flex;
			padding:0 0 0 .1rem;
			-webkit-flex-direction:column;
			-webkit-justify-content:space-between;
			.top{
				height:2rem;
				background:url(../assets/img/ruwei.png)no-repeat;
				background-size: 100% 100%;
			}
			.bot{
				height:2rem;
				background:url(../assets/img/gaodian.png)no-repeat;
				background-size: 100% 100%;
				margin:.1rem 0 0 0;
			}
		}
		
	}


	.lists{
		width:100%;
		margin-top:.15rem;
		.task{
			display:flex;
			height:.8rem;
			padding:0 .2rem;
			background: #fff;
			margin-bottom:.15rem;
			.p2{
				-webkit-flex:2;
			}
			.p1{
				-webkit-flex:7;
				line-height:.8rem;
				color:#ff6d00;
				font-size:.32rem;
				display:flex;
				img{
				width:.4rem;
				height:.4rem;
				margin-top:.23rem;
				
				}
				label{
					display:flex;
					line-height:.8rem;
				}
				.line{
					width:20%;
					height: .04rem;
					background: #ff6d00;
					display: inline-block;
					margin-top:.4rem;
				}
			}
			.more{
				/*-webkit-flex:1;*/
				display:flex;
				line-height:.8rem;

			a{
			font-size:.24rem;
			color:#666;
			text-decoration: none;
			
				}
			} 
		}
	}


	.list1{
		width:100%;
		
		.listBox{
			width:100%;
			display:flex;
			flex-flow:wrap;
			dl{
				width:50%;
				background: #fff;
				border-bottom: 3px solid #eee;
				&:nth-of-type(2n){
					border-left:1.5px solid #eee;
				};
				&:nth-of-type(2n+1){
					border-right:1.5px solid #eee;
				};
				/*margin:0 .1rem .1rem 0;*/
				dt{
					width:100%;
					img{
						width:100%;
						height: 3.69rem;
					}
				}
				dd{
					padding:.12rem .14rem;
					display:flex;
					height:1.8rem;
					-webkit-flex-direction:column;
					-webkit-justify-content:space-between;
					.one{
						font-size:.23rem;
						color:#666;
					}
					.two{
						display:flex;
						padding:.15rem 0;
						-webkit-justify-content:space-between;
						font-size:.3rem;
						color:#fd4848;
						font-weight: bold;
						position: relative;
						.shopCar{
							width:.3rem;
							height:.3rem;
							display: inline-block;
							border-radius: 100%;
							background:#fd4848;
							position: absolute;
							right:-.03rem;
							top:0rem;
							color:#fff;
							text-align: center;
							line-height:.3rem;
						}
						img{
							width:.5rem;
							height:.4rem;
							z-index:111;

						}
					}
				}
			}
		}
	}

</style>	