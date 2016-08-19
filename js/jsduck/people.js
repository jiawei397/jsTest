/**  
* # 描述  
* 这是一个People类的描述  
*  
* **使用范例**：  
*  
*     @example  
*     var p = new People({  
*      age:2,  
*      name:'name'  
*     });  
* @class People  
* @alias widget.grid
* @alias widget.gridpanel
*/ 
 
function People(cfg){
	
}  

/** @enum */
MyEnum = {
  /** the first enum value */
  FIRST: 'foo',
  /** the second enum value */
  SECOND: 'bar'
};

People.prototype={  
    /**
    * 事件触发描述  
    * @event sleep  
    * @param {Object} ev 事件参数的描述  
    */ 

    /**
    * 初始化配置年龄  
    * @cfg {Number} age  
    */ 

    /**
    * 初始化配置名称  
    * @cfg {String} name (required)  
    */ 
    
    /**
    * 获取它的性别  
    * @property {String}  
    */ 
    sex:'male',  
 
    /**
    * 获取它的名称  
    * @return {String} 类型为字符串  
    */ 
    getName:function(){}  
}; 