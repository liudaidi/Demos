var store=new Vuex.Store({
    state:{
        'total':0,
        'tooth':0,
        'face':0,
        'double_eye':0,
        'lip':0,
        "_if":false

    },
    mutations:{
        "tooth":function (state,num){
            state.tooth=num
            state.total=state.tooth+state.face+state.lip+state.double_eye
           
        },
        'face':function (state,num){
            state.face=num
            state.total=state.tooth+state.face+state.lip+state.double_eye
            console.log(state.total)

        },
        'double_eye':function (state,num){
            state.double_eye=num
            state.total=state.tooth+state.face+state.lip+state.double_eye
            console.log(state.total)

        },
        'lip':function (state,num){
            state.lip=num
            state.total=state.tooth+state.face+state.lip+state.double_eye
             console.log(state.total)

        },

        'total':function (state){//总价
           state.total=state.tooth+state.face+state.lip+state.double_eye
            console.log(state.total)
        },
        "_if":function (state,data){//编辑
            state._if=data
        }
    }
    
})