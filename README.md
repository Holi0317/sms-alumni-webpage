# sms-alumni-webpage
St. Marks school alumni webpage repository

## build
This requires nodejs and npm. Please install them with your package manager.

After installing npm, execute the following command:

` # npm i -g gulp bower `

Then, execute the following command in the root of cloned repo:

` $ npm install`

` $ bower install`

` $ gulp `

You will get a directory called dist. It is the compiled file, ready to be deployed.

## Development server
Execute ` $ gulp serve ` for a simple, localhost only http server. Also, whenever a jade, css or javascript file is changed,
it will automatically compile them and reload the page.
