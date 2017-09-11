export default {
    popup(obj){
        var options={
            content:"",
            judge:[],
        }
        var ext=Object.assign({},options,obj)
        var div=document.createElement("div")
        var body=document.getElementsByTagName("body")[0];
        body.appendChild(div)
        div.style.top="0"
        div.style.zIndex="99999"

        body.style.position="relative"
        div.style.position="absolute"
        div.style.width="100%"
        div.style.height="100%"
        div.style.display="flex"
        div.style.justifyContent="center"
        div.style.background="rgba(0,0,0,.4)"
        var div_1=document.createElement("div")
        div.appendChild(div_1)
        div_1.style.borderRadius="10px"
        div_1.style.overflow="hidden"
        div_1.style.marginTop="200px"
        div_1.style.width="200px"
        div_1.style.height="150px"
        div_1.style.background="#fff"
        var div_1_1=document.createElement("div")
        div_1.appendChild(div_1_1)
        div_1_1.style.width="100%"
        div_1_1.style.height="100px"
        div_1_1.style.color="#000"
        div_1_1.style.textAlign="center"
        div_1_1.style.display="flex"
        div_1_1.style.alignItems="center"
        div_1_1.style.justifyContent="center"
        div_1_1.innerHTML=ext.content
        div_1_1.style.fontSize=".34rem"
        var div_1_2=document.createElement("div")
        div_1.appendChild(div_1_2)
        div_1_2.style.width="100%"
        div_1_2.style.height="50px"
        div_1_2.style.display="flex"

        for(var i=0;i<ext.judge.length;i++){
            var div_1_2_1=document.createElement("div")
            div_1_2.appendChild(div_1_2_1)
            div_1_2_1.style.display="flex"
            div_1_2_1.style.flex="1"
            div_1_2_1.style.boxSizing="border-box"
            div_1_2_1.style.border="1px solid #ccc"
            div_1_2_1.style.justifyContent="center"
            div_1_2_1.style.alignItems="center"
            div_1_2_1.style.fontSize=".32rem"
            div_1_2_1.innerHTML=ext.judge[i]
        }
        body.onclick=function(e){
            if(e.target.innerHTML==ext.judge[0]){

                ext.callback(true)
                body.removeChild(div)
            }else if(e.target.innerHTML==ext.judge[1]){
                ext.callback(false)
                body.removeChild(div)
            }
        }


    }
}