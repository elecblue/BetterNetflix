//
// Better Netflix
// File: background.js
// 
// Original Author: Nik Matt
// Contributors: Nik Matt
// 
// Copyright (c) 2015, VICEGIRLS
// Source code is licensed under the Simplified BSD License, which is included 
// in the LICENSE.md file. "Netflix" and related terminology is a trademark of
// Netflix, Inc., and references to such are not intended to infringe upon 
// the rights of the property owners. Neither VICEGIRLS nor contributors claim
// ownership over third-party trademarks.
// 

// Upon extension installation and update:

chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'netflix.com' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});