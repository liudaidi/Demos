<template>
	<div class="wrap">
		<header class="header">
			<span @click=go()><</span>
			<span class="s2">天天特惠</span>
			<span><img src="../assets/detailImg/index.png" alt=""></span>
		</header>
		<div class="main">
			<nav class="nav">
				<span @click=tab(1) :class="{'bg':ind==1}">家乡美味</span>
				<span @click=tab(2) :class="{'bg':ind==2}">特产卤味</span>
				<span @click=tab(3) :class="{'bg':ind==3}">特产糕点</span>
			</nav>
			<div class="banner">
				<img src="../assets/tehuiImg/banner.png" alt="">
			</div>
			<div class="con">
				<dl v-for="i in this.everyArr" @click=buy(i)>
					<dt>
						<img :src="i.obj_data" alt="">
					</dt>
					<dd>
						<div class="describe">{{i.goods_name}}</div>
						<div class="bot">
							<p><span class="now">￥{{i.discount_price}}</span><span class="old">￥{{i.market_price}}</span></p>
							<p class="buy">立即购买</p>
						</div>
					</dd>
				</dl>
			</div>
		</div>	
	</div>
</template>
<script>
	export default{
		name:"preferential",
		data(){
			return{
				preferentialArr:[],
				everyArr:[],
				ind:this.$route.params.id
			}
		},
		mounted:function(){

			this.$http.get("../../static/data/tehui.json").then((data)=>{
        		//console.log(data.data)
        		this.$store.dispatch("tabArr",data.data)
        		this.preferentialArr=data.data
        		this.preferentialArr.forEach((i,v)=>{
				//console.log(i.pid)
				if(this.$route.params.id==i.pid){
					this.everyArr.push(i)
					}
				})

   			 })


		},
		methods:{
			go:function(){
				this.$router.push("/home")
			},
			tab:function(i){
				this.everyArr=[]
				this.ind=i;
				this.preferentialArr.forEach((i,v)=>{
					if(this.ind==i.pid){
						this.everyArr.push(i)
						
					}
				})
		
			},
			buy:function(i){
				//console.log(i)
				//console.log(i.goods_id)
				this.$router.push("/tabdetail/"+i.goods_id)
				
			}

		}

	}
</script>
<style lang="scss" scoped>
	.wrap{
		width:100%;
		height:100%;
		display:flex;
		background:#F3F3F3;
		flex-direction:column;
		.header{
			height:1rem;
			background:#fff;
			border-bottom: 1px solid #D1D1D1;
			display:flex;
			-webkit-justify-content:space-between;
			line-height:1rem;
			padding-left:.15rem;
			span{
				-webkit-flex:1;
				font-size:.3rem;
				color:#7F7F7F;

			}
			.s2{
				
				text-align: center;
			}
			img{
				width:.8rem;
				height:.8rem;
				position:fixed;
				right:.15rem;
				top:.1rem;
			}
		}
	}


	.main{
		width:100%;
		height:100%;
		background:#fff;
		flex:1;
		overflow: auto;
		.nav{
		    width: 100%;
		    height: 1.1rem;
		    line-height: 1.1rem;
		    background: #ff1945;
		    display:flex;
		    span{
				flex:1;
				color:#fff;
				font-size:.32rem;
				text-align: center;
		    }
		}
		.banner{
			width: 100%;
			height:2.6rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.con{
			width:100%;
			dl{
				display:flex;
				width:94%;
				height: 2.74rem;
				margin-left:3%;
				padding:.2rem;
    			border-bottom: 1px solid #e5e5e5;
				dt{
					flex:2;
					height:100%;
					img{
						width:100%;
						height:100%;
					}
				}
				dd{
					flex:5;
					margin-left:.2rem;
					font-size:.3rem;
					display:flex;
					flex-direction:column;
					justify-content:space-between;
					.describe{
						font-size:.28rem;
						color: #333;
					    overflow: hidden;
					    text-overflow: ellipsis;
					 
					}
					.bot{
						display:flex;
						justify-content:space-between;
						.buy{
							background: #FC4141;
							color:#fff;
							padding:.24rem .5rem;
							border-radius:30px;
						}
						p:first-child{
							display:flex;
							flex-direction:column;
							.now{
								font-size: .34rem;
							    font-weight: bold;
							    color: #FC4141;
							}
							.old{
								font-size: .24rem;
							    color: #999;
							    text-decoration: line-through;
							}
						}
					}

				}
			}
		}
	}

	.bg{
		background:#ff4669;
	}
</style>	