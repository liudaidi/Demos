<template>
  <div class="wrap">
   
    <router-view></router-view>
    <footer class="footer">
      <ul>
        <li>
          <router-link to="/home" class="route">
            <img src="./assets/img/home.png" alt="" class="img1">
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/sortment" class="route">
            <img src="./assets/img/classfiny.png" alt="" class="img2">
            <span>分类</span>
          </router-link to="/">
        </li>
        <li>
          <router-link to="/community" class="route">
            <img src="./assets/img/inter.png" alt="" class="img3">
          </router-link>
        </li>
        <li class="lis3">
          <router-link to="/shopCar" class="route">
            <span class="shopCar">{{$store.state.shopNum}}</span>
            <img src="./assets/img/shop1.png" alt="" class="img4">
            <span>购物车</span>
          </router-link></li>
        <li>
            <router-link to="/login" class="route">
            <img src="./assets/img/my.png" alt="" class="img5">
            <span>我的</span>
          </router-link>
       </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       
    }
  },
  mounted(){
    if(localStorage.getItem("shopcarArr")){
       
        this.$store.state.shopNum=JSON.parse(localStorage.getItem("shopcarArr")).length
      }
  }
}
</script>

<style lang="scss" scoped>

  .wrap{
  width:100%;
  height:100%;
  display:flex;
  -webkit-flex-direction:column;
  overflow: hidden;
  .header{
    width:100%;
    height:1rem;
    padding:0 .2rem;
    background: #fff;

    ul{
      display:flex;
      -webkit-justify-content:space-between;
      .first{
        -webkit-flex:1.5;
        height:1rem;
        position: relative;
        img{
          width:1.1rem;
          height:.4rem;
          position: absolute;
          top:.3rem;
        }
      }
      .third{
        -webkit-flex:2;
        display:flex;
        -webkit-flex-direction:column;
        text-align: center;
        font-size:12px;
        color:#fd4848;
        margin-top:.2rem;
        img{
          width:.46rem;
          height:.42rem;
          margin:0 auto;


        }
      }
      .second{
        -webkit-flex:6.5;
        height:.7rem;
        margin:0 0 0 .3rem;
        background:#f5f5f5;
        margin-top:.15rem;
        border-radius: 5px;
        display:flex;
        position: relative;
        .fa{
          font-size:.36rem;
          color:#ccc;
          position: absolute;
          top:.2rem;
          left:.3rem;
        }
        input{
          outline:none;
          border:0;
          background:none;
          position: absolute;
          top:.2rem;
          left:.7rem;
        }
      }
    }
  }
}



.footer{
    width:100%;
    height:1rem;
    background: #fff;
    ul{
      display:flex;
      margin-top:.1rem;
      .lis3{
        position: relative;
        .shopCar{
              width:.3rem;
              height:.3rem;
              display: inline-block;
              border-radius: 100%;
              background:#fd4848;
              position: absolute;
              right:.2rem;
              top:0rem;
              color:#fff;
              text-align: center;
              line-height:.3rem;
            }
      }
      li{
        -webkit-flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:.3rem;
        .router-link-active{
          color:#fc4141;
        }
        .route{
           display:flex;
           text-decoration: none;
          -webkit-flex-direction:column;
          -webkit-justify-content:space-between; 
        font-size:.24rem;
        text-align: center;
        line-height:.5rem;
        }
       
       
        .fa{
          font-size:.6rem;
        }
        .img1{
          width:24px;
          height:22px;
          margin:0 auto;
        }
        .img2{
          width:19px;
          height:20px;
          margin:0 auto;
        }
        .img3{
          width:45px;
          height:45px;
          margin:0 auto;
        }
        .img4{
          width:23px;
          height:20px;
          margin:0 auto;
        }
        .img5{
          width:18px;
          height:20px;
          margin:0 auto;
        }
      }
    }
  }
</style>
