var  app=angular.module('app',[]);
//angular实现echarts第一种
/*app.run(function ($rootScope,$http){
	var res=echarts.init(document.querySelector('.box'));
	$http.get('./data/res.json')
		.then(function (list){			
			//$rootScope.list=list.data;
			var options={
				series:[{
						type:"pie",
						data:list.data.data
					}]								
			}
			res.setOption(options);
		})
	
})*/

//angular实现echarts第二种    (defer对象)
/*app.run(function ($rootScope,$http,$q){
	var res=echarts.init(document.querySelector('.box'));
	function render(){
		var dfd=$q.defer();
		$http.get('data/res.json')
		.then(function (data){
			dfd.resolve(data.data.data);
		})		
		return dfd.promise;
	}
	
	render().then(function (data){
		var options={
				series:[{
						type:"pie",
						data:data
					}]								
			}
			res.setOption(options);
	})
})*/

//封装angular echarts
app.run(function ($rootScope,$http){
		$rootScope.url1='data/res.json';
		$rootScope.url2='data/res2.json';
})
app.directive('myList',function (){
	return {
		restrict:'E',	
		replace:true,
		template:'<p class="grahp"></p>',
		scope:{
			query:'='   //=是双向绑定  ，@是单向绑定
		},
		controller:function ($scope,$element,$http){//$element获取元素   
			var mes=echarts.init($element[0]);//jquery获取的是类数组，echarts只支持原生的dom
			$http.get($scope.query).then(function (data){				
					var options={
					series:[{							
							data:data.data.data
						}]						
				}
				mes.setOption(options);
			})	
		},
		link:function (scope){
			
		}
	}
})
