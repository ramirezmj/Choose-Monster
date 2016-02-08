/**
 * @author Jose Manuel Ramírez Martínez
 */
function Detail(monster){
	
	this.box = null;
	
    this.build = function() {
    	
	    var view = Ti.UI.createWindow({
	      title: monster.username,
	      backgroundColor: '#fff',
	      monster: monster
	    });
    	
    	//Create Main container for the background
	    var backgroundContainer = Ti.UI.createView({
	    	backgroundImage: '/images/backgroundDetail.png',
	    	opacity: 0.75,
	    	top: 0, bottom:0, left: 0, right:0
	    });
	    
	    view.add(backgroundContainer);
	    // Create a Navigation Bar
	    var header = Ti.UI.createView({
	    	backgroundColor: '#0056b9',
	    	opacity: 0.75,
	    	top: 0, left: 0, right: 0,
	    	height: 60 
	    });
	    view.add(header);
	    // Add a close button
	    var closeButton = Ti.UI.createButton({
	      title: 'Back',
	      top: 25, left: 5,
	      tintColor: '#fff'
	    });
	    closeButton.addEventListener('click', function() {
	      view.close();
	      view = null;  //liberar recursos
	    });
	    view.add(closeButton);
	    // Navigation Bar Title
	    view.add(Ti.UI.createLabel({
	      text: monster.username,
	      top: header.top + 30, color: '#fff',
	      font: {fontWeight: 'bold', 
	      		 fontSize: '18p'}
	    }));
	    
	    var monsterContainer = Ti.UI.createView({
	    	backgroundColor: '#fff',
	    	opacity: 0.85,
	    	top: 90, bottom:16, left: 16, right:16,
	    	borderRadius: 10
	    });
		view.add(monsterContainer);
		
	    // Content
	    var image = Ti.UI.createImageView({
			image: '/images/'+monster.image,
			width: 100, height: 100,
			left: 16, top : monsterContainer.top + 10
		});
		view.add(image);
		    
	    var descriptionLabel = Ti.UI.createLabel({
	      text: 'Description',
	      top: monsterContainer.top + 120, left: 20,
		  color: '#576996',
		  font: { fontSize: defaultFontSize, fontWeight: 'bold'}
	    });
	    view.add(descriptionLabel);
	    
	    // Experience
	    view.add(Ti.UI.createLabel({
	      text: monster.username + ' has '+ monster.exp+' points of experience.',
	      top: descriptionLabel.top + 30, left: descriptionLabel.left,
	      color: '#576996',
		  font: { fontSize: defaultFontSize},
		  lines: 2
	    }));
	    
	    view.add(Ti.UI.createLabel({
	      text: 'About this monster:',
	      top: descriptionLabel.top + 60, left: descriptionLabel.left,
		  color: '#576996',
		  font: { fontSize: defaultFontSize, fontWeight: 'bold'}
	    }));
	    
	    // Description
	    view.add(Ti.UI.createLabel({
	      text: monster.description,
	      top: descriptionLabel.top + 80, left: descriptionLabel.left,
	      right: 30,
	      color: '#576996',
		  font: { fontSize: defaultFontSize, fontWeight: 'justified'},
		  lines: 2
	    }));
	    
	    view.open();
    };
	this.build();
}
module.exports = Detail;