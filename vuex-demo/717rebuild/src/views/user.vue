<template>
	<div class="wrap">
		<header class="header">
			<span @click=go()><</span>
			<span class="s2">收货人</span>
			<span><img src="../assets/detailImg/index.png" alt=""></span>
		</header>
		<div class="main">
			<p><input type="text" placeholder="收货人姓名" v-model=name></p>
			<p><input type="tel" placeholder="手机号" v-model=tel></p>
			<div class="choosecity">
				<select name="" id="sel1" v-model="province" @change="select_p(province)">
					<option value="">请选择省</option>
					<option :value="p.name" v-for="p in province_list">{{p.name}}</option>
				</select>
				<select name="" id="sel2" v-model="city" @change="select_c(city)">
					<option value="">请选择市</option>
					<option :value="c.name" v-for="c in city_list">{{c.name}}</option>
				</select>
			</div>
			<p style="margin-top:.8rem" class="qu">
				<select name="" id="sel3" v-model="region" @change="select_r(region)">
					<option value="">请选择区</option>
					<option :value="r" v-for="r in region_list">{{r}}</option>
				</select>
			</p>
			<p><input type="text" placeholder="详细地址" v-model="detail_address"></p>
			<div class="tip"><span @click=check(index) :class="{'bg':is_default}"></span>设为默认地址</div>
			<p class="info" v-if=showInfo>填写信息不完整</p>
			<p class="info" v-if=showSuccess>保存地址成功</p>
			<button class="save" @click=save()>保存</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:"user",
		data(){
			return{
				bg:false,
				province_list:[],
				city_list:[],
				region_list:[],
				province:'',
				city:'',
				region:'',
				name:'',
				tel:"",
				detail_address:"",
				showInfo:false,
				showSuccess:false,
				editArr:[],
				is_default:true,
				nav_dom:''
			}
		},
		mounted:function(){
			// console.log(this.$route.params)
			// console.log(this.$store.state.address_info[this.$route.params.index])
			let edit_address=this.$store.state.address_info[this.$route.params.index]
			//console.log(edit_address)
			if(!edit_address){
				return
			}
			
			this.name=edit_address.name
			this.tel=edit_address.tel
			this.province=edit_address.province
			this.city=edit_address.city
			this.region=edit_address.region
			this.detail_address=edit_address.detail_address
			this.nav_dom=document.querySelector(".footer")
			console.log(this.nav_dom)
			this.nav_dom.style.display="none"
			//console.log(this.address_list)
		},
		methods:{
			go:function(){
				this.$router.go(-1)
			},
			check:function(){
				this.bg=!this.bg
			},
			select_p:function(p){
				//console.log(p)
				this.province_list.forEach((i,v)=>{
					if(i.name==p){
						this.city_list=i.city
					}
				})

			},
			select_c:function(c){
				//console.log(c)
				this.city_list.forEach((i,v)=>{
					//console.log(i)
					if(i.name==c){
						this.region_list=i.area
						//console.log(this.region_list)
					}
				})
			},
			select_r:function(r){
				//console.log(r)
				this.region=r
			},
			save_address_local:function(){
				let ls=localStorage
				if(ls){
					ls.setItem("address_info",JSON.stringify(this.$store.state.address_info))
				}
			},
			save:function(){
				let idx=this.$route.params.index;
				let info={
					name:this.name,
					tel:this.tel,
					province:this.province,
					city:this.city,
					region:this.region,
					detail_address:this.detail_address,
					is_default:this.is_default
				}
				
				if(this.name && this.tel && this.province && this.city && this.region && this.detail_address){
					if(idx=="new"){
						this.$store.commit("add_address_info",info)
						this.$store.commit("reset_default",0)
					}else{
						this.$store.commit("edit_address_info",[info,idx])	
						if(this.is_default){
							this.$store.commit("reset_default",idx)
						}		
					}
					this.showSuccess=true
							setTimeout(()=>{
								this.$router.push("/pay")
							},2000)
					this.save_address_local()
					
				}else{
					this.showInfo=true
					setTimeout(()=>{
						this.showInfo=false
					},1500)
				}

			}

		},
		created:function(){
			this.$http.get("../../static/data/address.json").then((data)=>{
				//console.log(data.data.data)
				this.province_list=data.data.data
			})
		},
		destroy:function(){
			this.nav_dom.style.display="block"
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
			flex-shrink:0;
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
		
		.main{
			width:100%;
			-webkit-flex:1;
			overflow: auto;
			padding:0 .3rem;
			.info{
				width:60%;
				height:.7rem;
				background:rgba(0,0,0,.6);
				font-size:.26rem;
				color:#fff;
				line-height:.7rem;
				text-align: center;
				border-radius:30px;
				margin-top:.3rem;
				margin-left:20%;                           
			}
			.choosecity{
				height:1rem;
				
				select{
					width:46%;
					height:100%;
					text-indent: .3rem;
				}
				#sel2{
					margin-left:3%;
				}
			}
			p{
				width:100%;
				height:1rem;
				background:#fff;
				margin:.3rem 0 0 0;
				position: relative;
			}
			input{
				outline: none;
				border:0;
				font-size:.3rem;
				background: none;
				position:absolute;
				top:.35rem;
				left:.2rem;

			}
			select{
				outline: none;
				border:0;
				font-size:.3rem;
				/*background:none;*/

			}
			
		}
	}

	.qu{
		margin-top:.8rem;
		position: relative;
		#sel3{
			position: absolute;
			top:.3rem;
			left:.3rem;
		}
	}

	.tip{
		font-size:.3rem;
		 color:#B3B5B0;
		 margin-top:.6rem;
		span{
			 width: .48rem;
	        height: .48rem;
	        border-radius: 50%;
	        border: 1px solid #ccc; 
	        display: inline-block;
	       margin-right:.2rem;

		}
	}

	.save{
		width:60%;
		height:1rem;
		background:#FB4240;
		color:#fff;
		border-radius: 30px; 
		border:0;
		outline: none;
		margin:.3rem 20%;
	}

	.bg{
		background:orange;
	}
</style>