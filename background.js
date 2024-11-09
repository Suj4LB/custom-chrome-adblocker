const blockingRules = [
    {
        "id": 1,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://*.doubleclick.net/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 2,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://partner.googleadservices.com/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 3,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://*.googlesyndication.com/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 4,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://*.google-analytics.com/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 5,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://creative.ak.fbcdn.net/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 6,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://*.adbrite.com/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 7,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://*.exponential.com/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 8,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://*.quantserve.com/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 9,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://*.scorecardresearch.com/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 10,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://*.zedo.com/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
        "id": 11,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": "*://*.leetcode.com/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    }
];

chrome.declarativeNetRequest.updateDynamicRules(
    {
        addRules: blockingRules,
        removeRuleIds: blockingRules.map(rule => rule.id) 
    },
    () => {
        if (chrome.runtime.lastError) {
            console.error("Error setting rules:", chrome.runtime.lastError);
        } else {
            console.log("Blocking rules successfully applied.");
        }
    }
);
