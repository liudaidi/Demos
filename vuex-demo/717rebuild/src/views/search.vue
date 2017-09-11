<template>
	<div class="searchBox">
		<header class="header">
			<div class="search">
				<i class="fa fa-search"></i>
				<input type="text" placeholder="请输入您要购买的商品" v-model="txt">
			</div>
			<span @click=result()>搜索</span>
		</header>
		<div class="main">
			<div class="con">
				<div class="now"><p>最近搜索</p><img src="../assets/img/remo.png" alt="" @click=del()></div>
				<div class="resultBox">
					<p class="result" v-if="arr==''">{{arr==''?'暂无搜索结果...':''}}</p>
					<ul>
						<li v-for="i in arr" v-if="arr!=''"><span>{{i}}</span></li>
					</ul>
				</div>
			</div>
			<div class="history">
				<p>大家都在搜</p>
				<ul>
					<li><span>粽子</span></li>
					<li><span>锅巴</span></li>
					<li><span>酱</span></li>
					<li><span>小吃</span></li>
					<li><span>零食</span></li>
					<li><span>干果</span></li>
					<li><span>特产</span></li>
					<li><span>油</span></li>
					<li><span>大米</span></li>
					<li><span>面粉</span></li>
					
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"search",
		data(){
			return{
				txt:"",
				arr:[],
				show:false
			}
		},
		methods:{
			result:function(){
				if(window.localStorage.getItem("searchCon")){
					this.arr=window.localStorage.getItem("searchCon").split(",")
				}
				if(this.txt){
					//console.log(this.txt)
					this.arr.push(this.txt)
					if(localStorage)localStorage.setItem("searchCon",this.arr)
					this.$router.push("/run")
				}

			},
			del(){
				localStorage.setItem("searchCon","")
				this.arr=window.localStorage.getItem("searchCon").split(",")
				this.arr=[]
			}
			
		},
		created(){
				if(window.localStorage.getItem("searchCon")){
					this.arr=window.localStorage.getItem("searchCon").split(",")
				}
		}

		
	}
</script>
<style lang="scss" scoped>
html,body{
	width:100%;
	height:100%;
}
	
	.searchBox{
		width:100%;
		height:100%;
		display:flex;
		-webkit-flex-direction:column;
		background: #fff;
		.header{
			width:100%;
			background: #fff;
			border-bottom: 1px solid #ccc;
			height:1rem;
			display:flex;
			font-size:.32rem;
			padding:0 .2rem;
			.search{
				-webkit-flex:8;
				text-indent: .3rem;
				height:.76rem;
				background:#f5f5f5;
				border-radius: 10px;
				margin-top:.07rem;
				line-height:.76rem;
				input{
					border:0;
					outline: none;
					background:none;
				}
			}
			span{
				-webkit-flex:1;
				line-height:1rem;
				text-align: right;

			}
		}
	}

	.now{
		width:100%;
		height: .95rem;
		display:flex;
		padding:0 .2rem;
		-webkit-justify-content:space-between;
		font-size: .32rem;
	    line-height: .95rem;
	    color: #666666;
	    img{
	    	width: .34rem;
    		height: .33rem;
    		margin-top:.3rem;
	    }
	   
	   
	   
	} 
	.resultBox{
	    	width:100%;
	    	padding:0 .4rem;
	    	/*height:1.8rem; */
	    	font-size:.32rem;
	    	color:#666;
	    	ul{
	    		display:flex;
	    		flex-flow:wrap;
	    		li{
	    			width:25%;
	    			span{
	    				border: 1px solid #ccc;
						color: #666666;
					    padding: .1rem .2rem;
					    font-size: .34rem;
					    border-radius: 5px;
					    display: inline-block;
					    margin-top:.3rem;
	    			}
	    		}
	    	}
	    }

	    .history{
	    	padding:0 .25rem;
	    	p{
	    		font-size: .32rem;
		    	line-height: .95rem;
		    	color: #666666;
	    	}
	    	width:100%;
	    	
	    	ul{
	    		display:flex;
	    		flex-flow:wrap;
	    		li{
	    			width:25%;
	    			span{
	    				border: 1px solid #ccc;
						color: #666666;
					    padding: .1rem .2rem;
					    font-size: .34rem;
					    border-radius: 5px;
					    display: inline-block;
	    			}
	    		}
	    	}
	    }
</style>