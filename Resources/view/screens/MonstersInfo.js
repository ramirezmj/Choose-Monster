/**
 * @author Jose Manuel Ramírez Martínez
 */
function MonstersInfo(data){
	
	this.box = null;
	
	this.build = function (){
		
		var box = Ti.UI.createView({
            layout: 'vertical'
        });
        		
		var Detail = require('view/components/Detail');
		var det = new Detail(data);
		
		box.add(det.box); 
		this.box = box;
	};
	this.build();
}

module.exports = MonstersInfo;
