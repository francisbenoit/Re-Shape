//hey gtfo

var on = 0;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (on == 0) {
    chrome.browserAction.setIcon({path: "logo-no.png"});
    chrome.browserAction.setTitle({title: "Stop Re-Context"});

    on = 1;
    localStorage.setItem("recontext", "on");

    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, {method: "start"}, function(response) {

      });
    });
  } else {
    on = 0;
    localStorage.setItem("recontext", "off");
    chrome.browserAction.setIcon({path: "logo-yes.png"});
    chrome.browserAction.setTitle({title: "Start Re-Context"});

    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, {method: "stop"}, function(response) {

      });
    });
  }
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getStatus") {
    sendResponse({status: localStorage["recontext"]});
  } else {
    sendResponse({}); //snub dem arses
  }
});

chrome.tabs.onActivated.addListener(function(info) {
  var tabID = info.tabId;
  if (localStorage.getItem("recontext") == "on") {
    chrome.tabs.sendMessage(tabID, {method: "switchstart"}, function(response) {

    });
  } else {
    chrome.tabs.sendMessage(tabID, {method: "switchstop"}, function(response) {

    });
  }
});

//get all tabs and insert shit up
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     chrome.tabs.executeScript(tabId, {file: "style-script.js"});
//     chrome.tabs.executeScript(tabId, {file: "jquery-3.1.1.min.js"});
// });

chrome.tabs.query({}, function(tabs) {
  for (var i = 0; i < tabs.length; i++) {
    var tabid = tabs[i].id;
    chrome.tabs.executeScript(tabid, {file: "style-script.js"});
    chrome.tabs.executeScript(tabid, {file: "jquery-3.1.1.min.js"});
  }
});
