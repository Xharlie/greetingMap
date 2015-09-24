/**
 * Created by charlie on 9/24/15.
 */
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

// 百度地图API功能
// 百度地图API功能
var map = new BMap.Map("allmap");
var myGeo = new BMap.Geocoder();
myGeo.getPoint("西安市碑林区钟楼骡马市2号", function(point){
    if (point) {
        map.centerAndZoom(point, 16);
        map.addOverlay(new BMap.Marker(point));

        var opts = {
//                width : 200,     // 信息窗口宽度
//                height: 100,     // 信息窗口高度
            title : getURLParameter("HTL_NM") // 信息窗口标题
        }
        var infoWindow = new BMap.InfoWindow(getURLParameter("ADDRSS"), opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    }else{
        alert("您选择地址没有解析到结果!");
    }
}, "");
var geolocationControl = new BMap.GeolocationControl();
map.addControl(geolocationControl);