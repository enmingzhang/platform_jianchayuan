/**
 * Created by baozhiguo on 2017/1/17.
 */

console.log('****this is wechat *****');

// Load native UI library
const gui = require('nw.gui');

// var tray = new gui.Tray('');

var win = gui.Window.get(
    window.open('http://www.baidu.com')
);
