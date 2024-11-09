# Project Setup Instructions

Here’s a simple guide to set up this extension for your chrome and also customise it according to your need.

1. First, clone the repository to your local machine:

```bash

git clone <repository-url>
```
2. Navigate to the Project Directory

```bash
cd <project-directory>
```
3. Open Google Chrome and type the url -

```bash
chrome://extensions
```
4. Make sure to turn the developer mode on on the top right hand corner.

5. Click on Load Unpacked button on the top left hand side of your screen.

6. Select the cloned project repository and enable it.

# Customisation Instructions

In the background.js file, reach to the commented code - 
// Add your own URLs to block here - 
    // {
    //     "id": serial_id_number, // here you can add the serial number in sequential manner 
    //     "priority": 1,
    //     "action": { "type": "block" },
    //     "condition": { "urlFilter": "*://*.your_url/*", "resourceTypes": ["script", "image", "xmlhttprequest"] }  // Replace the "your_url" with the URL of the website you wish to add 
    // }
            (Make sure to only include the website name and the domain extension) eg. - facebook.com
