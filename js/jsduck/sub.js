/**  
* # 描述  
* 这是一个Sub类的描述  
* {@img img.png  alt text}  
* @class Sub  
* @extends People  
*/ 
function Sub(cfg){}  
Sub.prototype={  
    /**
    * 事件的描述  
    * @event eat  
    * @param {Object} ev  
    * 事件参数的描述  
    */ 
	
    /**
    * 配置项目描述  
    * @cfg {Object} size 大小  
    * @cfg {Number} size.height 初始化配置高度  
    * @cfg {Number} size.width 初始化配置宽度  
    */ 
	
	/**
	 * @property user A user record
	 * @property user.name The name of the user.
	 * @property user.email The email of the user.
	 */
	user: {},
    /**
    * @inheritdoc People#*  
    * @type String  
	* @readonly
    */ 
    sex:'female',  
	
	/**
     * @private
     * Dynamically adds and removes input[type=hidden] elements
     */
    setHiddenValue: function(values){},
 
    /**
    * {@link People#getName getName方法}  
    * 设置它的名称  ：
	*
	*     Ext.define('MyApp.store.States', {
	*             extend: 'Ext.data.Store',
	*       	  alias: 'store.states',
	*         	fields: ['name']
	*    	 });
	*
	*     	setName('jw','test') 
    * @param {String} firstName 姓  
    * @param {String} lastName 名
    */ 
    setName:function(firstName ,lastName){}  ,
	/**
     * @cfg {String} queryMode
     * The mode in which the ComboBox uses the configured Store. Acceptable values are:
     *
     *   - **`'remote'`** :
     *
     *     In `queryMode: 'remote'`, the ComboBox loads its Store dynamically based upon user interaction.
     *
     *     This is typically used for "autocomplete" type inputs, and after the user finishes typing, the Store is 
     *
     *     A parameter containing the typed string is sent in the load request. The default parameter name for the input
     *
     *   - **`'local'`** :
     *
     *     ComboBox loads local data
     *
     *         var combo = new Ext.form.field.ComboBox({
     *             renderTo: document.body,
     *             queryMode: 'local',
     *             store: new Ext.data.ArrayStore({
     *                 id: 0,
     *                 fields: [
     *                     'myId',  // numeric value is the key
     *                     'displayText'
     *                 ],
     *                 data: [[1, 'item1'], [2, 'item2']]  // data is local
     *             }),
     *             valueField: 'myId',
     *             displayField: 'displayText',
     *             triggerAction: 'all'
     *         });
     */
    queryMode: 'remote'
}; 