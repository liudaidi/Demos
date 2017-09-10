var app=angular.module('app',[]);
var i=-1;
app.directive('myWork',function ($http){
    return {
        restrict:'ECMA',
        template:'<div class="box"></div>',
        link:function ($scope,element,attrs){
        	$http({
        		url:'./data/data.json',	            		
        	}).success(function(data){
        		var options=data;           		
        		var box=$(element).find('.box');
					var circle=echarts.init(box.get(0));
					i++;
 					circle.setOption(options[i%data.length]);
            	})
                	
            }
            
    }
})



