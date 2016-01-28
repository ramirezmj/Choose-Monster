var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
var win = Ti.UI.createWindow({
	title: 'TableView Demo',
	backgroundColor: '#0cf',
});
var Monsters = require('view/screens/Monsters');
var monsters = new Monsters();
win.add(monsters.box);
win.current_page = monsters;
win.open();