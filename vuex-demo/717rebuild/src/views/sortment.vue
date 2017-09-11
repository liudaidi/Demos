<template>
	<div class="sortBox">
	<header class="header">
        <ul>
            <li>
                <p>
                    <img src="../assets/img/serach.png" alt="">
                    <input type="text" placeholder="请输入你要购买的商品" @focus=searchFn()>
                </p>
            </li>
        </ul>
    </header>
	 <div class="mainBox">

        <div class="left">
            <ul>
                <li v-for="(i,index) in sortList" 
                @click="qiehuanFn(index)"
                :class="{'active':Color==index}"
                 >
                    <span>{{i.cate_name}}</span>
                </li>
            
            </ul>
        </div>
        <div class="right">
            <dl v-for="y in picList">
                <dt><img :src=y.cate_icon alt=""></dt>
                <dd>{{y.cate_name}}</dd>
            </dl>
            

        </div>
    </div>
    </div>
</template>
<script>
export default {
 	name:"sortment",
    data(){
        return{
            sortList:[],
            picList:[{"cate_id":52,"cate_name":"东南","cate_icon":".\/src\/assets\/sortmentImg\/jia3@2x.png","parent_id":2},{"cate_id":51,"cate_name":"西北","cate_icon":".\/src\/assets\/sortmentImg\/jia2@2x.png","parent_id":2},{"cate_id":50,"cate_name":"东北","cate_icon":".\/src\/assets\/sortmentImg\/jia1@2x.png","parent_id":2},{"cate_id":53,"cate_name":"西南","cate_icon":".\/src\/assets\/sortmentImg\/jia4@2x.png","parent_id":2},{"cate_id":54,"cate_name":"中原","cate_icon":".\/src\/assets\/sortmentImg\/jia5@2x.png","parent_id":2}],
            Color:0,
            
        }
    },
    mounted:function(){
    this.$http.get("../../static/data/paging.json").then((data)=>{
        //console.log(data.data.data)
        this.sortList=data.data.data
        console.log(this.sortList)

    })
 },
    methods:{
            searchFn(){
                this.$router.push("/search")
            },
           qiehuanFn(i){
            //console.log(i)
               console.log(this.sortList[i].list) 
               this.picList=this.sortList[i].list
               this.Color=i
            }, 
        }
}
</script>

<style lang="scss" scoped>
.sortBox{
	overflow: hidden;
    width:100%;
    height:100%;
    display:flex;
    -webkit-flex-direction:column;
}
.header{
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #ccc;
    background:#fff;
    padding:0 .3rem;
}
header ul{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
}
header ul li{
    flex:1;
    height: 100%;
    padding: .2rem .4rem;
}
header ul li p{
    width: 100%;
    height: 100%;
    display:flex;

}
header ul li p img{
    position: absolute;
    width: .26rem;
    height: .3rem;
    left:.8rem;
    top:.35rem;
}
header ul li p input{
    width: 100%;
    text-indent: .8rem;
    border: 0;
    outline: none;
    line-height:.6rem;
    background: #f5f5f5;
    border-radius:10px;
}
.mainBox{
	width:100%;
	height:100%;
	display:flex;
	background:#fff;
	-webkit-flex:1;
	overflow: hidden;
	border-top:1px solid #eee;
}
	.left{
    height: 100%;
    flex:3;
}
.left ul{
    height: 100%;
    width: 100%;
    background: #f0eced;
}
.left ul li{
    font-size:.28rem;
    height: .88rem;
    width: 100%;
    line-height:.88rem;
    text-align: center;
    font-weight: 500;
}
.active{
    width: 100%;
   height: .88rem;
    background:#fff;
    position: relative;
    color:red;
}
.active::after{
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    background: red;
    left: 0;
    top: 0;
}
.right{
    flex:7;
    width: 100%;
    background:#fff;
}
.right dl{
    float: left;
    width: 30%;
    height:2.5rem;
    margin-left: .1rem;
    margin-top: .13rem;
    background: #f7f7f7;
}
.right dl dt{
    width: 1.4rem;
    height: 1.4rem;
    margin-top: .06rem;
    margin-left: .06rem;

}
.right dl dd{
    font-size:.3rem;
    margin-top: .2rem;
    color:#909090;
    overflow: hidden;
    text-align: center;
}
.right dl dt img{
    width: 100%;
}
</style>