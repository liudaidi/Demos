<template>
	<div class="wrap">
		<header class="header">
			<span @click=go()><</span>
			<span class="s2">收货地址</span>
			<span><img src="../assets/detailImg/index.png" alt=""></span>
		</header>
		<div class="main">
			<div class="con" v-for="(i,index) in address_list">
				<div class="top">
					<h4>{{i.name}}<span>{{i.tel}}</span></h4>
					<p><span>{{i.province}}</span><span>{{i.city}}</span><span>{{i.region}}</span><span>{{i.detail_address}}</span></p>
				</div>
				<div class="bot">
					<p class="p1" @click=defaults(index)><span class="circle" :class="{'bg':i.is_default}"></span>设为默认</p>
					<p></p>
					<p class="p3">
						<img src="../assets/addressImg/edit.png" alt="">
						<span @click=edit(index)>编辑</span>
						<img src="../assets/addressImg/rem.png" alt="">
						<span @click=del(index)>删除</span>
					</p>
				</div>	
			</div>	
			<p @click="add_address()" class="add">
				<span class="s1">+</span>
				<span>新增加地址</span>
			</p>
		</div>
	</div>
	
</template>
<script>
import dialog from "../statics/js/popup.js"
	export default{
		name:"address",
		data(){
			return {
				flag:false,
				address_list:[]
			}
		},
		mounted:function(){
			if(localStorage.getItem("address_info")){
				this.$store.commit("add_address_info",JSON.parse(localStorage.getItem("address_info")))
			}
			
			this.address_list=this.$store.state.address_info
			this.nav_dom=document.querySelector(".footer")
			console.log(this.nav_dom)
			this.nav_dom.style.display="none"
			
		},
		methods:{
			add_address:function(){
				this.$router.push({
					name:"user",
					params:{
						index:"new"
					}
				})
			},
			destroy:function(){
			this.nav_dom.style.display="block"
			},
			defaults:function(i){
				//console.log(i)
				this.$store.commit("reset_default",i)
				this.save_address_local()
				setTimeout(()=>{
					this.$router.push("/pay")
				},1500)

				// this.$store.commit("default_address",this.$store.state.address_info[i])
				// localStorage.setItem("default_address",JSON.stringify(this.$store.state.default_address))
				//this.flag=!this.flag
			},
			save_address_local:function(){
				let ls=localStorage
				if(ls){
					ls.setItem("address_info",JSON.stringify(this.$store.state.address_info))
				}

			},
			go:function(){
				this.$router.push("/pay")
			},
			edit:function(i){

				console.log(i)
				// this.$router.push("/user")
				this.$router.push({
					name:"user",
					params:{
						index:i
					}
				})
				this.save_address_local()
			},
			del:function(i){
			  dialog.popup({
           	 	content:"您确认要删除这条地址吗？",
	        	judge:["确认","取消"],
	            callback:(flag)=>{
	            	if(flag){
	            		this.$store.commit("del_address",i)
						this.save_address_local()
	            		}
	            	}	
       			})
				

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
			flex-shrink:0;
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
		.main{
			width:100%;
			-webkit-flex:1;
			overflow: auto;
			font-size: .3rem;
			img{
				width:.35rem;
				height:.35rem;
			}
			.con{
				background:#fff;
				margin-bottom:.3rem;
				.bot{
					display:flex;
					/*justify-content:center;*/
					align-items:center;
					padding:.3rem .2rem;
					color:#666;
					.p3,.p1{
						display:flex;
						align-items:center;
					}
					.p3{
						flex:1.2;
						img{
							margin-left:.2rem;
						}
						span{
							margin-left:.1rem;
						}
					}
					p{
						flex:1;
					}

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
						span{
							font-size:.3rem;
							color:#666;
							margin-left:.3rem;
							
						}
					}
				}
			}
			.circle{
				 width: .48rem;
		        height: .48rem;
		        border-radius: 50%;
		        border: 1px solid #ccc; 
		        display: inline-block;
		       	margin-right:.2rem;
			}
			.add{
				width:60%;
				height:1rem;
				font-size:.3rem;
				display:flex;
				justify-content:center;
				align-items:center;
				color:#fff;
				line-height:1rem;
				border-radius: 30px;
				background:#FB4240;
				text-align: center;
				margin:.6rem 20%;
				.s1{
					font-size:.5rem;
				}
			}
		}
	}

	.bg{
		background:orange;
	}
</style>