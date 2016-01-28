/**
 * @author Jose Manuel Ramírez Martínez
 */
function ElementList(data){
	
	this.box = null;
    
    this.build = function() {
		var tableData = [];
		var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
		var oddRow = false;
		
		//
		// ADD YOUR CODE HERE
		for (var i=0, j=data.length; i<j; i++) {
		  var item = data[i];
		    var row = Ti.UI.createTableViewRow({
		    height: 70,
		    backgroundColor: oddRow ? '#fff' : '#eee'
		  });
		  var image = Ti.UI.createImageView({
			image: '/images/'+item.image,
			width: 70, height: 60,
			left: 20, top: 8
		  });
		  row.add( image);
		  row.add( Ti.UI.createLabel({
		    color: '#576996',
		    font: { fontSize: defaultFontSize+6, fontWeight: 'bold'},
		    text: item.username,
		    left: 120, top: 6,
		    width: 200, height: 30
		  }));
		   row.add( Ti.UI.createLabel({
		    color: '#576996',
		    font: { fontSize: defaultFontSize},
		    text: item.exp+' Points of experience.',
		    left: 120, top: 40,
		    width: 200, height: 30
		  }));
		  tableData.push(row);
		    oddRow = !oddRow;
		}
		var tableView = Ti.UI.createTableView({ data: tableData, left: 8, right: 8});
		this.box = tableView;
	};
	this.build();
}
module.exports = ElementList;