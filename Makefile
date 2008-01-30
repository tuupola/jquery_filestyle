# $Id: Makefile 193 2007-08-13 15:03:17Z tuupola $

VERSION = 0.9.2
SHELL = /bin/sh
DOWNLOAD = /export/home/tuupola/rails/mephisto-svn/public/download
JSPACKER = /export/home/tuupola/bin/jspacker
JSMIN    = /export/home/tuupola/bin/jsmin

all: filestyle packed minified latest

filestyle: jquery.filestyle.js
	cp jquery.filestyle.js $(DOWNLOAD)/jquery.filestyle-$(VERSION).js

packed: jquery.filestyle.js
	$(JSPACKER) -i jquery.filestyle.js -o jquery.filestyle.pack.js -f -e62
	cp jquery.filestyle.pack.js $(DOWNLOAD)/jquery.filestyle-$(VERSION).pack.js

minified: jquery.filestyle.js
	$(JSMIN) < jquery.filestyle.js > jquery.filestyle.mini.js 
	cp jquery.filestyle.mini.js $(DOWNLOAD)/jquery.filestyle-$(VERSION).mini.js

latest: jquery.filestyle.js jquery.filestyle.pack.js jquery.filestyle.mini.js
	cp jquery.filestyle.js $(DOWNLOAD)/jquery.filestyle.js
	cp jquery.filestyle.pack.js $(DOWNLOAD)/jquery.filestyle.pack.js
	cp jquery.filestyle.mini.js $(DOWNLOAD)/jquery.filestyle.mini.js

