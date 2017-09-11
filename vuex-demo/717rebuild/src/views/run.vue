<template>
    <div class="box">
        <header>
            <p @click=returns()><img src="../assets/runImg/return.png" alt=""></p>
            <p>
                <img src="../assets/runImg/serach.png" alt="">
                <input type="text">
            </p>
        </header>
        <nav>
            <p>综合 <span></span></p>
            <p>销量 <span></span></p>
            <p>价格 <span></span></p>
        </nav>
        <main>
            <ul>
                <li>
                    <img src="../assets/myImg/shop1.jpg" alt="">
                    <p>裕龙酒业原味稻2.5kg*2袋无常大米礼品装，稻花香2</p>
                    <p>
                        <span>￥110.00</span>
                        <img src="../assets/myImg/che.png" alt="">
                    </p>
                </li>
                <li>
                    <img src="../assets/myImg/shop2.jpg" alt="">
                    <p>福溶嘉 组合装礼盒（红花籽油+亚麻籽油） 1L*2建</p>
                    <p>
                        <span>￥398.00</span>
                        <img src="../assets/myImg/che.png" alt="">
                    </p>
                </li>
                <li>
                    <img src="../assets/myImg/shop3.jpg" alt="">
                    <p>好恰 山茶油礼盒2L*2、提</p>
                    <p>
                        <span>￥448.00</span>
                        <img src="../assets/myImg/che.png" alt="">
                    </p>
                </li>
                <li>
                    <img src="../assets/myImg/shop4.jpg" alt="">
                    <p>都市余味 红香妃葡萄干218g</p>
                    <p>
                        <span>￥25.90</span>
                        <img src="../assets/myImg/che.png" alt="">
                    </p>
                </li>
            </ul>
        </main>
    </div>
</template>
<script>
    export default{
        name:"run",
        data(){
            return{
                Con:[]
            }
        },
        methods:{
            returns:function(){
              
                if(localStorage){
                    let con=localStorage.getItem("searchCon")
                    
                    this.Con.push({con:con})
                    console.log(this.Con)  
                    this.$router.push("/search")
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .box{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        background: #eeeeee;
    }
    header{
        width:100%;
        height:1rem;
        background: #fff;
        border-bottom: 1px solid #ccc;
        display: flex;
    }
    header>p:first-child{
        width:10%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width:.5rem;
            height:.5rem;
        }
    }
    header>p:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width:90%;
        padding:0 5%;
        img{
            position: absolute;
            width:.4rem;
            height:.4rem;
            left:10%;
        }
        input{
            width:100%;
            height:80%;
            background: #f5f5f5;
            border:none;
            border-radius: .4rem;
            padding-left:.8rem;
            outline: none;
        }
    }
    nav{
        width:100%;
        height: .62rem;
        display: flex;
        background: #fff;
        border-bottom: 1px solid #f3f3f3;
        justify-content: space-between;
        p{
            width:15%;
            height:100%;
            color: #999;
            font-size: .24rem;
            position: relative;
            display:flex;
            justify-content: center;
            align-items: center;
            span{
                position: absolute;
                bottom:0;
                left:50%;
                margin-left:-3px;
                border:5px solid transparent;
                border-bottom-color:red;
            }
        }
    }
    main {
        width: 100%; margin-bottom:.8rem; }
    main ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between; }
    main ul li {
        width: 49%;
        display: flex;
        flex-direction: column;
        background: #fff;
        margin-bottom: 2%; }
    main ul li img {
        width: 3.6rem;
        height: 3.6rem; }
    main ul li p:nth-child(2) {
        width: 100%;
        font-size: 0.28rem;
        line-height: 0.35rem;
        height: .7rem;
        padding-left: 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis; }
    main ul li p:last-child {
        width: 100%;
        height: .7rem;
        display: flex;
        padding-left: .1rem;
        align-items: center;
        justify-content: space-between;
        padding-right: .3rem; }
    main ul li p:last-child span {
        font-size: 0.25rem;
        color: #fc4141; }
    main ul li p:last-child img {
        width: 0.65rem;
        height: 0.55rem; }
</style>
