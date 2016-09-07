//M20131024 pangkaiguo Add tooltips	START
/**
 * @author PKG
 * @description tooltip
 */
var tooltip = {
    class : 'tooltip',//显示框的class
    enable : true,//true，显示；false，不显示
    tooltipX:0,//记录做坐标
    tooltipY:0,
    showTimer : '',//需要存储临时的执行函数体
    actived : false,
    options : {
        time : 50,//时间：ms
        opacity : 0.6,
        zindex : 99999,
        padding : [2,4,2,4],
        lineHeight : 16,
        fontStyle : 'normal',
        fontFamily :'微软雅黑',
        color : '#fff',
        fontSize : 12,
        borderWidth : 1,
        borderColor : '#000',
        borderStyle : 'solid',
        borderRadius : 2,
        background : '#000',
        width : 100,
        height : 16,
        textAlign:'center'
    },
    callFunc : function(dom){
        var that = this,
            dx = $(dom)[0].offsetLeft,//响应对象的左上角X轴坐标
            dy = $(dom)[0].offsetTop,//响应对象的左上角Y轴坐标
            dw = $(dom).width(),//响应对象宽度
            dh = $(dom).height(),//响应对象高度
            sw = $(window).width(),//容器宽度
            sh = $(window).height(),//容器高度
            alt = ($(dom).attr("alt") == ""||$(dom).attr("alt") == undefined)?'':$(dom).attr("alt"),
            title = ($(dom).attr("title") == "" ||$(dom).attr("title") == undefined) ? alt : $(dom).attr("title"),//暂时存储title值或alt值
            tips = ($(dom).attr("tips") == "" || $(dom).attr("tips") == undefined) ? title : $(dom).attr("tips");//tips = title属性为空则取alt属性  
        //title置空，防止系统默认响应提示
        $(dom).attr("title","");
        
        //判断是否该显示tips:条件1：title属性值不为空；条件2：配置项enable为true。
        if(that.enable && tips){
            //计算tips长度以及坐标位置(正则表达式匹配双字节var reg = /^[u0391-uffe5]+$/;reg.test(value);)
            var count = 0,reg = /^[u0391-uffe5]+$/;
            for(var i=0;i<tips.length;i++){
                count += reg.test(tips[i])?7:14;
            }
            var posH = Math.round(count/sw)==0?1:Math.round(count/sw),
                // posX = (dx+dw+54) >= sw ? (dx-dw) : ((dx==0)?(dw/2):(dx+dw/2)),
                // posX = (dx+dw+54) >= sw ? (dx-count) : dx,
                posX = dx;
                posY = dh;//(dh - 20) > 0 ? (dh - 20)/2 : dh/2;
            //定义tooltip的样式
            var tipsTag = '<div class="'+ that.class +'" style="display:inline-block;position:absolute;left:'+ 
                        posX +'px;top:' + 
                        posY +'px;z-index:' +
                        that.options.zindex +';width:'+
                        (count+that.options.padding[1]+that.options.padding[2])+'px;height:'+
                        posH*that.options.height+'px;"><div class="'+that.class+'_box" style="filter:Alpha(opacity='+
                        that.options.opacity*100 +');opacity:'+
                        that.options.opacity +';padding:'+
                        that.options.padding[0] +'px '+
                        that.options.padding[1] +'px '+
                        that.options.padding[2] +'px '+
                        that.options.padding[3] +'px;height:'+
                        posH*that.options.height+'px;line-height:'+
                        that.options.lineHeight +'px;font-style:'+
                        that.options.fontStyle +';font-family:'+
                        that.options.fontFamily +';font-size:'+
                        that.options.fontSize +'px;color:'+
                        that.options.color +';background:'+
                        that.options.background +';border-color:'+
                        that.options.borderColor +';border-style:'+
                        that.options.borderStyle +';border-width:'+
                        that.options.borderWidth +'px;border-radius:'+
                        that.options.borderRadius +'px;text-align:'+
                        that.options.textAlign+';">'+
                        tips +'</div></div>';
            $(tipsTag).insertAfter(dom);
        }
        //绑定鼠标离开时的响应事件
        $(dom).mouseout(function(event){
            //要计算鼠标位置，因为鼠标在响应时会出tips，这是会鼠标在上方但是触发了mouseout
            // var ev = event ? event : window.event,
                // ex = ev.clientX,
                // ey = ev.clientY;
            //if(ex >= parseInt(dx+dw)|| ex <= dx || ey >= dy || ey <= parseInt(dy-dh)){
                window.clearTimeout(that.showTimer);
                $("."+ that.class).remove();
                $(dom).attr("title",title);
            //}
        });
    },
    readyFunc : function(id){
        var that = this;
        var dom = "a,div,span,li,dt,dd,img,i,b,li,h1,h2,h3,h4,h5,h6,s,td";
        if(id){
            dom = "#"+id;
        }
        that.showTimer = window.setTimeout(function(){
            $("."+ tooltip.options.class).remove();
            that.callFunc(dom);
            window.clearTimeout(that.showTimer);
        },that.options.time);
    }
};
//M20131024 pangkaiguo Add tooltips	END