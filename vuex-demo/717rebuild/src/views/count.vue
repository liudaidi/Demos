<template>
	<div class="wrap">
		<header class="header">
			<span @click=go()><</span>
			<span class="s1">账户余额</span>
			<span>明细</span>
		</header>
		<div class="con">
				<p>账户余额</p>
				<h3>0.00</h3>
		</div>
		<div class="main">
			<div class="box">
				<p><img src="../assets/cashImg/charge.png" alt=""><span>充值</span></p>
				<p>></p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"count",
		methods:{
			go:function(){
				this.$router.push("/my")
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
		.header{
			width:100%;
			height:1rem;
			background:#439afd;
			display:flex;
			padding:0 .3rem;
			justify-content:space-between;
			line-height:1rem;
			color:#fff;
			span{
				font-size:.28rem;
			}
			.s1{
				flex:1;
				font-size:.32rem;
				text-align: center;

			}
		}
		.con{
			background:#439afd;
			color:#fff;
			padding:0 .3rem;
			padding-bottom:.3rem;
			p{
				font-size:.3rem;
				line-height:1rem;
			}

		}
	}
	.main{
		font-size:.3rem;
		.box{
			display:flex;
			padding:0 .3rem;
			justify-content:space-between;
			background:#fff;
			border-bottom:1px solid #ccc;
		}
		p{
			height:1.2rem;
			font-weight:bold;
			display:flex;
			line-height:1.2rem;
			align-items:center;
			img{
				width:.5rem;
				height:.6rem;
				margin-right:.2rem;
			}
		}
	}
</style>