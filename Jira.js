searchWikipedia = function(word)
{
var query = word.selectionText;
chrome.tabs.create({url: "https://66.114.123.36:8443/browse/" +query});
};

chrome.contextMenus.create({
title: "Jira Search",
contexts:["selection"],
onclick: searchJira
});
