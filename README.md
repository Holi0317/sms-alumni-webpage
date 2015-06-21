# sms-alumni-webpage
St. Marks school alumni webpage repo

## build
This requires nodejs and npm. Please install them with your package manager.

After installing npm, execute the following command:

` # npm i -g grunt-cli bower `

Then, execute the following command in the root of cloned repo:

` $ npm install`

` $ bower install`
  
` $ grunt `

You will get a directory called dist. It is the compiled file, ready to be deployed.

## Development server
Execute ` $ grunt serve ` for a simple, localhost only http server. Also, whenever a jade, css or javascript file is changed, 
it will automatically compile them and reload the page.

However, some actions will cause unexpected result to happen. For instance,

 1. Adding or removal of page.
 2. Adding or removal of bower dependency.

If the above action need to be done, stop the serve daemon and run ` grunt ` once.
