import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		goods:[],
		tab:[],
		shopNum:0,
		shopcarArr:[],
		checkArr:[],
		address_info:[],
		finaltotalPrice:0,
		editArr:[],
		registerInfo:[],
		loginInfo:[],
		saveTel:"",
		default_address:[]
	},
	mutations:{
		goodsData:function(state,data){
			state.goods.push(data)	
		},
		tabArr:function(state,data){
			state.tab=data
			//console.log(data)	
		},
		edit_address_info:function(state,arr){
			console.log(state.address_info)
			state.address_info[arr[1]]=arr[0]
		},
		add_address_info:function(state,data){
		if(Object.prototype.toString.call(data)=="[object Array]"){	
				state.address_info=data
			}else if(Object.prototype.toString.call(data)=="[object Object]"){
				state.address_info.unshift(data)
			}	

		},
		del_address:function(state,ind){
			state.address_info.splice(ind,1)

		},
		reset_default:function(state,idx){
			state.address_info=state.address_info.map((item)=>{
				item.is_default=false
				return item
			})
			state.address_info[idx].is_default=true
		},
		default_address:function(state,data){
			console.log(data)
			state.default_address=data
		},
		register:function(state,data){
			//console.log(data)
			if(Object.prototype.toString.call(data)=="[object Array]"){	
				state.registerInfo=data
			}else if(Object.prototype.toString.call(data)=="[object Object]"){
				state.registerInfo.push(data)
			}
			// if(localStorage.getItem("registerInfo")){
			// 	state.registerInfo=JSON.parse(localStorage.getItem("registerInfo"))
			// }
			// state.registerInfo.push(data)
			// localStorage.setItem("registerInfo",JSON.stringify(state.registerInfo))
			// console.log(state.registerInfo)
		},
		login:function(state,data){
			console.log(data)
			state.loginInfo=data
			
			// if(localStorage.getItem("loginInfo")){
			// 	state.loginInfo=JSON.parse(localStorage.getItem("loginInfo"))
			// 	console.log(state.loginInfo)
			// }
			// state.loginInfo.push(data)
			 localStorage.setItem("loginInfo",JSON.stringify(state.loginInfo))
		},
		shopcarListData:function(state,num){
			if(localStorage.getItem("shopcarArr")){
				state.shopcarArr=JSON.parse(localStorage.getItem("shopcarArr"))
				state.shopNum=JSON.parse(localStorage.getItem("shopcarArr")).length
			}
			if(state.shopcarArr.length==0){
				state.shopcarArr.push(num)
			}else{
				var YN=true
				state.shopcarArr.forEach(function(i,v){
					if(i.goods_id==num.goods_id){
						//console.log(i)
						i.status++
						YN=false
						
					}
				})
			}
			if(YN){
				state.shopcarArr.push(num)
				//console.log(1)
			}
			console.log(state.shopcarArr)
			localStorage.setItem("shopcarArr",JSON.stringify(state.shopcarArr))
			state.shopNum=state.shopcarArr.length
			//console.log(state.shopcarArr)


		},
		delShop(state,del){
				if(localStorage.getItem("shopcarArr")){
					state.shopcarArr=JSON.parse(localStorage.getItem("shopcarArr"))
					state.shopNum=JSON.parse(localStorage.getItem("shopcarArr")).length
				}
				del.forEach(val=>{
					state.shopcarArr.forEach((v,i)=>{
						if(val==v.goods_id){
							state.shopcarArr.splice(i,1)
						}
					})
				})
				localStorage.setItem("shopcarArr",JSON.stringify(state.shopcarArr))
				state.shopNum=state.shopcarArr.length
				//console.log(state.shopcarArr)
		},
		totalPrice:function(state,price){
			state.finaltotalPrice=price
			//console.log(state.finaltotalPrice)
		},
		checkArr:function(state,n){
			
			if(localStorage.getItem("checkArr")){
				state.checkArr=JSON.parse(localStorage.getItem("checkArr"))
			}
			
				state.checkArr=n
				//console.log(state.checkArr)
				localStorage.setItem("checkArr",JSON.stringify(state.checkArr))
			
		}


	},
	actions:{
		goodsData:function(context,data){
			context.commit("goodsData",data)
		},
		tabArr:function(context,data){
			context.commit("tabArr",data)
		}
	
	}
})
export default store