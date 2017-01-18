/**
 * Created by zhangguobin on 2017/1/16.
 */
var startOnBoot = require('./startOnBoot.js');

// test case 1:
// get auto start app by name
//var apps = ['IAStorIcon','QuickSet','RtHDVBg_MAXX6','RTHDVCPL','SynTPEnh','WavesSvc'];
//for(var item in apps) {
//    var appVal = startOnBoot.getAutoStartValue(apps[item],getData);
//}

// test create key
startOnBoot.createKey("AAA_");

// test remove key (测试要小心清除注册表了， 最好备份注册表)
//startOnBoot.removeKey("AAA_");

// test create name for registry key
startOnBoot.createName("testName", "testData", null);

// test update name for registry key
//startOnBoot.updateName("testName", "newTestData", null);

// test remove name for registry key
//startOnBoot.removeName("testName", null);

// get data by name from resigtry key (AAA_)
var appVal = startOnBoot.getValue('testName',getData);

function getData(appVal) {
    console.log("app data : "+appVal);
}

// test Retrieve all subkeys from this registry key(\\Software).
//var key = startOnBoot.getKeys(getKey);
//function getKey(key) {
//    console.log("subkey : "+key);
//}


//设置开机启动
//startOnBoot.enableAutoStart('<写入注册表的key>', process.execPath);
//console.log("process.execPath >>>> "+process.execPath);
//取消开机启动
//startOnBoot.disableAutoStart('<写入注册表的key>');
