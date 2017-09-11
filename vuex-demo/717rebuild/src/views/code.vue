<template>
	<div class="wrap">
			<header class="header">
				<p class="s1" @click=go()><</p>
				<span class="s2">我的二维码</span>
			</header>
			<div class="main">
				<div class="code">
					<p class="p1"><img src="../assets/myImg/tou.png" alt=""><span>18435762633</span></p>
					<p class="p2">
						<img src="../assets/codeImg/codes.png" alt="">
					</p>
				</div>
			</div>
	</div>
</template>
<script>
	export default{
		name:"code",
		methods:{
			go:function(){
				this.$router.push("/config")
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
		flex:1;
		background:rgba(0,0,0,.9);
		.code{
			background:#fff;
			width:90%;
			height:7rem;
			margin:1.6rem 5%;
			border-radius: 10px;
			.p2{
				width:60%;
				margin:.3rem 20%;
				height:4.48rem;
				img{
					width:100%;
					height:100%;
				}
			}
			.p1{
				display:flex;
				height:1.3rem;
				margin-left:.2rem;
				span{
					line-height:1.3rem;
				}
				img{
					width:1.28rem;
					height:1.3rem;
				}
			}
		}
	}
</style>