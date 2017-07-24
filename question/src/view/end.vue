<template>
    <div>
        <div class="_container">
             <div class='info'>
                  <h3>魅力指数:<span>100%</span></h3>
                  <p>恭喜您！您的英语已达到<span>及格</span></p>
                  <h4>继续努力!</h4>
                  <h4>分享即可领取话费哦！</h4>
             </div>  

             <div class='line'>
                <div class="gift">
                      <p><input type='text' placeholder='请输入手机号' v-model='text'/><button id='send'  @click='send($event,4)'>获取验证码</button></p>
                      <p><input type='text' placeholder='请输入验证码' v-model='msg'/></p>
                      <button id='btn'>立即领取</button>
                </div>

             </div>    
        </div>
        
    </div>
</template>
<script>
  export default{
        data(){
          return {
            total:0,
            text:'13213704941',
            arr:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            timer:'',          
            b:'',
            ss:'',
            n:5,
            msg:''

          }
        },
        methods:{  
          send:function(e,num){
            event.target.disabled=true
            this.msg=''         
            this.ss=e.target.innerHTML;   
            this.timer=setInterval( ()=>{
              this.n--;
              console.log(this.n)        
             e.target.innerHTML=this.n
             if(this.n<=0){
                for(var i=0;i<num;i++){
                  var rand=Math.floor(Math.random()*26);
                  this.b+=this.arr[rand]
                }
                e.target.innerHTML=this.b;
                  this.msg=e.target.innerHTML
                this.n=5
                clearInterval(this.timer)
              }
            },1000)
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
       ._container{
        width:90%;
        padding: 10px;
        height: 182px;
        margin: 0 auto 0;
        position: relative;
        line-height: 40px;
        color: #000;
       
    }
   .line dl{
    width: 90%;
      display: flex;
      justify-content:space-between;
   }
    .line dl dt{
        width: 150px;
        height: 85px;
    }
    .line dl dd{
      padding-left: 10px;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 30px;
    }
    .line dl dd span{
      color: red;
    }
    .line dl dt img{
      width: 100%;
      height: 100%;
    }
    .info p,h4,h3{
      font-size: 16px;
    }
    .gift input{
      width: 80%;
      height: 30px;
      line-height:30px;
      
        background: none;
    }
    .gift p{
      position: relative;
      border-bottom: 1px solid #000;
    }
    #send{
      width: 75px;
      height: 30px;
      position: absolute;
      right: 0px;
      bottom: 0;
      background: red;
      color: #fff;
      text-align: center;
      line-height: 30px;
      border: 1px solid #000;
      border-radius: 5px;
    }
    #btn{
      width: 100%;
      height: 35px;
      margin:10px auto;
      border: none;
      text-align: center;
      line-height: 35px;
      background: red;
      color: #fff;
       border: 1px solid #000;
      border-radius: 5px;
    }
</style>