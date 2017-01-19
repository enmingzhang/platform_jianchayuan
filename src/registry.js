/**
 * Created by zhangguobin on 2017/1/16.
 */
var WinReg = require('winreg');
var registry = {
    enableAutoStart: function(name, file, callback){
        var key = getKey();
        key.set(name, WinReg.REG_SZ, file, callback || noop);
    },
    disableAutoStart: function(name, callback){
        var key = getKey();
        key.remove(name, callback || noop);
    },
    getAutoStartValue: function(name, callback){
        var key = getKey();
        key.get(name, function(error, result){
            if(result){
                //console.log("result.value : "+result.value);
                callback(result.value);
            }
            else{
                callback(null, error);
            }
        });
    },
    // get value by name
    getValue: function(name, callback){
        var key = getAppKey();
        key.get(name, function(error, result){
            if(result){
                //console.log("result.value : "+result.value);
                callback(result.value);
            }
            else{
                console.log("result : "+result);
                callback(null, error);
            }
        });
    },
    //
    getKeys: function(callback){
        var softwareKey = getSoftwareKey();
        softwareKey.keys(function(error, result){
            if(result){
                for (var i=0; i<result.length; i++) {
                    var key = result[i];
                    //console.log("result.key.key : "+key.key);
                    callback(key.key);
                }
            }
            else{
                console.log("result : "+result.key);
                //callback(null, error);
            }
        });
    },
    createKey: function(key){
        console.log("create reg key with kye: "+key);
        var regKey = new WinReg({
            hive: WinReg.HKCU,
            key:  '\\SOFTWARE\\'+ key
        });
        regKey.create(function (error) {
           // todo;
        });
    },
    removeKey: function(key){
        console.log("remove reg key with kye: "+key);
        var regKey = new WinReg({
            hive: WinReg.HKCU,
            key:  '\\SOFTWARE\\AAA_'
        });
        regKey.destroy(function (error) {
            // todo;
        });
    },
    createName: function(name, file, callback){
        console.log("create name for reg key with name: "+name);
        var key = getAppKey();
        key.set(name, WinReg.REG_SZ, file, callback || noop);
    },
    updateName: function(name, file, callback){
        console.log("update name for reg key with file: "+file);
        var key = getAppKey();
        key.set(name, WinReg.REG_SZ, file, callback || noop);
    },
    removeName: function(name, callback){
        console.log("remove name for reg key with name: "+name);
        var key = getAppKey();
        key.remove(name, callback || noop);
    }
};

var RUN_LOCATION = '\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run';
function getKey(){
    return new WinReg({
        hive: WinReg.HKLM, //LocalMachine,
        key: RUN_LOCATION
    });
}
// a key that has subkeys in it
function getSoftwareKey(){
    return new WinReg({
        hive: WinReg.HKCU,
        key:  '\\Software'
    });
}

var APP_LOCATION = '\\SOFTWARE\\AAA_';
function getAppKey(){
    return new WinReg({
        hive: WinReg.HKCU, //CurrentUser,
        //hive: WinReg.HKLM, //LocalMachine,
        key: APP_LOCATION
    });
}

function noop(){}

module.exports = registry;