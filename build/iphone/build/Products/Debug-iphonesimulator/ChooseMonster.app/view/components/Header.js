/**
 * @author Jose Manuel Ramírez Martínez
 */
function Header() {

    this.box = null;
    
    this.build = function() {
        var header = Ti.UI.createLabel({
            width: '100%',
            height: 100,
            text: 'Choose a Monster',
            color: '#fff',
            shadowColor: '#444',
            shadowOffset: { x: 1, y: 1 },
            font: { 
                fontSize: defaultFontSize+15, 
                fontWeight: 'bold', 
            },
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            backgroundImage: 'images/headerbg.png',
            backgroundRepeat: true
        });
        this.box = header;
    };
    
    this.build();
}

module.exports = Header;