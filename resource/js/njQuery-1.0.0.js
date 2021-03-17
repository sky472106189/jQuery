(function( window, undefined ) {
    var njQuery = function (selector) {
        return new njQuery.prototype.init(selector);
    }
    njQuery.prototype = {
        constructor: njQuery,
        init: function (selector) {
            // 1.传入'' null undefined NaN 0 false 返回空的jQuery对象
            if(!selector){
                return this;
            }
            // 2.字符串
            else if(typeof  selector === "string"){
                //2.1 判断是否是代码片段
                if(selector.charAt(0) == "<" &&)
                //2.2 判断是否是选择器
            }
            // 3.
        }
    }
    njQuery.prototype.init.prototype = njQuery.prototype;
    window.njQuery = window.$ = njQuery;
})( window );