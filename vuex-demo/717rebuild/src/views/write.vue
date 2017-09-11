<template>
	<div class="wrap">
		<header class="header">
			<span><</span>
			<span class="s1">修改用户名</span>
			<span>确定</span>
		</header>
		<div class="main">
			<div class="box">
				<p><span>18435762633</span><span><img src=../assets/writeImg/bank_close.png alt=""></span></p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"write",

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
			width:100%;
			height:1rem;
			background:#fafafb;
			display:flex;
			padding:0 .3rem;
			justify-content:space-between;
			line-height:1rem;
			.s1{
				flex:1;
				text-align: center;

			}
		}
	}

	.main{
		width:100%;
		height:100%;
		flex:1;
		overflow:auto;
		margin-top:.2rem;
		.box{
			width:100%;
			height:1.2rem;
			background:#fff;
			padding:0 .3rem;
			p{
				display:flex;
				justify-content:space-between;
				align-items:center;
				line-height:1.2rem;
				img{
					width:.4rem;
					height:.4rem;
				}
			}
		}
	}
</style>