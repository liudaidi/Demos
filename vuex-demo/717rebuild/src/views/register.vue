<template>
	<div class="wrap">
		<header class="header">
			<span @click=go()><</span>
			<span>注册会员</span>
			<span class="loginnode" @click=login>登录</span>
		</header>
		<div class="main">
		<div class="register">
			<ul>
				<li><img src="../assets/registerImg/number.png" alt=""><input type="tel" placeholder="请输入您的手机号" v-model=tel></li>
				<li><img src="../assets/registerImg/safe.png" alt=""><input type="text" placeholder="请输入验证码" v-model=code><button @click=getCode()>{{Code}}</button></li>
				<li><img src="../assets/registerImg/password.png" alt=""><input type="password" placeholder="请输入您的密码" v-model=pwd></li>
			</ul>
		</div>
		<p class="info" v-if=showInfo>填写信息不完整</p>
		<p class="info" v-if=Success>注册成功</p>
		<p class="sure" @click=sure()>确定</p>
		
	</div>
	</div>
</template>
<script>
	export default{
		name:"register",
		data(){
			return{
				tel:"",
				code:"",
				pwd:"",
				showInfo:false,
				Success:false,
				Code:"获取验证码"
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
			go:function(){
				window.history.go(-1)
			},
			login:function(){
				this.$router.push("/login")
			},
			getCode:function(){
				let second=60
				var timer=setInterval(()=>{
					second--
					this.Code=second+'秒后获取'
					if(second==0){
						second=60
						clearInterval(timer)
						this.Code="获取验证码"
					}
				},1000)
			},
			save_register_local:function(){
				let ls=localStorage
				if(ls){
					ls.setItem("register_info",JSON.stringify(this.$store.state.registerInfo))
				}

			},
			sure:function(){

				if(this.tel=="" || this.pwd=="" ){
					this.showInfo=true
					setTimeout(()=>{
						this.showInfo=false
					},1000)
				}else{
					let registeruserInfo={
						tel:this.tel,
						pwd:this.pwd,
					}
					this.Success=true
					//console.log(userInfo)
					this.$store.commit("register",registeruserInfo)
					this.save_register_local()
					setTimeout(()=>{
						//this.$router.push("/home")
						this.Success=false
					},1000)
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
			    margin-top: .3rem;
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
				width:30%;
				border:1px solid #fb6f70;
				color:#fb6f70;
				/*padding:.1rem .3rem;*/
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