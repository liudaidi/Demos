<template>
  <div id="app">
      <div class="header">
         <h2>填问卷，送话费</h2>
      </div>
       <div class='content'>
          <router-view></router-view>
        
      </div>
  </div>
</template>
<style>
    #app{
      font-size:12px;
      position:absolute;
      top:0;
      left: 0;
      right: 0;
      bottom:0;
      display:flex;
      flex-direction:column;

    }
    .header{
      width: 100%;
      height:48px;
      line-height:48px;
      text-align:center;
    }
    
</style>
