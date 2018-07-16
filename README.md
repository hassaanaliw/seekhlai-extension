# Seekh Lai
Learn Urdu Words on your Chrome New Tab Page Everyday

Scrapes the word of the day and an associated sher from the Rekhta website
and displays it on your Chrome New Tab page.

## Install and Run Seekh Lai Server

The server for this application is available in a [separate Github repo](https://github.com/hassaanaliw/seekhlai-api).

Clone the repository and launch the server first:

``` bash

go get github.com/hassaanaliw/seekhlai-api
cd ~/go/src/github.com/hassaanaliw/seekhlai-api
make run

```

## Build Chrome Extension

Now clone the repository and run an npm build in the folder

``` bash
git clone git@github.com:hassaanaliw/seekhlai-extension.git
npm run build
```

This will build the react app and place the files in the ``build/`` folder.

Then navigate to the [chrome://extensions](chrome://extensions) page on Google Chrome. Click on the Load Unpacked extension button at the top and navigate to the build/ folder in the repository. This should replace your New Tab page with Seekh Lai. 

Everytime you run an npm build, Chrome will automatically reload the extension from the build folder and load the changes.



## Current ScreenShot

![v0.0.1](https://raw.githubusercontent.com/hassaanaliw/seekhlai-extension/master/screens/v0.0.2.png)
