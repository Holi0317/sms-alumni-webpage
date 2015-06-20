# sms-alumni-webpage
St. Marks school alumni webpage repo

## build
This requires nodejs and npm. Please install them with your package manager.

After installing npm, execute the folling command:

` # npm i -g grunt-cli bower `

Then, execute the folling command in the root of cloned repo:

` $ npm install`

` $ bower install`
  
` $ grunt `

You will get a directory called dist. It is the compiled file, ready to be deployed. To startup a development server, you may use either python or node to do that.

With python2 installed, execute in dist: 

`python2 -m SimpleHTTPServer`

However, it will crash after building as grunt will remove dist directory before building it.

To use node as development server, execute:

` # npm install -g http-server`
` $ http-server -a 127.0.0.1`

This will not crash after building. But stopping it after building will cause it cannot restart until change directory to a upper directory before going back to dist.
