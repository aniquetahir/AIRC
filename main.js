/**
 * Created by anique on 8/29/15.
 * The inspiration for most code in this file is taken from
 * http://electron.atom.io/docs/latest/tutorial/quick-start/
 */

var app = require('app');  //Module to control application life.
var BrowserWindow = require('browser-window');  //Module to create native browser window

//Require crashes to the server
require('crash-reporter').start();

/**
 * Global reference for the main window so that it isn't
 * GC'd and closed
 */
var mainWindow = null;

app.on('window-all-closed', function(){
    //Allow OSX users to quit application using CMD+Q
    //if(process.platform != 'darwin'){
        app.quit();
    //}
});

app.on('ready', function(){
    //Create the main window
    mainWindow = new BrowserWindow({width: 400, height: 700});

    //Load the index.htm
    mainWindow.loadUrl('file://'+__dirname+'/index.html');

    //Open the devtools
    mainWindow.openDevTools();

    //Emitted when the window is closed
    mainWindow.on('closed', function(){
        mainWindow = null;
    });

});