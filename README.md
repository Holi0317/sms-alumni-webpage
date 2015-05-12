# Readme for Sports club webpage
If you are reading this file, then you are the next maintainer of this webpage 

NEVER USE WORD TO MAKE WEBPAGE 

## Introduction
This page is written with bootstrap(with material design), grunt builder(jade, coffeescript) and jquery

I have soft-coded most of the things in the code. Therefore, it will be quite easy to update informations by changing few lines of the code 

If you are not familar with jade, bootstrap, json(I use this to store member list), please google them.
Most of them have great document about them

## Build 
As I am a Linux user, I dont know how to do this under Windows. Perhaps it can be done under Windows, but I dont know

As jade template language is mush powerful than plain html(Which, saved me tones of time to update only one thing), I use this to write html 

Therefore, you have to build it before deployment 

To build them, you need: 
 - npm (nodejs package manager)
 - nodejs 
 - grunt 

These three packages need to be installed globally. Therefore, execute the following command
when you have installed npm and nodejs
`sudo npm install -g grunt`

Then, download /src, /Gruntfile.coffee, /package.json, /public\_html/bower\_components(Save it as dist/bower\_components) to your computer. goto the root of these file and execute 
`npm install`

After that, execute `grunt` to build. All files will be copied to dist/

Upload it and you are all set

## Develop
This sounds quite difficulute. But I will try my best to explain it 
I will not teach all the programming skills here. Google them if you dont know what I am talking about 

To change student list, change the src/members.json file. Follow the format will do 

This is a tool that will convert csv file to json format. [CVE to JSON](http://www.convertcsv.com/csv-to-json.htm)
You can convert xls to cve by using M$ Excel or Libreoffice

Also, change the year in `src/jade/_list.jade` to your year

Basketball team is a special condiction. Therefore please change it separetly

After changing all the words, build it and test it in a browser

If you know html, you can change things in the page. Try your best to document them down, although documenting is a hassle

## Contact me 
I am always in `/dev/null`. I have left my username somewhere around. Find it if you want to contact me. That is my github account
