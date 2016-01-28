/**
 * @author Jose Manuel Ramírez Martínez
 */
function Monsters() {

    this.box = null;
    
    this.build = function() {

        var box = Ti.UI.createView({
            layout: 'vertical'
        });

        var Header = require('view/components/Header');
        var header = new Header();
        box.add(header.box);

        var monster_data = require('data/monster_data').get();
        var ElementList = require('view/components/ElementList');
        var el = new ElementList(monster_data);
        box.add(el.box);

        this.box = box;
    };
    
    this.build();
}

module.exports = Monsters;