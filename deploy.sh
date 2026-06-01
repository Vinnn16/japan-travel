#!/bin/bash
npm install
npm run build
cp -r dist/* /home/site/wwwroot/
