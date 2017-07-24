<template>
    <div>
          <h3>{{$store.state.obj[3].title}}</h3>
          <ul class='ullist'>
            <li v-for='(x,index) in $store.state.obj[3].list' @click='checked(index)'>{{x}}<span v-bind:class='{radius:index==$store.state.qwer4}'><b></b></span></li>
          </ul>
        <div class="imgs">
          <div class="img-top">
              <img src="../assets/10.png" alt="" class='img1'>
              <img src="../assets/12.png" alt="" class='img2'> 
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
       checked:function(index){
            this.$store.state.qwer4 = index
            this.ind=index
        },
        on:function(){
            //console.log(2)
            if(this.ind!=-1){
                this.$router.push({path:'/five'})
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
        padding-top: 20px;
        box-sizing: border-box;
        overflow-y:scroll;
        background: url(../assets/back.jpg) no-repeat;
        background-size: 100% 100%;
      }
      .content h3{
        font-family: DFPHaiBaoW12;
        font-size: 16px;
        padding-left:10px;
      }
      .content .ullist{
      display:block;
      padding:10px;
      box-sizing:border-box;
      width:100%;
      margin:0 auto;
      display:block;
      }
      .content .ullist li{
        width:100%;
        padding-left:10px;
        line-height: 35px;
        font-size: 14px;
        font-family: DFPHaiBaoW12;
      }
      .content .ullist .radius{
          display: inline-block;
          width:20px;
          height: 20px;
          border-radius: 50%;
          border:1px solid #000;
          position: relative;
          margin-left: 15px;
           background: #ff4856;
          color: #000;
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
       
      .imgs{
        position: absolute;
        bottom: 20px;
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


      
      .imgs .img1{
        position: absolute;
        left: 50%;
        right: 50%;
        margin-left:-35%;
       margin-top: -10px;
      }

      .imgs .img2{
        position: absolute;
        right: 15px;
        top: 25px;
      }
</style>