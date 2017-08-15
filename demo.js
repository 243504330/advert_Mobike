//给markers 一个空数组
var markers = []

// 给maker定大小
var width  = 50
var height = 50

//这里是图片的数量
var picCount = 21

//marker从哪个图片开始旋转 或者是决定哪一个图片  //red_0.png red_10.png red_5.png
var status_rotate_0_num       = 0
var status_unRotate_bike_num  = 10
var status_rotate_5_num       = 5
var status_rotate_10_num      = 10
var status_unRotate_gift_num  = 1

//marker的几种形态
var status_rotate_0           = 1   // 会旋转的marker 会从第1张开始旋转
var status_unRotate_bike      = 2   // 不会旋转的单车图片
var status_rotate_5           = 3   // 会旋转的marker 会从第6张开始旋转
var status_rotate_10          = 4   // 会旋转的marker 会从第11张开始旋转
var status_unRotate_gift      = 5   // 不会旋转的礼品盒子图片

var json = {
	"data": [
		{ "id":"0" , "latitude":23.099994,"longitude":113.324587 },
		{ "id":"0" , "latitude":23.099743,"longitude":113.324556 },
		{ "id":"0" , "latitude":23.099912,"longitude":113.325497 },
		{ "id":"0" , "latitude":23.099564,"longitude":113.325585 },
		{ "id":"0" , "latitude":23.099554,"longitude":113.324512 },
		{ "id":"0" , "latitude":23.098894,"longitude":113.323524 },
		{ "id":"0" , "latitude":23.099784,"longitude":113.325442 },
		{ "id":"0" , "latitude":23.099779,"longitude":113.325656 },
		{ "id":"0" , "latitude":23.098947,"longitude":113.325551 },
		{ "id":"0" , "latitude":23.098868,"longitude":113.324368 },
		{ "id":"0" , "latitude":23.098765,"longitude":113.324556 },
		{ "id":"0" , "latitude":23.098984,"longitude":113.324610 }
	]
}
Page({
    data: {
	    markers: []
    },

    // 获取随机数的方法
    GetRandomNum: function(Min,Max){   

    	var Range = Max - Min;   

		var Rand = Math.random();   

		return(Min + Math.round(Rand * Range)); 

    },
    onLoad:function(){

    	var that = this

		markers = json.data

		for(var i = 0 ; i < markers.length ; i ++ ){

			markers[i]['status'] = that.GetRandomNum(1,5)

		}

    	setInterval(function(){

    		status_rotate_0_num   = status_rotate_0_num + 1
    		status_rotate_5_num   = status_rotate_5_num + 1
    		status_rotate_10_num  = status_rotate_10_num + 1

    		if(status_rotate_0_num == picCount){

    			status_rotate_0_num =  1

    		}

    		if(status_rotate_5_num == picCount){

    			status_rotate_5_num = 1

    		}

    		if(status_rotate_10_num == picCount){

    			status_rotate_10_num = 1 

    		}

	    	for(var i = 0 ; i < markers.length ; i ++){

	    		markers[i]['width']  = width

	    		markers[i]['height'] = height

	    		if(markers[i]['status'] == status_rotate_0){

	    			markers[i]['iconPath'] = "/img/mobike/red_"+status_rotate_0_num+".png"

	    		}

	    		if(markers[i]['status'] == status_unRotate_bike){

					markers[i]['iconPath'] = "/img/mobike/red_"+status_unRotate_bike_num+".png"

	    		}

	    		if(markers[i]['status'] == status_rotate_5){

	    			markers[i]['iconPath'] = "/img/mobike/red_"+status_rotate_5_num+".png"

	    		}

	    		if(markers[i]['status'] == status_rotate_10){

	    			markers[i]['iconPath'] = "/img/mobike/red_"+status_rotate_10_num +".png"

	    		}

	    		if(markers[i]['status'] == status_unRotate_gift){

	    			markers[i]['iconPath'] = "/img/mobike/red_"+status_unRotate_gift_num+".png"

	    		}

			}

			 that.setData({
			 	markers : markers
			})
    	},100)

    }
})
