<template>
    <div>
        <h3>{{$store.state.obj[1].title}}</h3>
          <div class='top'>
            <img src="../assets/1.png" alt="" class='img1'>
          </div>
          <ol>
            <li v-for='(x,index) in $store.state.obj[1].list'  @click='check(index)'>{{x}}<span v-bind:class='{radius:index==$store.state.qwer2}'><b></b></span></li>           
           
          </ol>
        <div class="imgs">
          <div class="img-top">
              <img src="../assets/2.png" alt="" class='cat'>
              <img src="../assets/5.png" alt="" class='img2'> 
              <img src="../assets/7.png" alt="" class='img3' @click='on'>
          </div>       
        </div>
        </div>
</template>
<script>
   export default { 
      data(){
        return{
          ind:-1
        }
      },
      methods:{
          check:function (index){
           this.$store.state.qwer2 = index
            this.ind=index;
          },
          on:function(){
            //console.log(2)
            if(this.ind!=-1){
                this.$router.push({path:'/three'})
              }else{
                alert('您还没有选择')
              }
          }
      }
    }
</script>
<style>
    .content{
        flex:1;
        padding: 20px;
        box-sizing: border-box;
        overflow-y:scroll;
        background: url(../assets/back.jpg) no-repeat;
        background-size: 100% 100%;
      }
      .content h3{
        font-family: DFPHaiBaoW12;
        font-size: 16px;
      }
      .content .top{
          width:286px;    
          margin:0 auto;     
          box-sizing:border-box;
          margin-top:20px;
          padding-left:10px;
          padding-right:10px;
         
      }
      .content .top img{
        width:100%;
        height:100%;
      }
       .content ol{
        width:100%;
        height:40px;
        margin:0 auto;
        display:flex;
        justify-content:space-around;
      }
      .content ol li{
        text-align:center;
        width:50%;
        line-height: 40px;

        font-size: 14px;
        font-family: DFPHaiBaoW12;
       
      }
      .content ol .radius{
          display: inline-block;
          width:20px;
          height: 20px;
          border-radius: 50%;
          border:1px solid #000;
          position: relative;
          margin-left: 15px;
      }
  .radius b{
      position: absolute;
      left: 0px;
      top:8px;
     }
    .radius b:after{
      content: "";
      position: absolute;
      width: 7px;
      height: 3px;
      border-radius: 4px;
      background: #000;
      transform:rotate(37deg);
    }
     .radius b:before{
      content: "";
      position: absolute;
      width: 14px;
      height: 3px;
      border-radius: 4px;
      background: #000;
      transform:translateX(5px) rotate(-37deg);
    }
        .active{
          color: red;
        }
       .radius{
        background: #ff4856;
        color: #000;
      }
      .imgs{
        position: absolute;
        bottom: 10px;
        height: auto;
        left: 50%;
        margin-left: -160px;
      }
       .imgs div{
        width: 300px;
        height: 200px;
        margin:0 auto;
        position: relative;
      }
      .imgs img{
        width: 100px;
        height:auto;
      }
       .imgs .img3{
        width: 230px;
        height:auto;
        position: absolute;
        bottom: 48px;
        left: 50%;
        right: 50%;
        margin-left: -100px;
      }



      .imgs .cat{
        position: absolute;
        left: 50%;
        right: 50%;
        margin-left:-35%;
        margin-top: 58px;
      }

      .imgs .img2{
        position: absolute;
        right: 15px;
        top: 25px;
      }
</style>