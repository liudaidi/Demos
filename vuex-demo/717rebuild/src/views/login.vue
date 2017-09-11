<template>
	<div class="wrap">
		<header class="header">
			<span @click=go()><</span>
			<span>注册登录</span>
			<span class="loginnode" @click=register()>注册</span>
		</header>
		<div class="main">
		<div class="register">
			<ul>
				<li><img src="../assets/registerImg/number.png" alt=""><input type="text" placeholder="请输入您的手机号" v-model="tel"></li>
				<li><img src="../assets/registerImg/password.png" alt=""><input type="password" placeholder="请输入您的密码" v-model="pwd"></li>
			</ul>
		</div>
		<p class="info" v-if=showSuccess>登录成功</p>
		<p class="info" v-if=noCompelete>用户信息不完整</p>
		<p class="info" v-if=noExit>该帐号没有注册，请注册后在登录！</p>
		<p class="sure" @click=nowLogin()>立即登录</p>
	</div>
	</div>
</template>
<script>
	export default{
		name:"login",
		data(){
			return{
				noExit:false,
				noCompelete:false,
				showSuccess:false,
				tel:'',
				pwd:'',
				register_list:[],
				flag:false
			}
		},
		mounted:function(){
			if(localStorage.getItem("register_info")){
				this.$store.commit("register",JSON.parse(localStorage.getItem("register_info")))
			}

			this.register_list=this.$store.state.registerInfo
			console.log(this.register_list)
           
			
			
		},
		methods:{
			register:function(){
				this.$router.push("/register")
			},
			go:function(){
				window.history.go(-1)
			},
			save_login_local:function(){
				let ls=localStorage
				if(ls){
					ls.setItem("login_info",JSON.stringify(this.$store.state.loginInfo))
				}

			},
			nowLogin:function(){
				let num=0
			
				if(this.tel && this.pwd){
					let loginInfo={
						tel:this.tel,
						pwd:this.pwd
					}
					this.register_list.forEach((i,v)=>{
						//console.log(i)
						if(i.tel==this.tel && i.pwd==this.pwd){
							num++
							console.log(this.tel)
							console.log(this.pwd)
							if(num==1){
								// this.save_login_local()
								this.$store.commit("login",loginInfo)
								this.showSuccess=true
								this.flag=true
								setTimeout(()=>{
									this.$router.push("/my")
								},2000)
								console.log(333)
								return 
							}
							
						}else{
							this.flag=false	
							console.log(this.flag)
						}
					})
				}else{
					// this.noCompelete=true
					// setTimeout(()=>{
					// 	this.noCompelete=false
					// },1500)
				}
				if(!this.flag){
					this.noExit=true
					setTimeout(()=>{
						this.$router.push("/register")
					},1500)	
				}
			}

		}
	}
</script>
<style lang="scss" scoped>
*{
	margin:0;
	padding:0;
	box-sizing:border-box;
}
	.wrap{
		width:100%;
		
		height:100%;
		display:flex;
		flex-direction:column;
		.header{
			width:100%;
			background:#fafafb;
			padding:0 .2rem;
			line-height:1rem;
			height:1rem;
			display:flex;
			justify-content:space-between;
			font-size:.32rem;
			color:#666;
			.loginnode{
				color:#fb6f70;
				font-weight:bold;
			}
		}
		.main{
			width:100%;
			height:100%;
			flex:1;
			margin-top:.2rem;
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
			.sure{
				width:80%;
				line-height: 1.13rem;
			    text-align: center;
			    margin-left:10%;
			    margin-top: 1.1rem;
			    color: #fff;
			    font-size: .36rem;
			    background: #fc4141;
			    border-radius: 50px;
			}
		}
		.register{
			background:#fafafb;
			padding:0 .2rem;
			button{
				outline: none;
				background:none;
				height:.8rem;
				border:1px solid #fb6f70;
				color:#fb6f70;
				padding:.1rem .3rem;
				border-radius:30px;
			}
			input{
				border:0;
				outline:none;
				flex:1;
				margin-left:.2rem;
				height:1.18rem;
				border-bottom:1px solid #e5e5e5;
			}
			
			li{
				width:100%;
				display:flex;
				align-items:center;
				img{
					width: .45rem;
    				height: .49rem;
    				
				}
				
			}
		}
	}
</style>