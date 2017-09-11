<template>
	<div class="wrap">
		<header class="header">
			<p class="s1" @click=go()><</p>
			<span class="s2">设置</span>
			
		</header>
		<div class="main">
			<div class="box1">
				<p>我的头像</p>
				<p><img src="../assets/myImg/tou.png" alt=""><span>></span></p>
			</div>
			<div class="box2">
				<p>用户名</p>
				<p>{{login_list.tel}}<span>></span></p>
			</div>
			<div class="box3" @click=code()>
				<p>我的二维码名片</p>
				<p><img src="../assets/configImg/erma.png" alt="">></p>
			</div>
			<div class="box4" @click=write()>
				<p>修改手机号</p>
				<p>{{login_list.tel}}<span>></span></p>
			</div>
			<p class="exit" @click=Exit>退出登录</p>
		</div>
	</div>

</template>
<script>
import dialog from "../statics/js/popup.js"
	export default{
		name:"config",
		data(){
			return{
				login_list:[]
			}
		},
		mounted:function(){
		    if(localStorage.getItem("login_info")){
		        this.$store.commit("login",JSON.parse(localStorage.getItem("loginInfo"))) 
		      }
			   this.login_list=this.$store.state.loginInfo
			   console.log(this.login_list)
  			},
		methods:{
			go:function(){
				this.$router.push("/my")
			},
			write:function(){
				this.$router.push("/write")
			},
			code:function(){
				this.$router.push("/code")
			},
			Exit:function(){
			 dialog.popup({
           	 	content:"确定要退出登录吗？",
	        	judge:["确认","取消"],
	            callback:(flag)=>{
	            	if(flag){
	            		this.$store.loginInfo=""
	            		// this.saveUser.forEach(function(i,v){
	            		// 	console.log(i)
	            		// 	console.log(this.codes)

	            		// 	if(i.tel==this.codes){
	            		// 		this.saveUser.splice(i,1)
	            		// 	}
	            		// })
	            		this.$router.push("/login")
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
		flex-direction:column;
		font-size:.32rem;
		.header{
			display:flex;
			justify-content:space-between;
			height:1rem;
			background:#fafafb;
			font-size:.36rem;
			position: relative;
			.s1{
				position: absolute;
				left:.2rem;
				top:.3rem;
			}
			span{
				width:100%;
				color:#666;
				line-height:1rem;
				text-align: center;

			}
		}
	}

	.main{
		width:100%;
		height:100%;
		margin-top:.3rem;
		flex:1;
		overflow:auto;
		.box1,.box2,.box3,.box4{
			display:flex;
			background:#fff;
			padding:0 .2rem;
			justify-content:space-between;
		}
		.box1{
			height: 1.48rem;
		    border-bottom: 1px solid #e5e5e5;
		    background: #fff;
		    align-items:center;
		    line-height:1.48rem;
		    p:nth-child(2){
		    	display:flex;
		    };
			img{
				width: 1.24rem;
    			height: 1.24rem;
			}
		}
		.box2,.box4{
			height: 1.05rem;
		    border-bottom: 1px solid #e5e5e5;
		    line-height: 1.05rem;
		    align-items:center;
		}
		.box3{
			height: 1.05rem;
		    border-bottom: 1px solid #e5e5e5;
		    line-height: 1.05rem;
		    align-items:center;
		     p:nth-child(2){
		    	display:flex;
		    };
		    img{
		    	width: .4rem;
    			height: .4rem;
    			margin-top: .3rem;
    			margin-right:.2rem;
		    }
		}
	}

	.exit{
		width:70%;
		height:1.08rem;
	    text-align: center;
	    line-height: 1.08rem;
	    margin-top: 1.7rem;
	    margin-left: 15%;
	    background: #fc4141;
	    color: #fff;
	    font-size: .32rem;
	    border-radius: .5rem;
	}

</style>